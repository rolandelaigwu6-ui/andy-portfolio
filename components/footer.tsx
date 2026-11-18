"use client";

import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-navy/5 bg-navy text-ivory py-10 lg:py-16 mt-auto">
      <div className="container-premium flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2 font-display text-2xl font-bold text-navy bg-ivory inline-block px-3 py-1 rounded-md tracking-tight">
          <span className="text-gold">A</span>OA.
        </div>
        <p className="text-sm text-slate text-center md:text-left">
          Andy Okoh Abounu — Media & Communications Professional. Abuja, Nigeria.
        </p>
        <div className="flex items-center gap-4 text-sm font-sans">
          <Link
            href="/contact"
            className="text-ivory hover:text-gold transition-colors underline underline-offset-4"
          >
            Get in Touch
          </Link>
          <span className="text-slate">© {new Date().getFullYear()} Andy Okoh Abounu.</span>
        </div>
      </div>
    </footer>
  );
}
