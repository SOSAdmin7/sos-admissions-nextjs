'use client';

import { Suspense, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

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

export function ThankYouPaymentConversion() {
  return (
    <Suspense fallback={null}>
      <ConversionInner />
    </Suspense>
  );
}

function ConversionInner() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const source = searchParams.get('source');

    // Email funnel = $2,000, direct/public funnel = $100
    const conversionValue = source === 'email' ? 2000.0 : 100.0;
    const conversionType = source === 'email' ? 'email_purchase' : 'direct_purchase';

    waitForGtag(() => {
      const gtag = (window as any).gtag;

      // Fire Google Ads conversion with correct value based on funnel source
      gtag('event', 'conversion', {
        send_to: `${GOOGLE_ADS_ID}/${CONVERSION_LABEL}`,
        value: conversionValue,
        currency: 'USD',
      });

      // Push to dataLayer for GTM triggers
      const dataLayer = (window as any).dataLayer || [];
      dataLayer.push({
        event: 'purchase_conversion',
        conversion_type: conversionType,
        conversion_value: conversionValue,
        currency: 'USD',
        funnel_source: source || 'direct',
        page_type: 'thank_you_payment',
      });
    });
  }, [searchParams]);

  return null;
}
