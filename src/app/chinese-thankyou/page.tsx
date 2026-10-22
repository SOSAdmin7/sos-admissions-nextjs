import { pageMetadata } from "@/lib/page-metadata";
import Link from "next/link";
export const metadata = pageMetadata({
  title: { absolute: "感谢联系SOS留学" },
  description: "感谢联系SOS留学。提交咨询后请保留表格确认信息。如需确认提交情况或获得帮助，请致电310-951-4008。",
  alternates: { canonical: "https://sosadmissions.com/chinese-thankyou/" },
  openGraph: { locale: "zh_CN" },
  robots: { index: false, follow: false },
});
export default function Page() {
  return (
    <section
      lang="zh-Hans"
      className="max-w-3xl mx-auto px-4 py-10 text-center"
    >
      <h1 className="text-3xl font-bold text-navy mb-5">感谢联系SOS留学</h1>
      <p className="leading-relaxed">
        如果您刚刚提交了联系信息，我们的团队会查看您的咨询请求并与您联系。请保留表格提供的确认信息。如果您不确定是否提交成功，或需要帮助，请致电
        <a href="tel:+13109514008" className="underline">310-951-4008</a>。
      </p>
      <Link
        href="/contactchinese/"
        className="inline-block mt-6 text-navy underline"
      >
        返回中文联系页面
      </Link>
    </section>
  );
}
