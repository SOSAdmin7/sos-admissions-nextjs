"use client";

import { useMemo, useSyncExternalStore } from "react";
import { getForwardingNumber, getServerForwardingNumber, subscribeForwardingNumber } from "@/lib/phone-forwarding";
import type { ForwardingNumber } from "@/lib/phone-forwarding";

// The source HTML is the site's already-reviewed local content. Only SOS phone
// text and SOS tel targets change; markup and other organizations' numbers stay.
export function forwardPhoneHtml(html: string, number: ForwardingNumber | null) {
  if (!number) return html;
  const escaped = number.formatted.replace(/[&<>"']/g, char => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
  }[char]!));
  return html.replace(/<[^>]*>|[^<]+/g, part => part.startsWith("<")
    ? part.replace(/\bhref=(['"])tel:\+?1?3109514008\1/gi, `href="tel:${number.dial}"`)
    : part.replace(/\(310\) 951-4008|310-951-4008|3109514008/g, escaped));
}

export function PhoneHtml({ html, className, as: Element = "div" }: {
  html: string;
  className?: string;
  as?: "div" | "article";
}) {
  const number = useSyncExternalStore(subscribeForwardingNumber, getForwardingNumber, getServerForwardingNumber);
  const forwarded = useMemo(() => forwardPhoneHtml(html, number), [html, number]);
  return <Element className={className} dangerouslySetInnerHTML={{ __html: forwarded }} />;
}
