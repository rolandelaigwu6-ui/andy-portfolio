"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

const areas = [
  "Media relations", "Public relations", "Strategic communications", "Digital media management",
  "Photography", "Graphic design", "Content creation", "Visual storytelling",
];

const descriptions = [
  "Building thoughtful connections between people, organizations and the stories they share.",
  "Communicating with care, clarity and an understanding of the audiences involved.",
  "Giving ideas direction through deliberate messaging and a consistent point of view.",
  "Bringing a considered voice and visual language to digital platforms.",
  "Finding the human detail and atmosphere within a moment.",
  "Using composition, type and color to make ideas easier to see.",
  "Shaping useful, engaging material for the right audience and context.",
  "Connecting image, language and perspective to make a story resonate.",
];

export function ExpertiseIndex() {
  const [active, setActive] = useState(0);
  const reduceMotion = useReducedMotion();

  return <div className="expertise-index">
    <div className="expertise-list" role="tablist" aria-label="Professional interests" aria-orientation="vertical">
      {areas.map((area, index) => <button key={area} id={`interest-tab-${index}`} type="button" role="tab" aria-selected={active === index} aria-controls="interest-panel" onClick={() => setActive(index)} onMouseEnter={() => setActive(index)} onFocus={() => setActive(index)} className={`expertise-row ${active === index ? "is-active" : ""}`}>
        <span className="expertise-number">0{index + 1}</span><span className="expertise-label">{area}</span><span className="expertise-arrow" aria-hidden="true"><ArrowUpRight size={17} /></span>
      </button>)}
    </div>
    <div id="interest-panel" className="expertise-panel" role="tabpanel" aria-labelledby={`interest-tab-${active}`}>
      <span className="eyebrow text-bronze">Professional interest · 0{active + 1}</span>
      <AnimatePresence mode="wait" initial={false}>
        <motion.div key={active} initial={reduceMotion ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={reduceMotion ? undefined : { opacity: 0, y: -8 }} transition={{ duration: reduceMotion ? 0 : .28 }}>
          <h3 className="display-type expertise-active-title">{areas[active]}</h3>
          <p className="expertise-description">{descriptions[active]}</p>
        </motion.div>
      </AnimatePresence>
      <div className="expertise-index-mark" aria-hidden="true">0{active + 1}</div>
    </div>
  </div>;
}
