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
    if (!node || reduceMotion || !("IntersectionObserver" in window)) return;
    const frame = window.requestAnimationFrame(() => setStage("pending"));
    const timeout = window.setTimeout(() => setStage("shown"), 1800);
    const observer = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        window.setTimeout(() => setStage("shown"), delay);
        observer.disconnect();
      }
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    observer.observe(node);
    return () => {
      window.cancelAnimationFrame(frame);
      window.clearTimeout(timeout);
      observer.disconnect();
    };
  }, [delay, reduceMotion]);

  return <div ref={ref} className={`scroll-reveal ${className}`} data-reveal={stage} data-motion={variant}>{children}</div>;
}
