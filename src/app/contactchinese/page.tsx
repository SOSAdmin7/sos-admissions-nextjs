export const metadata = {
  title: { absolute: "联系SOS留学 | 免费初次咨询" },
  alternates: { canonical: "https://sosadmissions.com/contactchinese/" },
};
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
      <a
        href="https://lasernailtherapy.wufoo.com/forms/z4rbav20iiyel5/"
        className="inline-flex rounded-full bg-[#C94D2B] text-white px-6 py-3 font-semibold"
      >
        打开中文联系表格
      </a>
      <p className="text-sm text-slate-600 mt-5">
        表格将在我们的Wufoo页面打开。请在那里提交您的信息。
      </p>
    </section>
  );
}
