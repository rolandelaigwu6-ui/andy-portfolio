import { ScrollReveal } from "@/components/scroll-reveal";
import { WorkGallery } from "@/components/work-gallery";

export const metadata = {
  title: "Portfolio",
  description: "Selected professional work and event photographs from Andy Okoh Abounu's media and creative practice.",
};

export default function Portfolio() {
  return <main className="portfolio-page">
    <section className="portfolio-opener">
      <div className="container-editorial portfolio-opener-inner">
        <ScrollReveal variant="left"><p className="eyebrow text-champagne">Selected professional work · 04</p></ScrollReveal>
        <ScrollReveal variant="mask"><h1 className="display-type portfolio-title">Stories worth<br /><em>sharing.</em></h1></ScrollReveal>
        <ScrollReveal className="portfolio-intro-row" variant="right"><p>Exploring communication through strategy, creativity, and visual storytelling.</p><span>01—04 <i> / </i> A visual record</span></ScrollReveal>
      </div>
      <div className="portfolio-opener-word" aria-hidden="true">WORK</div>
    </section>
    <section className="portfolio-gallery-section">
      <div className="container-editorial portfolio-gallery-heading"><ScrollReveal variant="mask"><p className="eyebrow text-bronze">Four frames · One evolving practice</p><p className="gallery-heading-note">A selection of past professional work, presented through the moments captured in each photograph.</p></ScrollReveal></div>
      <WorkGallery />
    </section>
    <section className="portfolio-endnote"><div className="container-editorial portfolio-endnote-inner"><p className="eyebrow">Media · Creativity · Perspective</p><p className="display-type">The frame holds<br />a <em>point of view.</em></p><span>Andy Okoh Abounu · Abuja, Nigeria</span></div></section>
  </main>;
}
