import Link from "next/link";
import { ArrowDownRight, ArrowRight, ArrowUpRight } from "lucide-react";
import { HomeHero } from "@/components/home-hero";
import { ExpertiseIndex } from "@/components/expertise-index";
import { ScrollReveal } from "@/components/scroll-reveal";
import { HOME } from "@/content/home";

export default function Home() {
  return <main className="home-page">
    <HomeHero />

    <section id="introduction" className="home-introduction section-space">
      <div className="container-editorial intro-grid">
        <ScrollReveal className="intro-index"><span className="eyebrow">01 / The introduction</span><span className="intro-index-mark">AOA<span>—</span></span></ScrollReveal>
        <ScrollReveal className="intro-copy">
          <p className="eyebrow text-bronze">Purposeful communication. Meaningful impact.</p>
          <h2 className="display-type intro-heading">Ideas take shape<br />when <em>stories connect.</em></h2>
          <p className="intro-body">Andy Okoh Abounu is a Nigerian media and communications professional based in Abuja, Nigeria, with a background in Library and Information Science from Benue State University, where he graduated in 2023.</p>
          <Link href="/about" className="arrow-link">Discover Andy&apos;s story <ArrowRight /></Link>
        </ScrollReveal>
      </div>
      <div className="intro-edge-note" aria-hidden="true">A practice built on listening, clarity and purpose</div>
    </section>

    <section className="home-expertise section-space">
      <div className="container-editorial">
        <ScrollReveal className="expertise-heading-row">
          <div><p className="eyebrow text-champagne">02 / Areas of interest</p><h2 className="display-type expertise-heading">The work begins<br />with <em>a question.</em></h2></div>
          <p className="expertise-heading-note">A range of professional interests connected by one belief: thoughtful communication can move people forward.</p>
        </ScrollReveal>
        <ScrollReveal><ExpertiseIndex /></ScrollReveal>
      </div>
    </section>

    <section className="home-experience">
      <div className="experience-orbit" aria-hidden="true"><span>03</span></div>
      <div className="container-editorial experience-feature">
        <ScrollReveal className="experience-feature-kicker"><p className="eyebrow text-champagne">03 / In practice</p><span className="experience-rule" /></ScrollReveal>
        <ScrollReveal className="experience-feature-copy">
          <p className="experience-overline">Media · Leadership · Public engagement</p>
          <h2 className="display-type experience-heading">Communication at<br />the intersection of<br /><em>media and leadership.</em></h2>
          <p className="experience-description">{HOME.experienceHighlight.body}</p>
          <Link href="/experience" className="experience-link">Explore the journey <ArrowUpRight size={17} /></Link>
        </ScrollReveal>
        <ScrollReveal className="experience-footnote"><span>Current role</span><strong>Media Aide</strong><span>Abuja, Nigeria</span></ScrollReveal>
      </div>
    </section>

    <section className="home-philosophy section-space">
      <div className="container-editorial philosophy-layout">
        <ScrollReveal className="philosophy-aside"><p className="eyebrow">04 / A belief that guides the work</p><span className="philosophy-quote-mark">“</span></ScrollReveal>
        <ScrollReveal className="philosophy-copy">
          <p className="display-type philosophy-quote">{HOME.philosophy.quote}</p>
          <div className="philosophy-signoff"><span className="eyebrow text-bronze">Professional philosophy</span><p>Communication is more than information.</p></div>
        </ScrollReveal>
      </div>
    </section>

    <section className="home-values">
      <div className="container-editorial values-container">
        <ScrollReveal className="values-intro"><p className="eyebrow text-champagne">05 / What matters</p><p>Principles that shape the process and the outcome.</p></ScrollReveal>
        <div className="values-list" aria-label="Professional values">
          {HOME.values.map((value, index) => <ScrollReveal key={value.label} delay={index * 90} className="value-line"><span className="value-number">0{index + 1}</span><span className="display-type value-word">{value.label}<sup>0{index + 1}</sup></span><ArrowDownRight size={23} aria-hidden="true" /></ScrollReveal>)}
        </div>
      </div>
    </section>

    <section className="home-work-invitation section-space">
      <div className="container-editorial work-invitation-inner">
        <ScrollReveal className="work-invitation-index"><span className="eyebrow">06 / Selected work</span><span>Photography · Communication · Storytelling</span></ScrollReveal>
        <ScrollReveal className="work-invitation-copy"><h2 className="display-type">Stories are made<br />to be <em>shared.</em></h2><p>Explore a selection of past professional work through the images and moments that make up the portfolio.</p><Link href="/portfolio" className="arrow-link">View the gallery <ArrowRight /></Link></ScrollReveal>
      </div>
    </section>

    <section className="home-closing">
      <ScrollReveal className="container-editorial closing-inner">
        <p className="eyebrow text-champagne">A thoughtful conversation can be the start.</p>
        <h2 className="display-type closing-heading">Let&apos;s create<br /><em>meaningful impact.</em></h2>
        <p className="closing-description">Open to conversations around media, communication, creativity, and purposeful collaboration.</p>
        <Link href="/contact" className="closing-action">Get in touch <ArrowUpRight size={18} /></Link>
      </ScrollReveal>
      <span className="closing-index" aria-hidden="true">AOA · 2026</span>
    </section>
  </main>;
}
