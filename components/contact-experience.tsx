"use client";

import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { ContactForm } from "@/components/contact-form";
import { ScrollReveal } from "@/components/scroll-reveal";

export function ContactExperience() {
  const reduceMotion = useReducedMotion();
  const lightX = useMotionValue(-500);
  const lightY = useMotionValue(-500);
  const x = useSpring(lightX, { stiffness: 45, damping: 20, mass: .8 });
  const y = useSpring(lightY, { stiffness: 45, damping: 20, mass: .8 });

  const moveLight = (event: React.PointerEvent<HTMLElement>) => {
    if (reduceMotion || event.pointerType !== "mouse") return;
    const bounds = event.currentTarget.getBoundingClientRect();
    lightX.set(event.clientX - bounds.left);
    lightY.set(event.clientY - bounds.top);
  };

  return <main className="contact-page" onPointerMove={moveLight}>
    {!reduceMotion && <motion.div aria-hidden="true" className="contact-cursor-light" style={{ x, y }} />}
    <section className="contact-opener"><div className="container-editorial contact-opener-inner">
      <ScrollReveal variant="left"><p className="eyebrow text-champagne">A new conversation · 06</p></ScrollReveal>
      <ScrollReveal variant="mask"><h1 className="display-type contact-title">Great ideas begin<br />with <em>meaningful</em><br />conversations.</h1></ScrollReveal>
      <ScrollReveal className="contact-opener-foot" variant="right"><p>Media, communication, creativity, and purposeful collaboration.</p><span>Abuja, Nigeria</span></ScrollReveal>
    </div><span className="contact-side-note" aria-hidden="true">AOA — LET&apos;S CONNECT</span></section>
    <section className="contact-main"><div className="container-editorial contact-main-inner">
      <ScrollReveal className="contact-side" variant="left"><p className="eyebrow text-bronze">A thoughtful first step</p><h2 className="display-type">Tell me<br />what you&apos;re<br /><em>thinking about.</em></h2><p>Share a little about the conversation you have in mind. Andy is based in Abuja, Nigeria.</p><div className="contact-location"><span className="location-dot" /><span>Abuja, Nigeria</span></div></ScrollReveal>
      <ScrollReveal className="contact-form-wrap" variant="right"><p className="eyebrow">Your inquiry</p><ContactForm /></ScrollReveal>
    </div></section>
  </main>;
}
