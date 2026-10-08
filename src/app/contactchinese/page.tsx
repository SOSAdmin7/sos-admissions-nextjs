import { pageMetadata } from "@/lib/page-metadata";
import { EmbeddedForm } from "@/components/EmbeddedForm";
import { CHINESE_CONTACT_FORM } from "@/data/forms";
import type { Metadata } from "next";
export const metadata: Metadata = pageMetadata({
  title: { absolute: "联系SOS留学 | 免费初次咨询" },
  alternates: { canonical: "https://sosadmissions.com/contactchinese/" },
  description: "联系SOS留学顾问，预约15分钟免费初次电话咨询。联系电话310-951-4008，微信SOSAdmissions，也可通过中文联系表格提交申请目标。",
  openGraph: { title: "联系SOS留学 | 免费初次咨询", description: "联系SOS留学顾问，预约15分钟免费初次电话咨询。联系电话310-951-4008，微信SOSAdmissions，也可通过中文联系表格提交申请目标。", locale: "zh_CN", url: "https://sosadmissions.com/contactchinese/" },
  twitter: { card: "summary", title: "联系SOS留学 | 免费初次咨询", description: "联系SOS留学顾问，预约15分钟免费初次电话咨询。联系电话310-951-4008，微信SOSAdmissions，也可通过中文联系表格提交申请目标。" },
});
export default function Page() {
  return (
    <section lang="zh-Hans" className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl sm:text-5xl font-bold text-navy mb-6">
        联系SOS留学顾问
      </h1>
      <p className="text-lg leading-relaxed mb-6">
        请填写中文联系表格，告诉我们您的申请目标。免费初次电话咨询为15分钟（Free
        Initial
        Consultation）。也可以致电310-951-4008，或通过微信SOSAdmissions联系我们。
      </p>
      <div className="rounded-xl border border-slate-200 bg-white p-3 sm:p-6">
        <EmbeddedForm url={CHINESE_CONTACT_FORM} title="SOS留学中文联系表格" hideHeader chinese initialHeight={800} />
      </div>
    </section>
  );
}
