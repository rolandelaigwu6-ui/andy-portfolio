"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { useRef } from "react";

const portraits = [
  { src: "/images/img1.jpeg", alt: "Andy Okoh Abounu in a studio portrait", className: "hero-photo hero-photo-main", position: "center 36%" },
  { src: "/images/img2.jpeg", alt: "Close portrait of Andy Okoh Abounu", className: "hero-photo hero-photo-detail", position: "center 32%" },
  { src: "/images/img3.jpeg", alt: "Andy Okoh Abounu seated for a portrait", className: "hero-photo hero-photo-wide", position: "center 42%" },
];

export function HomeHero() {
  const root = useRef<HTMLElement | null>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: root, offset: ["start start", "end start"] });
  const imageDrift = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : 72]);
  const copyDrift = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : -34]);
  const delay = (seconds: number) => reduceMotion ? 0 : seconds;

  return <section ref={root} className="home-hero">
    <div className="home-hero-grain" aria-hidden="true" />
    <div className="home-hero-inner container-editorial">
      <motion.div className="home-hero-copy" style={{ y: copyDrift }}>
        <motion.div className="hero-signature" initial={reduceMotion ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: delay(.08) }}>
          <span className="hero-signature-mark">AOA</span><span className="hero-signature-rule" /><span className="eyebrow">Abuja, Nigeria</span>
        </motion.div>
        <h1 className="home-hero-title" aria-label="Andy Okoh Abounu">
          {["Andy Okoh", "Abounu"].map((line, index) => <span className="masked-line" key={line}><motion.span initial={reduceMotion ? false : { y: "110%" }} animate={{ y: "0%" }} transition={{ duration: .95, delay: delay(.22 + index * .13), ease: [0.22, 1, 0.36, 1] }}>{line}{index === 0 ? <span className="hero-period">.</span> : null}</motion.span></span>)}
        </h1>
        <motion.p className="home-hero-roles" initial={reduceMotion ? false : { opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: delay(.62) }}>
          Media &amp; Communications Professional <i>·</i> Creative Strategist <i>·</i> Digital Storyteller
        </motion.p>
        <p className="home-hero-motto">
          {["Communicating Ideas.", "Creating Impact.", "Building Legacies."].map((line, index) => <span className="masked-line" key={line}><motion.span initial={reduceMotion ? false : { y: "110%", opacity: .25 }} animate={{ y: "0%", opacity: 1 }} transition={{ duration: .8, delay: delay(.77 + index * .11), ease: [0.22, 1, 0.36, 1] }}>{line}</motion.span></span>)}
        </p>
        <motion.div className="home-hero-actions" initial={reduceMotion ? false : { opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .65, delay: delay(1.16) }}>
          <Link href="/portfolio" className="hero-action-primary">Explore the work <ArrowUpRight size={16} /></Link>
          <Link href="/about" className="hero-action-secondary">Meet Andy</Link>
        </motion.div>
      </motion.div>

      <div className="hero-photo-stage" aria-label="Portraits of Andy Okoh Abounu">
        <motion.figure className={portraits[0].className} style={{ y: imageDrift }} initial={reduceMotion ? false : { clipPath: "inset(100% 0 0 0)" }} animate={reduceMotion ? { clipPath: "inset(0% 0 0 0)" } : { clipPath: "inset(0% 0 0 0)", scale: [1, 1.025, 1] }} transition={{ clipPath: { duration: 1.15, delay: delay(.34), ease: [0.77, 0, 0.18, 1] }, scale: { duration: 14, repeat: Infinity, ease: "easeInOut", delay: 1.5 } }}>
          <Image src={portraits[0].src} alt={portraits[0].alt} fill priority sizes="(max-width: 760px) 86vw, 43vw" className="object-cover" style={{ objectPosition: portraits[0].position }} />
          <figcaption>01 <span>Portrait</span></figcaption>
        </motion.figure>
        <motion.figure className={portraits[1].className} initial={reduceMotion ? false : { clipPath: "inset(0 0 100% 0)", y: 34 }} animate={reduceMotion ? { clipPath: "inset(0)", y: 0 } : { clipPath: "inset(0)", y: [0, -9, 0] }} transition={{ clipPath: { duration: .9, delay: delay(.83), ease: [0.22, 1, 0.36, 1] }, y: { duration: 7.5, repeat: Infinity, ease: "easeInOut", delay: 1.8 } }}>
          <Image src={portraits[1].src} alt={portraits[1].alt} fill loading="lazy" sizes="(max-width: 760px) 33vw, 18vw" className="object-cover" style={{ objectPosition: portraits[1].position }} />
        </motion.figure>
        <motion.figure className={portraits[2].className} initial={reduceMotion ? false : { clipPath: "inset(100% 0 0 0)", x: 28 }} animate={reduceMotion ? { clipPath: "inset(0)", x: 0 } : { clipPath: "inset(0)", x: [0, 7, 0] }} transition={{ clipPath: { duration: .9, delay: delay(1.02), ease: [0.22, 1, 0.36, 1] }, x: { duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 } }}>
          <Image src={portraits[2].src} alt={portraits[2].alt} fill loading="lazy" sizes="(max-width: 760px) 48vw, 26vw" className="object-cover" style={{ objectPosition: portraits[2].position }} />
        </motion.figure>
        <motion.div className="hero-photo-note" initial={reduceMotion ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .8, delay: delay(1.28) }}><span className="hero-photo-note-line" />A presence shaped by purpose</motion.div>
      </div>
    </div>
    <motion.a href="#introduction" className="hero-scroll-cue" aria-label="Scroll to introduction" initial={reduceMotion ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: delay(1.4), duration: .8 }}>
      <span>Scroll to explore</span><span className="hero-scroll-track"><motion.span animate={reduceMotion ? undefined : { y: [0, 22, 0] }} transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }} /></span><ArrowDown size={14} />
    </motion.a>
  </section>;
}
