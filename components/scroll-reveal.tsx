"use client";

import { useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type RevealStyle = "rise" | "mask" | "left" | "right" | "scale" | "blur";

export function ScrollReveal({ children, className = "", delay = 0, variant = "rise" }: { children: React.ReactNode; className?: string; delay?: number; variant?: RevealStyle }) {
  const ref = useRef<HTMLDivElement>(null);
  const [stage, setStage] = useState<"static" | "pending" | "shown">("static");
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (reduceMotion) return;

    let frame = 0;
    let revealTimer = 0;
    let failSafe = 0;
    const horizontalScroller = node.closest<HTMLElement>(".work-gallery-rail");
    const removeListeners = () => {
      window.removeEventListener("scroll", scheduleCheck);
      window.removeEventListener("resize", scheduleCheck);
      horizontalScroller?.removeEventListener("scroll", scheduleCheck);
    };
    const revealIfReached = () => {
      frame = 0;
      const bounds = node.getBoundingClientRect();
      const verticallyReached = bounds.top < window.innerHeight * .9 && bounds.bottom > 0;
      const horizontallyReached = !horizontalScroller || (bounds.left < window.innerWidth * .92 && bounds.right > window.innerWidth * .08);
      if (!verticallyReached || !horizontallyReached) return;
      removeListeners();
      window.clearTimeout(failSafe);
      revealTimer = window.setTimeout(() => setStage("shown"), delay);
    };
    const scheduleCheck = () => {
      if (!frame) frame = window.requestAnimationFrame(revealIfReached);
    };
    failSafe = window.setTimeout(() => { removeListeners(); setStage("shown"); }, 10000);
    window.addEventListener("scroll", scheduleCheck, { passive: true });
    window.addEventListener("resize", scheduleCheck);
    horizontalScroller?.addEventListener("scroll", scheduleCheck, { passive: true });
    frame = window.requestAnimationFrame(() => {
      frame = 0;
      setStage("pending");
      scheduleCheck();
    });

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.clearTimeout(failSafe);
      window.clearTimeout(revealTimer);
      removeListeners();
    };
  }, [delay, reduceMotion]);

  return <div ref={ref} className={`scroll-reveal ${className}`} data-reveal={reduceMotion ? "static" : stage} data-motion={variant}>{children}</div>;
}
