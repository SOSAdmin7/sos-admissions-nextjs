import { pageMetadata } from "@/lib/page-metadata";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ChineseVideo } from "@/components/ChineseVideo";
import { ClientSchools } from "@/components/ClientSchools";
import { TrustBar } from "@/components/TrustLogos";
import { Users, ClipboardList, FilePenLine, GraduationCap, MessagesSquare, Target } from "lucide-react";
export const metadata: Metadata = pageMetadata({
  title: { absolute: "SOS留学 | 美国大学及研究生申请咨询" },
  alternates: { canonical: "https://sosadmissions.com/china/" },
  description: "SOS Admissions提供美国及加拿大院校申请咨询，包括选校、申请文书、简历、推荐信材料及面试准备。初次电话咨询免费，联系电话310-951-4008。",
  openGraph: { title: "SOS留学 | 美国大学及研究生申请咨询", description: "SOS Admissions提供美国及加拿大院校申请咨询，包括选校、申请文书、简历、推荐信材料及面试准备。初次电话咨询免费，联系电话310-951-4008。", locale: "zh_CN", url: "https://sosadmissions.com/china/" },
  twitter: { card: "summary", title: "SOS留学 | 美国大学及研究生申请咨询", description: "SOS Admissions提供美国及加拿大院校申请咨询，包括选校、申请文书、简历、推荐信材料及面试准备。初次电话咨询免费，联系电话310-951-4008。" },
});

const services = [
  { icon: Users, title: "一对一咨询", detail: "根据您的背景、目标和申请院校，制定个性化申请方案。" },
  { icon: Target, title: "选校与申请规划", detail: "梳理个人经历和目标，确定申请方向及准备步骤。" },
  { icon: FilePenLine, title: "申请文书与简历", detail: "个人陈述、补充文书及简历的写作与修改。" },
  { icon: ClipboardList, title: "推荐信咨询", detail: "准备推荐信材料，与推荐人沟通申请要求。" },
  { icon: MessagesSquare, title: "面试准备", detail: "一对一面试指导及模拟面试，练习清晰表达您的经历和目标。" },
  { icon: GraduationCap, title: "全程申请支持", detail: "根据所选服务或套餐，获得申请各阶段的指导。" },
];
const team = [
  { name: "David Buntt, MD, MBA", role: "医学及健康专业申请咨询", image: "/images/team/david-buntt.webp" },
  { name: "Matt Hatway", role: "大学申请咨询", image: "/images/team/matt-hatway.png" },
  { name: "Joseph Ingam, MBA, CFA", role: "大学及研究生申请咨询", image: "/images/team/joseph-ingam.webp" },
  { name: "Pattie Kim", role: "申请文书写作", image: "/images/team/pattie-kim.webp" },
  { name: "Peter Glasser", role: "MBA及商学院申请咨询", image: "/images/team/peter-glasser.png" },
];
export default function Page() {
  return (
    <div lang="zh-Hans">
      <section className="sos-hero bg-white border-b border-slate-200 text-navy px-4 py-9 md:py-12 text-center">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl sm:text-5xl font-bold mb-5">SOS留学申请咨询</h1>
          <ChineseVideo />
          <Link href="/contactchinese/" className="mt-5 inline-flex rounded-full bg-[#C94D2B] text-white px-6 py-3 font-semibold">预约免费初次咨询（Free Initial Consultation）</Link>
          <p className="mt-4"><a href="tel:+13109514008" className="underline">致电310-951-4008</a> · 微信：SOSAdmissions</p>
          <p className="max-w-3xl mx-auto mt-5 text-lg text-slate-700 leading-relaxed">这个页面是SOS Admissions公司网站的中文介绍，以方便我们讲中文的客户。</p>
        </div>
      </section>
      <TrustBar label="我们的专家团队曾被多家知名媒体采访报道" />
      <ClientSchools image={{ src: "/images/legacy/china-schools.png", alt: "SOS留学客户曾录取的院校：哈佛大学、哥伦比亚大学、芝加哥大学、纽约大学、南加州大学、加州大学伯克利分校、加州大学洛杉矶分校和乔治城大学" }} label="我们的学员曾录取的院校" />
      <div className="max-w-5xl mx-auto px-4 py-9 space-y-10">
        <nav aria-label="中文服务" className="sos-panel rounded-xl p-5 flex flex-wrap gap-5 text-navy underline">
          <Link href="/chinese-faq/">常见问题</Link>
          <Link href="/contactchinese/">联系顾问</Link>
          <Link href="/about-us/">专家团队（英文）</Link>
        </nav>
        <section>
          <h2 className="sos-heading text-center text-2xl sm:text-3xl font-bold text-navy mb-6">SOS留学服务特色及优势</h2>
          <p className="text-lg leading-relaxed text-slate-700">SOS Admissions自1998年起提供大学及研究生申请咨询服务。我们帮助申请美国和加拿大院校的学生准备个人陈述、申请文书、推荐信材料和面试，并提供选校及申请规划指导。</p>
          <div className="mt-6 grid sm:grid-cols-3 gap-4">
            {["具有招生及职业咨询经验的顾问", "为您的背景与申请目标制定方案", "通过电话或视频与顾问沟通"].map(text => <p key={text} className="sos-card rounded-xl border border-slate-200 p-5 text-navy font-semibold">{text}</p>)}
          </div>
        </section>
        <section>
          <h2 className="sos-heading text-center text-2xl sm:text-3xl font-bold text-navy mb-6">一站式美国留学申请服务</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map(({ icon: Icon, title, detail }) => <article key={title} className="sos-card rounded-xl border border-slate-200 p-5"><Icon aria-hidden="true" className="w-7 h-7 text-navy mb-4" /><h3 className="text-xl text-navy font-bold mb-3">{title}</h3><p className="text-slate-700 leading-relaxed">{detail}</p></article>)}
          </div>
        </section>
        <section>
          <h2 className="sos-heading text-center text-2xl sm:text-3xl font-bold text-navy mb-6">我们的专家团队</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {team.map(member => <article key={member.name} className="sos-card w-full sm:w-[calc((100%-1rem)/2)] lg:w-[calc((100%-2rem)/3)] rounded-xl border border-slate-200 p-5 text-center"><Image src={member.image} alt={member.name} width={112} height={130} className="mx-auto h-[130px] w-28 object-contain rounded-lg mb-4" /><h3 className="font-bold text-navy">{member.name}</h3><p className="mt-2 text-sm text-slate-700">{member.role}</p></article>)}
          </div>
          <p className="mt-5 text-center"><Link href="/about-us/" className="text-navy underline">了解我们的专家团队（英文）</Link></p>
        </section>
        <section className="sos-panel rounded-xl p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-navy mb-4">服务与收费</h2>
          <p className="leading-relaxed">初次电话咨询为15分钟，免费。具体服务与套餐收费请查看对应项目的现行价格，或先致电310-951-4008确认。请在付款前告知我们您此前已购买的服务，以便确认适用的抵扣。</p>
          <Link href="/services/" className="mt-4 inline-block text-navy underline">查看各项服务及价格（英文）</Link>
        </section>
        <div className="text-center">
          <p className="mb-5 text-lg">来电310-951-4008，或加我们的微信SOSAdmissions，与申请顾问沟通。</p>
          <Link href="/contactchinese/" className="inline-flex rounded-full bg-[#C94D2B] text-white px-6 py-3 font-semibold">预约免费初次咨询（Free Initial Consultation）</Link>
        </div>
      </div>
    </div>
  );
}
