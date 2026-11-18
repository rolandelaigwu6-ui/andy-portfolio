"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
}

export function Button({
  children,
  className,
  variant = "primary",
  size = "md",
  asChild = false,
  ...props
}: ButtonProps) {
  const variants = {
    primary:
      "bg-navy text-white font-sans rounded-full px-6 py-2.5 text-sm font-medium shadow-sm hover:bg-gold hover:text-navy transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold",
    outline:
      "border-2 border-navy text-navy font-sans rounded-full px-6 py-2.5 text-sm font-medium bg-transparent hover:bg-navy hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold",
    ghost:
      "text-slate font-sans rounded-full px-6 py-2.5 text-sm font-medium bg-transparent hover:bg-navy/5 hover:text-navy transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold",
  };

  const sizes = {
    sm: "px-4 py-1.5 text-xs",
    md: "px-6 py-2.5 text-sm",
    lg: "px-8 py-3 text-base",
  };

  const base = cn(
    "inline-flex items-center justify-center gap-2 transition-all",
    variants[variant],
    sizes[size],
    className
  );

  if (asChild && React.isValidElement(children)) {
    const child = children as React.ReactElement<{ className?: string }>;
    return React.cloneElement(child, {
      className: cn(base, child.props.className ?? ""),
    });
  }

  return (
    <button className={base} type="button" {...props}>
      {children}
    </button>
  );
}
