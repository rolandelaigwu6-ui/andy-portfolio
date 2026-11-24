import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";

export const metadata = {
  title: "Insights",
  description: "Themes and questions in media, communication, leadership and creative practice.",
};

const topics = [
  ["01", "Strategic communications", "The choices that give a message purpose, direction and clarity."],
  ["02", "Media & society", "How people, institutions and information shape public life."],
  ["03", "Leadership", "The role of responsibility, trust and vision in moving people forward."],
  ["04", "Digital storytelling", "New ways to bring ideas and audiences together."],
  ["05", "Creative entrepreneurship", "Making room for ideas, initiative and meaningful opportunity."],
  ["06", "Personal development", "The ongoing work of learning, reflection and growth."],
];

export default function Insights() {
  return <main className="insights-page">
    <section className="insights-opener">
      <div className="container-editorial insights-opener-inner">
        <ScrollReveal variant="left"><p className="eyebrow text-bronze">An editorial space · 05</p></ScrollReveal>
        <ScrollReveal variant="mask"><h1 className="display-type insights-title">Ideas,<br /><em>perspectives</em><br />&amp; insights.</h1></ScrollReveal>
        <ScrollReveal className="insights-deck" variant="right"><p>A place for considered writing on communication, media, leadership and the creative work of building what comes next.</p><span>Thoughts in progress · Abuja</span></ScrollReveal>
      </div>
      <div className="insights-aside-word" aria-hidden="true">NOTES</div>
    </section>

    <section className="insights-topics-section">
      <div className="container-editorial insights-topic-intro"><ScrollReveal variant="mask"><p className="eyebrow">Questions worth returning to</p><p className="display-type">A few of the themes<br />that <em>keep opening up.</em></p></ScrollReveal><ScrollReveal variant="right"><p className="insights-topic-copy">These subjects reflect Andy&apos;s professional interests and the questions that inform his point of view.</p></ScrollReveal></div>
      <div className="container-editorial topic-list">
        {topics.map(([number, title, description], index) => <ScrollReveal key={number} className="topic-row" variant={index % 2 ? "right" : "left"} delay={index * 45}><span className="topic-number">{number}</span><h2 className="display-type">{title}</h2><p>{description}</p><span className="topic-rule" aria-hidden="true" /></ScrollReveal>)}
      </div>
    </section>

    <section className="insights-invitation"><div className="container-editorial insights-invitation-inner"><ScrollReveal><p className="eyebrow text-champagne">When a thought is ready to be shared</p><h2 className="display-type">The conversation<br /><em>continues.</em></h2><p>For now, the best ideas often begin with a conversation.</p><Link href="/contact" className="insights-contact">Start one here <ArrowUpRight size={17} /></Link></ScrollReveal><span className="insights-invitation-index">A / 05</span></div></section>
  </main>;
}
