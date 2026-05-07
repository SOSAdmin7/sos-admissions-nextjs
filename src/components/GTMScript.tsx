'use client';

import { useEffect } from 'react';

const GOOGLE_ADS_ID = 'AW-824664390';
const CONVERSION_LABEL = 'CjAKCN-hn5IDFQPQAQAZ';

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

/** Fires Google Ads lead conversion on /thank-you (contact form submission) */
export function GTMScript() {
  useEffect(() => {
    waitForGtag(() => {
      const gtag = (window as any).gtag;

      // Google Ads conversion
      gtag('event', 'conversion', {
        send_to: `${GOOGLE_ADS_ID}/${CONVERSION_LABEL}`,
      });

      // Also push to dataLayer for GTM triggers
      const dataLayer = (window as any).dataLayer || [];
      dataLayer.push({
        event: 'lead_conversion',
        conversion_type: 'consultation_request',
        page_type: 'thank_you_lead',
      });
    });
  }, []);

  return null;
}

/** Fires Google Ads purchase conversion on /thank-you-payment (Stripe payment) */
export function GTMPaymentScript() {
  useEffect(() => {
    waitForGtag(() => {
      const gtag = (window as any).gtag;

      // Google Ads purchase conversion
      gtag('event', 'conversion', {
        send_to: `${GOOGLE_ADS_ID}/${CONVERSION_LABEL}`,
        value: 1.0,
        currency: 'USD',
      });

      // Also push to dataLayer for GTM triggers
      const dataLayer = (window as any).dataLayer || [];
      dataLayer.push({
        event: 'purchase_conversion',
        conversion_type: 'payment',
        page_type: 'thank_you_payment',
      });
    });
  }, []);

  return null;
}
