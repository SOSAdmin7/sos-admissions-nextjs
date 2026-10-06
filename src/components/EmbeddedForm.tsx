"use client";

import { useEffect, useId, useRef, useState } from "react";

const FORM_ORIGIN = "https://lasernailtherapy.wufoo.com";

export function EmbeddedForm({
  url,
  title,
  initialHeight = 900,
  hideHeader = false,
  chinese = false,
}: {
  url: string;
  title: string;
  initialHeight?: number;
  hideHeader?: boolean;
  chinese?: boolean;
}) {
  const frame = useRef<HTMLIFrameElement>(null);
  const instance = useId();
  const [height, setHeight] = useState(initialHeight);
  const source = new URL(url.replace("/forms/", "/embed/"));
  source.searchParams.set("embedKey", instance);
  if (hideHeader) source.searchParams.set("header", "hide");

  useEffect(() => {
    const iframe = frame.current;
    if (!iframe) return;
    const requestSize = () => iframe.contentWindow?.postMessage("resize", FORM_ORIGIN);
    // Wufoo's embed sends "height|embedKey" when fields/pages change.
    // Accept sizing only from this exact iframe and the existing form host.
    const receiveSize = (event: MessageEvent) => {
      if (event.origin !== FORM_ORIGIN || event.source !== iframe.contentWindow || typeof event.data !== "string") return;
      const match = /^(\d+)\|/.exec(event.data);
      if (!match) return;
      const nextHeight = Number(match[1]);
      if (nextHeight >= 100 && nextHeight <= 30000) setHeight(nextHeight);
    };
    window.addEventListener("message", receiveSize);
    window.addEventListener("resize", requestSize);
    iframe.addEventListener("load", requestSize);
    // Request an update when a payment form becomes visible after category selection.
    const observer = new ResizeObserver(requestSize);
    observer.observe(iframe);
    requestSize();
    return () => {
      window.removeEventListener("message", receiveSize);
      window.removeEventListener("resize", requestSize);
      iframe.removeEventListener("load", requestSize);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="w-full min-w-0">
      <iframe
        ref={frame}
        src={source.href}
        title={title}
        height={height}
        className="block w-full border-0 bg-white"
        allow="payment"
      />
      <p className="mt-3 text-sm text-slate-600">
        {chinese ? "如果表格无法加载，" : "If the form does not load, "}
        <a href={url} target="_blank" rel="noopener noreferrer" className="underline">
          {chinese ? "请在新标签页打开表格" : "open it in a new tab"}
        </a>
        {chinese ? "。" : "."}
      </p>
    </div>
  );
}
