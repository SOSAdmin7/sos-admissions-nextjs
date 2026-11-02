// Google supplies these values only when a forwarding number is available.
// Keeping them in React state preserves icons and updates newly mounted links.
export type ForwardingNumber = { formatted: string; dial: string };

let number: ForwardingNumber | null = null;
const listeners = new Set<() => void>();

export function setForwardingNumber(formatted: string, dial: string) {
  if (typeof formatted !== "string" || typeof dial !== "string") return;
  const digits = dial.replace(/[\s()-]/g, "");
  if (!/^\+?\d{7,15}$/.test(digits) || !formatted.trim()) return;
  const next = { formatted: formatted.trim(), dial: digits };
  if (number?.formatted === next.formatted && number?.dial === next.dial) return;
  number = next;
  listeners.forEach((listener) => listener());
}

export const getForwardingNumber = () => number;
export const getServerForwardingNumber = () => null;
export function subscribeForwardingNumber(listener: () => void) {
  listeners.add(listener);
  return () => { listeners.delete(listener); };
}
