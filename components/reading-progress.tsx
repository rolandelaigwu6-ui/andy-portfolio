"use client";

import { motion, useReducedMotion, useScroll } from "framer-motion";

export function ReadingProgress() {
  const { scrollYProgress } = useScroll();
  const reduceMotion = useReducedMotion();

  return <div className="reading-line" aria-hidden="true"><motion.span style={{ scaleY: reduceMotion ? 1 : scrollYProgress }} /></div>;
}
