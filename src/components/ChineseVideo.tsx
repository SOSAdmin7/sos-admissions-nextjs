// Original 2018 Chinese introduction, recovered from SOS's own YouTube upload
// pRU2DIFPr_0 after the original Tencent copy i071734mc9d became unavailable.
// Serve locally so visitors do not depend on either external video platform.
export function ChineseVideo() {
  return (
    <div className="mx-auto max-w-3xl overflow-hidden rounded-2xl border border-slate-200 bg-steel-mist shadow-lg">
      <video
        controls
        playsInline
        preload="metadata"
        poster="/images/legacy/china-video-poster.jpg"
        width={1280}
        height={720}
        aria-label="SOS留学公司简介视频"
        className="block aspect-video h-auto w-full"
      >
        <source src="/videos/sos-chinese-introduction.mp4" type="video/mp4" />
        您的浏览器不支持视频播放。<a href="/videos/sos-chinese-introduction.mp4">打开公司简介视频</a>。
      </video>
    </div>
  );
}
