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

    // Set server-side attribution cookie on first visit (survives Safari ITP)
    setAttributionCookie();

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

/**
 * Sets a server-side attribution cookie on first visit.
 * Captures UTM params, referrer, and landing page.
 * Only fires once per 90-day window (checks localStorage flag).
 */
function setAttributionCookie() {
  const STORAGE_KEY = 'sos_attribution_set';

  try {
    // Skip if already set this session window
    if (localStorage.getItem(STORAGE_KEY)) return;

    const params = new URLSearchParams(window.location.search);
    const hasUTM = params.has('utm_source') || params.has('utm_medium') || params.has('utm_campaign');

    // Also store in localStorage as backup
    const attribution = {
      utm_source: params.get('utm_source') || '',
      utm_medium: params.get('utm_medium') || '',
      utm_campaign: params.get('utm_campaign') || '',
      utm_content: params.get('utm_content') || '',
      utm_term: params.get('utm_term') || '',
      referrer: document.referrer || '',
      landing_page: window.location.pathname,
    };

    // Always store in localStorage for client-side access
    localStorage.setItem('sos_attribution_data', JSON.stringify(attribution));

    // Only call server API if there are UTM params or a referrer (avoid unnecessary calls)
    if (hasUTM || document.referrer) {
      fetch('/api/attribution', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(attribution),
      }).catch(() => {
        // Silent fail - localStorage backup exists
      });
    }

    localStorage.setItem(STORAGE_KEY, Date.now().toString());
  } catch {
    // localStorage not available - silent fail
  }
}
