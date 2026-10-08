import { pageMetadata } from "@/lib/page-metadata";
import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = pageMetadata({
  title: { absolute: "SOS留学 | 美国大学及研究生申请咨询" },
  alternates: { canonical: "https://sosadmissions.com/china/" },
  description: "SOS Admissions提供美国及加拿大院校申请咨询，包括选校、申请文书、简历、推荐信材料及面试准备。初次电话咨询免费，联系电话310-951-4008。",
  openGraph: { title: "SOS留学 | 美国大学及研究生申请咨询", description: "SOS Admissions提供美国及加拿大院校申请咨询，包括选校、申请文书、简历、推荐信材料及面试准备。初次电话咨询免费，联系电话310-951-4008。", locale: "zh_CN", url: "https://sosadmissions.com/china/" },
  twitter: { card: "summary", title: "SOS留学 | 美国大学及研究生申请咨询", description: "SOS Admissions提供美国及加拿大院校申请咨询，包括选校、申请文书、简历、推荐信材料及面试准备。初次电话咨询免费，联系电话310-951-4008。" },
});
export default function Page() {
  return (
    <div lang="zh-Hans">
      <section className="bg-navy text-white px-4 py-10 text-center">
        <h1 className="text-3xl sm:text-5xl font-bold mb-5">SOS留学申请咨询</h1>
        <p className="max-w-3xl mx-auto text-lg leading-relaxed">
          这个页面是SOS Admissions公司网站的中文介绍，以方便我们讲中文的客户。
        </p>
      </section>
      <div className="max-w-4xl mx-auto px-4 py-9 space-y-7">
        <nav
          aria-label="中文服务"
          className="flex flex-wrap gap-5 text-navy underline"
        >
          <Link href="/chinese-faq/">常见问题</Link>
          <Link href="/contactchinese/">联系顾问</Link>
          <Link href="/about-us/">专家团队（英文）</Link>
        </nav>
        <p className="text-lg leading-relaxed">
          SOS
          Admissions自1998年起提供大学及研究生申请咨询服务。我们帮助申请美国和加拿大院校的学生准备个人陈述、申请文书、推荐信材料和面试，并提供选校及申请规划指导。
        </p>
        <h2 className="text-2xl font-bold text-navy">一对一申请指导</h2>
        <ul className="list-disc pl-6 space-y-3">
          <li>根据您的背景、目标和申请院校制定计划</li>
          <li>个人陈述及补充文书的写作与修改</li>
          <li>选校、简历及推荐信咨询</li>
          <li>面试准备和模拟面试</li>
          <li>通过电话或视频与顾问沟通</li>
        </ul>
        <h2 className="text-2xl font-bold text-navy">服务与收费</h2>
        <p className="leading-relaxed">
          初次电话咨询为15分钟，免费。具体服务与套餐收费请查看对应项目的现行价格，或先致电310-951-4008确认。请在付款前告知我们您此前已购买的服务，以便确认适用的抵扣。
        </p>
        <Link href="/services/" className="block text-navy underline">
          查看各项服务及价格（英文）
        </Link>
        <p>微信：SOSAdmissions</p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/contactchinese/"
            className="rounded-full bg-[#C94D2B] text-white px-6 py-3 text-center font-semibold"
          >
            预约免费初次咨询（Free Initial Consultation）
          </Link>
          <a
            href="tel:+13109514008"
            className="rounded-full border border-navy px-6 py-3 text-center font-semibold text-navy"
          >
            致电310-951-4008
          </a>
        </div>
      </div>
    </div>
  );
}
