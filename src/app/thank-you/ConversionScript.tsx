'use client';

import { useEffect } from 'react';

const GOOGLE_ADS_ID = 'AW-824664390';
const CONVERSION_LABEL = 'CjAKCN-hn5IDFQPQAQAZ';
const COOKIE_NAME = 'sos_lead_converted';

function waitForGtag(callback: () => void, maxWait = 10000) {
  const start = Date.now();
  const check = () => {
    if ((window as any).gtag) {
      callback();
    } else if (Date.now() - start < maxWait) {
      setTimeout(check, 200);
    }
  };
  check();
}

export function ThankYouConversion() {
  useEffect(() => {
    // One-time $100 conversion - check cookie to prevent duplicate fires
    const alreadyConverted = document.cookie.includes(COOKIE_NAME);
    if (alreadyConverted) return;

    // Set cookie to prevent duplicate conversion (90-day expiry)
    const expires = new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toUTCString();
    document.cookie = `${COOKIE_NAME}=1; expires=${expires}; path=/; SameSite=Lax`;

    waitForGtag(() => {
      const gtag = (window as any).gtag;

      // Fire $100 lead conversion
      gtag('event', 'conversion', {
        send_to: `${GOOGLE_ADS_ID}/${CONVERSION_LABEL}`,
        value: 100.0,
        currency: 'USD',
      });

      // Push to dataLayer for GTM triggers
      const dataLayer = (window as any).dataLayer || [];
      dataLayer.push({
        event: 'lead_conversion',
        conversion_type: 'consultation_request',
        conversion_value: 100,
        currency: 'USD',
        page_type: 'thank_you_lead',
      });
    });
  }, []);

  return null;
}
