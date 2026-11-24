"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();

  return <AnimatePresence mode="wait" initial={false}>
    <motion.div key={pathname} className="page-route" initial={reduceMotion ? false : { opacity: 0.88, y: 10, clipPath: "inset(1.5% 0 0 0)" }} animate={{ opacity: 1, y: 0, clipPath: "inset(0% 0 0 0)" }} exit={reduceMotion ? undefined : { opacity: 0, y: -6 }} transition={{ duration: reduceMotion ? 0 : 0.42, ease: [0.22, 1, 0.36, 1] }}>
      {children}
    </motion.div>
  </AnimatePresence>;
}
