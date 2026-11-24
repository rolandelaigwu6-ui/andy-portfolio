"use client";

import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { ArrowUpRight, BriefcaseBusiness, GraduationCap, MapPin, Send } from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";
import { ABOUT } from "@/content/about";
import { CONTACT_CHANNELS } from "@/content/contact";
import { SITE } from "@/content/site";

const profileFacts = [
  { label: "Current role", value: "Media Aide to Hon. Chief Dr. Nelson Godwin Alapa, Ph.D.", icon: BriefcaseBusiness },
  { label: "Education", value: `${ABOUT.education.field} · ${ABOUT.education.institution} · ${ABOUT.education.year}`, icon: GraduationCap },
];

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
    <section className="contact-opener">
      <div className="container-editorial contact-opener-inner">
        <ScrollReveal variant="left"><p className="eyebrow text-champagne">Direct contact · 06</p></ScrollReveal>
        <ScrollReveal variant="mask"><h1 className="display-type contact-title">Let&apos;s connect<br /><em>with purpose.</em></h1></ScrollReveal>
        <ScrollReveal className="contact-opener-foot" variant="right">
          <p>For conversations about media, strategic communications, digital storytelling and creative collaboration.</p>
          <span>Abuja, Nigeria</span>
        </ScrollReveal>
      </div>
      <span className="contact-side-note" aria-hidden="true">AOA — LET&apos;S CONNECT</span>
    </section>

    <section className="contact-main">
      <div className="container-editorial contact-main-inner">
        <ScrollReveal className="contact-profile" variant="left">
          <p className="eyebrow text-bronze">The person behind the work</p>
          <h2 className="display-type">Andy Okoh<br /><em>Abounu.</em></h2>
          <p className="contact-biography">{ABOUT.biography}</p>
          <div className="contact-location"><MapPin size={15} aria-hidden="true" /><span>{SITE.location}</span></div>
          <div className="contact-focus">
            <span className="eyebrow">Areas of practice</span>
            <p>{ABOUT.interests.join(" · ")}</p>
          </div>
        </ScrollReveal>

        <ScrollReveal className="contact-direct" variant="right">
          <div className="contact-direct-heading">
            <p className="eyebrow">Connect directly</p>
            <p className="display-type">A good conversation<br /><em>starts here.</em></p>
          </div>
          <div className="contact-facts">
            {profileFacts.map(({ label, value, icon: Icon }) => <div className="contact-fact" key={label}>
              <Icon size={17} aria-hidden="true" />
              <span className="eyebrow">{label}</span>
              <p>{value}</p>
            </div>)}
          </div>
          {CONTACT_CHANNELS.length > 0 && <div className="contact-channels" aria-label="Direct contact methods">
            {CONTACT_CHANNELS.map((channel, index) => <a href={channel.href} key={channel.label} className="contact-channel" target={channel.external ? "_blank" : undefined} rel={channel.external ? "noreferrer" : undefined}>
              <span className="contact-channel-index">0{index + 1}</span>
              <span className="contact-channel-copy"><span className="eyebrow">{channel.label}</span><strong>{channel.value}</strong></span>
              <ArrowUpRight size={19} aria-hidden="true" />
            </a>)}
          </div>}
          <a className="contact-back-to-work" href="/portfolio"><span>Explore Andy&apos;s professional work</span><Send size={15} aria-hidden="true" /></a>
        </ScrollReveal>
      </div>
    </section>
  </main>;
}
