"use client";

import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useRef } from "react";

function HighlightWord({ progress, start, end, children, reduced }: { progress: MotionValue<number>; start: number; end: number; children: string; reduced: boolean }) {
  const color = useTransform(progress, [start, end], ["#766e65", "#211a16"]);
  return <motion.span aria-hidden="true" style={{ color: reduced ? "#211a16" : color }}>{children}</motion.span>;
}

/** A biography paragraph whose words gather into focus as the reader moves through it. */
export function ScrollHighlightText({ text, className = "" }: { text: string; className?: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 88%", "end 38%"] });
  const tokens = text.match(/\S+\s*/g) ?? [text];

  return <p ref={ref} className={className} aria-label={text}>
    {tokens.map((token, index) => <HighlightWord key={index} progress={scrollYProgress} start={index / tokens.length} end={Math.min(1, (index + 1.4) / tokens.length)} reduced={Boolean(reduceMotion)}>{token}</HighlightWord>)}
  </p>;
}
