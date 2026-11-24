"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, useScroll } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";
import { ScrollReveal } from "@/components/scroll-reveal";

const responsibilities = ["Media support", "Digital communications", "Content development", "Public engagement"];

export function ExperienceTimeline() {
  const timelineRef = useRef<HTMLElement | null>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: timelineRef, offset: ["start .8", "end .75"] });

  return <main className="experience-page">
    <section className="experience-opener">
      <div className="container-editorial experience-opener-inner">
        <ScrollReveal variant="left"><p className="eyebrow text-champagne">Professional journey · 03</p></ScrollReveal>
        <ScrollReveal variant="mask"><h1 className="display-type experience-page-title">A practice shaped<br />by <em>people and purpose.</em></h1></ScrollReveal>
        <ScrollReveal className="experience-page-deck" variant="right"><p>Media, creativity and public engagement meet in the work Andy continues to explore.</p><span>Abuja, Nigeria</span></ScrollReveal>
      </div>
      <span className="experience-orbit-mark" aria-hidden="true">AOA</span>
    </section>

    <section ref={timelineRef} className="experience-milestones">
      <div className="experience-timeline-line" aria-hidden="true"><motion.span style={{ scaleY: reduceMotion ? 1 : scrollYProgress }} /></div>
      <div className="container-editorial milestones-inner">
        <article className="milestone milestone-current">
          <ScrollReveal className="milestone-index" variant="left"><span>01</span><span className="eyebrow">Current role</span></ScrollReveal>
          <ScrollReveal className="milestone-main" variant="mask"><p className="eyebrow text-bronze">Media · Digital · Public engagement</p><h2 className="display-type milestone-title">Media<br /><em>Aide.</em></h2><p className="milestone-organization">Hon. Chief Dr. Nelson Godwin Alapa, Ph.D.</p><p className="milestone-location">Abuja, Nigeria</p><p className="milestone-description">Andy currently supports media activities, digital communications, content development and public engagement.</p>
            <div className="responsibility-list" aria-label="Responsibilities">{responsibilities.map((item, index) => <span key={item}><b>0{index + 1}</b>{item}</span>)}</div>
          </ScrollReveal>
          <ScrollReveal className="milestone-side-note" variant="right"><span className="eyebrow">In the present</span><p>Communication in service of clarity, connection and public understanding.</p></ScrollReveal>
        </article>

        <article className="milestone milestone-initiative">
          <ScrollReveal className="milestone-index" variant="left"><span>02</span><span className="eyebrow">Creative initiative</span></ScrollReveal>
          <ScrollReveal className="milestone-main" variant="mask"><p className="eyebrow text-bronze">Fashion · Confidence · Visibility</p><h2 className="display-type milestone-title">Miss Fashion<br /><em>Benue.</em></h2><p className="milestone-description">Andy previously championed Miss Fashion Benue, a pageantry-oriented initiative reflecting his interest in fashion, talent discovery, personal development and empowerment.</p><p className="milestone-description">His involvement in the creative and pageantry space represents another dimension of his broader interest in creating platforms that encourage confidence, visibility and individual potential.</p><div className="initiative-threads"><span>Talent discovery</span><span>Personal development</span><span>Creative empowerment</span></div></ScrollReveal>
          <ScrollReveal className="milestone-image-note" variant="scale"><figure className="image-frame milestone-image"><Image src="/images/img5.jpeg" alt="Andy speaking at an event beside a participant wearing a sash" fill sizes="(max-width: 760px) 90vw, 34vw" className="object-cover" /></figure><p className="eyebrow">From the professional work gallery</p></ScrollReveal>
        </article>

        <article className="milestone milestone-education">
          <ScrollReveal className="milestone-index" variant="left"><span>03</span><span className="eyebrow">Education · 2023</span></ScrollReveal>
          <ScrollReveal className="milestone-main" variant="mask"><p className="eyebrow text-bronze">Knowledge · Information · Perspective</p><h2 className="display-type milestone-title">A foundation<br />in <em>information.</em></h2><p className="milestone-organization">Benue State University</p><p className="milestone-description">Library and Information Science. Andy graduated in 2023.</p></ScrollReveal>
          <ScrollReveal className="education-stamp" variant="scale"><span>2023</span><span>Benue State University</span></ScrollReveal>
        </article>
      </div>
    </section>

    <section className="experience-endnote"><div className="container-editorial experience-endnote-inner"><p className="eyebrow">Work in progress, by nature</p><p className="display-type">Always learning.<br /><em>Always listening.</em></p><Link href="/contact" className="arrow-link">Start a conversation <ArrowUpRight /></Link></div></section>
  </main>;
}
