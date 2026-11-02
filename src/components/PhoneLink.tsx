"use client";

import { Children, cloneElement, isValidElement, useSyncExternalStore } from "react";
import type { AnchorHTMLAttributes, ReactElement, ReactNode } from "react";
import { getForwardingNumber, getServerForwardingNumber, subscribeForwardingNumber } from "@/lib/phone-forwarding";

function replaceNumber(children: ReactNode, formatted: string): ReactNode {
  return Children.map(children, (child) => {
    if (typeof child === "string") {
      return child.replace(/\(310\) 951-4008|310-951-4008|3109514008/g, formatted);
    }
    if (isValidElement<{ children?: ReactNode }>(child) && child.props.children) {
      return cloneElement(child as ReactElement<{ children?: ReactNode }>, {
        children: replaceNumber(child.props.children, formatted),
      });
    }
    return child;
  });
}

export function PhoneLink({ children, href = "tel:+13109514008", ...props }: AnchorHTMLAttributes<HTMLAnchorElement>) {
  const number = useSyncExternalStore(subscribeForwardingNumber, getForwardingNumber, getServerForwardingNumber);
  return (
    <a {...props} href={number ? `tel:${number.dial}` : href}>
      {number ? replaceNumber(children, number.formatted) : children}
    </a>
  );
}

export function PhoneText({ children }: { children: ReactNode }) {
  const number = useSyncExternalStore(subscribeForwardingNumber, getForwardingNumber, getServerForwardingNumber);
  return <>{number ? replaceNumber(children, number.formatted) : children}</>;
}
