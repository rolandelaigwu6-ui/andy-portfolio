import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";
import { ReadingProgress } from "@/components/reading-progress";
import { ScrollHighlightText } from "@/components/scroll-highlight-text";
import { ABOUT } from "@/content/about";
import { SITE } from "@/content/site";

export const metadata = {
  title: "About",
  description: "The background, professional direction and philosophy of Andy Okoh Abounu.",
};

const chapters = [
  { number: "01", title: "Background", body: ABOUT.biography },
  { number: "02", title: "Professional direction", body: `His professional interests and experience span ${ABOUT.interests.slice(0, -1).join(", ").toLowerCase()} and ${ABOUT.interests.at(-1)?.toLowerCase()}.` },
  { number: "03", title: "Purpose", body: ABOUT.journey[0] },
  { number: "04", title: "Professional journey", body: ABOUT.journey[1] },
  { number: "05", title: "Beyond the profession", body: "Beyond his professional engagements, he maintains a strong interest in leadership, personal development, creative entrepreneurship, institutional development, human development and societal advancement." },
];

export default function About() {
  return <main className="about-page">
    <section className="about-opener">
      <div className="container-editorial about-opener-grid">
        <div className="about-opener-copy">
          <ScrollReveal variant="left"><p className="eyebrow text-bronze">A personal introduction · Abuja, Nigeria</p></ScrollReveal>
          <ScrollReveal variant="mask"><h1 className="display-type about-title">Behind the<br /><em>communication.</em><br />Beyond the creative.</h1></ScrollReveal>
          <ScrollReveal variant="right"><p className="about-deck">A story shaped by curiosity, purposeful communication and the belief that ideas can open new possibilities.</p></ScrollReveal>
        </div>
        <ScrollReveal className="about-portrait-wrap" variant="scale">
          <figure className="image-frame about-portrait-frame"><Image src="/images/img2.jpeg" alt="Portrait of Andy Okoh Abounu" fill priority sizes="(max-width: 760px) 82vw, 39vw" className="about-portrait" /></figure>
          <p className="about-portrait-caption"><span>Andy Okoh Abounu</span><span>Media &amp; Communications Professional</span></p>
        </ScrollReveal>
      </div>
      <div className="about-opener-index" aria-hidden="true">A / 01</div>
    </section>

    <section className="about-chapters" aria-label="About Andy, six chapters">
      <ReadingProgress />
      <div className="container-editorial about-chapters-inner">
        {chapters.map((chapter, index) => <article key={chapter.number} className={`about-chapter ${index % 2 ? "about-chapter-offset" : ""}`}>
          <ScrollReveal className="chapter-rail" variant="left" delay={index * 55}><span className="chapter-number">{chapter.number}</span><span className="chapter-rail-line" /></ScrollReveal>
          <ScrollReveal className="chapter-copy" variant="mask" delay={index * 55}><p className="eyebrow text-bronze">Chapter {chapter.number}</p><h2 className="display-type chapter-title">{chapter.title}</h2><ScrollHighlightText className="chapter-body" text={chapter.body} />
            {chapter.number === "01" && <div className="education-note"><span className="eyebrow">Education</span><p>{ABOUT.education.institution}<br /><span>{ABOUT.education.field} · {ABOUT.education.year}</span></p></div>}
          </ScrollReveal>
        </article>)}
        <article className="about-chapter about-philosophy-chapter">
          <ScrollReveal className="chapter-rail" variant="left"><span className="chapter-number">06</span><span className="chapter-rail-line" /></ScrollReveal>
          <ScrollReveal className="chapter-copy" variant="mask"><p className="eyebrow text-bronze">Chapter 06 · Philosophy</p><h2 className="display-type chapter-title">A standard<br /><em>to return to.</em></h2><p className="about-values">Professionalism <span>•</span> Integrity <span>•</span> Excellence</p><p className="about-motto">“{SITE.motto}”</p></ScrollReveal>
        </article>
      </div>
    </section>

    <section className="about-education-strip">
      <div className="container-editorial education-strip-inner"><p className="eyebrow">The foundation</p><p className="display-type">Library &amp; Information Science</p><p>Benue State University <span>·</span> Graduated 2023</p><Link href="/experience" aria-label="See professional experience"><ArrowUpRight size={19} /></Link></div>
    </section>
  </main>;
}
