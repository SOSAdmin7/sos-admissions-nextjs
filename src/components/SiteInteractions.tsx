"use client";

import { useEffect } from "react";
import { analyticsTargetPath, isAnalyticsHost, trackSiteEvent } from "@/lib/site-analytics";

export function SiteInteractions() {
  useEffect(() => {
    if (!isAnalyticsHost(window.location.hostname)) return;
    const clicked = (event: MouseEvent) => {
      if (!(event.target instanceof Element)) return;
      const link = event.target.closest("a[href]");
      if (!link) return;
      const href = link.getAttribute("href") || "";
      const link_area = link.closest("header") ? "header" : link.closest("footer") ? "footer" : "content";
      // A click is call intent, never a completed call or Ads conversion.
      if (href.startsWith("tel:")) trackSiteEvent("sos_phone_click", { link_area });
      else {
        const target_path = analyticsTargetPath(href, window.location.origin);
        if (target_path) trackSiteEvent("sos_cta_click", { target_path, link_area });
      }
    };
    const videos = new WeakMap<HTMLVideoElement, Set<number>>();
    const videoEvent = (event: Event) => {
      const video = event.target;
      if (!(video instanceof HTMLVideoElement)) return;
      const source = video.querySelector("source")?.getAttribute("src");
      if (source !== "/videos/sos-chinese-introduction.mp4") return;
      const sent = videos.get(video) || new Set<number>();
      videos.set(video, sent);
      const params = { video_id: "chinese_introduction" };
      if (event.type === "playing" && !sent.has(0)) {
        sent.add(0);
        trackSiteEvent("sos_video_start", params);
      }
      if (event.type === "timeupdate" && sent.has(0) && Number.isFinite(video.duration) && video.duration > 0) {
        const percent = 100 * video.currentTime / video.duration;
        for (const threshold of [25, 50, 75]) {
          // Playhead milestones can include seeking; they are not watch time.
          if (percent >= threshold && !sent.has(threshold)) {
            sent.add(threshold);
            trackSiteEvent("sos_video_progress", { ...params, video_percent: threshold });
          }
        }
      }
      if (event.type === "ended" && !sent.has(100)) {
        sent.add(100);
        trackSiteEvent("sos_video_complete", { ...params, video_percent: 100 });
      }
    };
    document.addEventListener("click", clicked, true);
    for (const name of ["playing", "timeupdate", "ended"]) document.addEventListener(name, videoEvent, true);
    return () => {
      document.removeEventListener("click", clicked, true);
      for (const name of ["playing", "timeupdate", "ended"]) document.removeEventListener(name, videoEvent, true);
    };
  }, []);
  return null;
}
