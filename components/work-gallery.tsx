"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { PORTFOLIO } from "@/content/portfolio";
import { ScrollReveal } from "@/components/scroll-reveal";

const work = PORTFOLIO.images;

export function WorkGallery() {
  const [active, setActive] = useState<number | null>(null);
  const rail = useRef<HTMLDivElement>(null);
  const closeButton = useRef<HTMLButtonElement>(null);
  const opener = useRef<HTMLElement | null>(null);
  const touchStart = useRef<number | null>(null);
  const reduceMotion = useReducedMotion();

  const show = (index: number, element: HTMLElement) => { opener.current = element; setActive(index); };
  const close = () => setActive(null);
  const move = (direction: number) => setActive((index) => index === null ? null : (index + direction + work.length) % work.length);

  useEffect(() => {
    if (active === null) return;
    document.body.style.overflow = "hidden";
    const frame = window.requestAnimationFrame(() => closeButton.current?.focus());
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowRight") move(1);
      if (event.key === "ArrowLeft") move(-1);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
      opener.current?.focus();
    };
  }, [active]);

  const scrollRail = (direction: number) => {
    const node = rail.current;
    if (!node) return;
    node.scrollBy({ left: direction * Math.max(node.clientWidth * .72, 300), behavior: reduceMotion ? "instant" : "smooth" });
  };

  return <>
    <div className="gallery-controls" aria-label="Gallery controls">
      <span><b>0{active === null ? "1" : active + 1}</b> <i>/</i> 04</span>
      <div><button type="button" aria-label="Previous gallery image" onClick={() => scrollRail(-1)}><ArrowLeft /></button><button type="button" aria-label="Next gallery image" onClick={() => scrollRail(1)}><ArrowRight /></button></div>
    </div>
    <div ref={rail} className="work-gallery-rail" role="region" aria-label="Past professional work photographs" tabIndex={0}>
      {work.map((item, index) => <ScrollReveal className={`gallery-reveal gallery-reveal-${index + 1}`} key={item.src} variant="scale" delay={index * 70}><article className={`gallery-slide gallery-slide-${index + 1}`}>
        <button type="button" className="gallery-image-button" onClick={(event) => show(index, event.currentTarget)} aria-label={`Open image ${index + 1}: ${item.alt}`}>
          <span className="gallery-image-frame"><Image src={item.src} alt={item.alt} fill priority={index === 0} loading={index === 0 ? "eager" : "lazy"} sizes="(max-width: 700px) 86vw, 72vw" className="gallery-image" /></span>
          <span className="gallery-expand-mark" aria-hidden="true">+</span>
        </button>
        <div className="gallery-caption"><span className="eyebrow">Professional work · 0{index + 1}</span><p>{item.caption}</p></div>
      </article></ScrollReveal>)}
    </div>
    <p className="gallery-hint"><span className="gallery-hint-line" />Drag, swipe, or use the arrows to move through the gallery</p>

    <AnimatePresence>
      {active !== null && <motion.div className="gallery-lightbox" role="dialog" aria-modal="true" aria-label={`Work photograph ${active + 1} of ${work.length}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: reduceMotion ? 0 : .25 }} onMouseDown={(event) => { if (event.target === event.currentTarget) close(); }} onTouchStart={(event) => { touchStart.current = event.touches[0]?.clientX ?? null; }} onTouchEnd={(event) => { if (touchStart.current === null) return; const delta = (event.changedTouches[0]?.clientX ?? touchStart.current) - touchStart.current; if (Math.abs(delta) > 55) move(delta < 0 ? 1 : -1); touchStart.current = null; }}>
        <div className="lightbox-top"><span className="eyebrow">Past professional work</span><button ref={closeButton} type="button" className="lightbox-close" onClick={close} aria-label="Close image preview"><X /></button></div>
        <button type="button" className="lightbox-arrow lightbox-prev" onClick={() => move(-1)} aria-label="Previous image"><ArrowLeft /></button>
        <motion.figure key={active} className="lightbox-figure" initial={reduceMotion ? false : { opacity: .4, scale: .985 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: reduceMotion ? 0 : .32 }}>
          <Image src={work[active].src} alt={work[active].alt} fill sizes="94vw" className="lightbox-image" priority />
          <figcaption><span>{work[active].caption}</span><b>0{active + 1} <i>/</i> 04</b></figcaption>
        </motion.figure>
        <button type="button" className="lightbox-arrow lightbox-next" onClick={() => move(1)} aria-label="Next image"><ArrowRight /></button>
      </motion.div>}
    </AnimatePresence>
  </>;
}
