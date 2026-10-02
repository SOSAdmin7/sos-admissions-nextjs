import Link from "next/link";
export const metadata = {
  title: { absolute: "咨询信息 | SOS留学" },
  robots: { index: false, follow: false },
};
export default function Page() {
  return (
    <section
      lang="zh-Hans"
      className="max-w-3xl mx-auto px-4 py-10 text-center"
    >
      <h1 className="text-3xl font-bold text-navy mb-5">咨询信息</h1>
      <p className="leading-relaxed">
        提交联系表格后，请查看表格显示的确认信息。仅访问本页面不会提交咨询请求。如需帮助，请致电310-951-4008。
      </p>
      <Link
        href="/contactchinese/"
        className="inline-block mt-6 text-blue-800 underline"
      >
        返回中文联系页面
      </Link>
    </section>
  );
}
