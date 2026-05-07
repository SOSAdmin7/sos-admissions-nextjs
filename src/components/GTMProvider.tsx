'use client';

import { useEffect } from 'react';

const GTM_ID = 'GTM-K86JCR92';
const GOOGLE_ADS_ID = 'AW-824664390';

export function GTMScript() {
  useEffect(() => {
    let loaded = false;
    const load = () => {
      if (loaded) return;
      loaded = true;

      // Initialize dataLayer
      const w = window as any;
      w.dataLayer = w.dataLayer || [];

      // Define gtag function (needed for Google Ads conversion tracking)
      // eslint-disable-next-line prefer-rest-params
      w.gtag = function() { w.dataLayer.push(arguments); };
      w.gtag('js', new Date());
      w.gtag('config', GOOGLE_ADS_ID);

      // Load GTM
      w.dataLayer.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
      const gtmScript = document.createElement('script');
      gtmScript.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
      gtmScript.async = true;
      document.head.appendChild(gtmScript);

      // Load Google Ads gtag.js (enables gtag conversion calls)
      const gtagScript = document.createElement('script');
      gtagScript.src = `https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`;
      gtagScript.async = true;
      document.head.appendChild(gtagScript);
    };

    // Load after user interaction or 5s timeout (performance optimization)
    const events = ['scroll', 'click', 'touchstart', 'keydown'];
    const handler = () => {
      load();
      events.forEach((e) => window.removeEventListener(e, handler));
    };
    events.forEach((e) => window.addEventListener(e, handler, { once: true, passive: true }));
    const timer = setTimeout(load, 5000);

    return () => {
      clearTimeout(timer);
      events.forEach((e) => window.removeEventListener(e, handler));
    };
  }, []);

  return null;
}

export function GTMNoScript() {
  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
        height="0"
        width="0"
        style={{ display: 'none', visibility: 'hidden' }}
      />
    </noscript>
  );
}
