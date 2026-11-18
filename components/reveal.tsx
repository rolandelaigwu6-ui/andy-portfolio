"use client";

import { useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

type RevealVariant = "fadeUp" | "fadeIn";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  variant?: RevealVariant;
  once?: boolean;
}

export function Reveal({
  children,
  className = "",
  variant = "fadeUp",
  once = true,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: "-120px" });

  return (
    <div
      ref={ref}
      className={cn(
        "reveal",
        `reveal-${variant}`,
        isInView && "reveal-in",
        className
      )}
    >
      {children}
    </div>
  );
}
