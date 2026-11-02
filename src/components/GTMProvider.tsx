"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { setForwardingNumber } from "@/lib/phone-forwarding";

const GTM_ID = "GTM-K86JCR92";
const GOOGLE_ADS_ID = "AW-824664390";

type TrackingWindow = Window & {
  dataLayer: unknown[];
  gtag: (...args: unknown[]) => void;
  sosTrackingInitialized?: boolean;
  sosLastTrackedPath?: string;
};

function isProductionHost() {
  return ["sosadmissions.com", "www.sosadmissions.com"].includes(window.location.hostname);
}

export function GTMScript() {
  const pathname = usePathname();

  useEffect(() => {
    if (!isProductionHost()) return;
    const w = window as unknown as TrackingWindow;
    if (!w.sosTrackingInitialized) {
      w.sosTrackingInitialized = true;

      // Initialize dataLayer
      w.dataLayer = w.dataLayer || [];

      // Define gtag function (needed for Google Ads conversion tracking)
      w.gtag = w.gtag || function () {
        // Google's command queue expects the arguments object.
        // eslint-disable-next-line prefer-rest-params
        w.dataLayer.push(arguments);
      };
      w.gtag("js", new Date());
      w.gtag("config", GOOGLE_ADS_ID);

      // One phone setup owns both the displayed number and the dial target.
      // Google calls this only when it can supply a forwarding number.
      w.gtag("config", GOOGLE_ADS_ID + "/k2zvCLyEzpQBEMbCnYkD", {
        phone_conversion_number: "(310) 951-4008",
        phone_conversion_callback: setForwardingNumber,
      });

      // Load GTM
      w.dataLayer.push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
      const gtmScript = document.createElement("script");
      gtmScript.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
      gtmScript.async = true;
      document.head.appendChild(gtmScript);

      // Load Google Ads gtag.js (enables gtag conversion calls)
      const gtagScript = document.createElement("script");
      gtagScript.src = `https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`;
      gtagScript.async = true;
      document.head.appendChild(gtagScript);
    }

    // Initialize immediately after hydration so an early navigation/call does
    // not have to wait for the former interaction/five-second delay.
    setAttributionCookie();
  }, []);

  useEffect(() => {
    if (!isProductionHost() || !pathname) return;
    const w = window as unknown as TrackingWindow;
    const path = pathname.replace(/\/$/, "") + "/";
    // Pathname changes cover committed client navigation and back/forward.
    // Hash/query changes and Strict Mode effect replays do not create entries.
    if (w.sosLastTrackedPath === path) return;
    w.sosLastTrackedPath = path;
    w.dataLayer = w.dataLayer || [];
    w.dataLayer.push({
      event: "sos_route_view",
      sos_route_path: path,
      sos_route_url: window.location.href,
    });
  }, [pathname]);

  return null;
}

export function GTMNoScript() {
  return null;
}

/**
 * Sets a server-side attribution cookie on first visit.
 * Captures UTM params, referrer, and landing page.
 * Only fires once per 90-day window (checks localStorage flag).
 */
function setAttributionCookie() {
  const STORAGE_KEY = "sos_attribution_set";

  try {
    // Skip if already set this session window
    if (localStorage.getItem(STORAGE_KEY)) return;

    const params = new URLSearchParams(window.location.search);
    const hasUTM =
      params.has("utm_source") ||
      params.has("utm_medium") ||
      params.has("utm_campaign");

    // Also store in localStorage as backup
    const attribution = {
      utm_source: params.get("utm_source") || "",
      utm_medium: params.get("utm_medium") || "",
      utm_campaign: params.get("utm_campaign") || "",
      utm_content: params.get("utm_content") || "",
      utm_term: params.get("utm_term") || "",
      referrer: document.referrer || "",
      landing_page: window.location.pathname,
    };

    // Always store in localStorage for client-side access
    localStorage.setItem("sos_attribution_data", JSON.stringify(attribution));

    // Only call server API if there are UTM params or a referrer (avoid unnecessary calls)
    if (hasUTM || document.referrer) {
      fetch("/api/attribution", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
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
