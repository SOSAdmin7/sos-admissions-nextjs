import { pageMetadata } from "@/lib/page-metadata";
import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = pageMetadata({
  title: { absolute: "常见问题 | SOS留学" },
  alternates: { canonical: "https://sosadmissions.com/chinese-faq/" },
  description: "了解SOS留学的申请咨询、选校、文书及面试服务，以及免费初次咨询、收费确认和远程咨询安排。",
  openGraph: { title: "常见问题 | SOS留学", description: "了解SOS留学的申请咨询、选校、文书及面试服务，以及免费初次咨询、收费确认和远程咨询安排。", locale: "zh_CN", url: "https://sosadmissions.com/chinese-faq/" },
  twitter: { card: "summary", title: "常见问题 | SOS留学", description: "了解SOS留学的申请咨询、选校、文书及面试服务，以及免费初次咨询、收费确认和远程咨询安排。" },
});
const questions = [
  {
    q: "SOS留学可以提供哪些帮助？",
    a: "我们提供申请规划、选校、个人陈述及申请文书写作与修改、推荐信咨询和面试准备。具体服务范围取决于您选择的项目和套餐。",
  },
  {
    q: "不住在洛杉矶也可以接受咨询吗？",
    a: "可以。我们通过电话、视频及其他线上沟通方式与不同地区的申请人合作。请联系团队安排合适的时间。",
  },
  {
    q: "初次咨询需要付费吗？",
    a: "初次电话咨询为15分钟，免费（Free Initial Consultation）。后续服务按所选项目或套餐收费。",
  },
  {
    q: "能保证被某所学校录取吗？",
    a: "不能。最终录取决定由院校作出。我们会根据您的背景和目标提供申请指导。",
  },
  {
    q: "如何确认价格？",
    a: "请查看对应项目页面的现行价格，并在付款前确认服务范围。如已购买过服务、需要增加学校或安排加急服务，请先联系顾问确认适用费用和抵扣。",
  },
  {
    q: "套餐退款如何处理？",
    a: "申请套餐退款时，已完成的服务按小时费率计费，剩余余额退还。请联系团队确认已完成的工作和适用金额。",
  },
];
export default function Page() {
  return (
    <section lang="zh-Hans" className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl sm:text-5xl font-bold text-navy mb-7">
        常见问题
      </h1>
      {questions.map((x) => (
        <details key={x.q} className="border-b border-slate-200 py-5">
          <summary className="font-semibold text-navy cursor-pointer">
            {x.q}
          </summary>
          <p className="text-slate-600 leading-relaxed mt-3">{x.a}</p>
        </details>
      ))}
      <Link
        href="/contactchinese/"
        className="inline-block mt-7 text-navy underline"
      >
        预约免费初次咨询（Free Initial Consultation）
      </Link>
    </section>
  );
}
