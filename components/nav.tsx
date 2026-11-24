"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const LINKS = [
  { href: "/", label: "Home", number: "01" },
  { href: "/about", label: "About", number: "02" },
  { href: "/experience", label: "Experience", number: "03" },
  { href: "/portfolio", label: "Portfolio", number: "04" },
  { href: "/insights", label: "Insights", number: "05" },
  { href: "/contact", label: "Contact", number: "06" },
];

export function Navbar() {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const lastLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = "hidden";
    const pageContent = document.querySelector(".page-route");
    const pageFooter = document.querySelector(".site-footer");
    pageContent?.setAttribute("inert", "");
    pageFooter?.setAttribute("inert", "");
    const focusFrame = window.requestAnimationFrame(() => firstLinkRef.current?.focus());
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        triggerRef.current?.focus();
      }
      if (event.key === "Tab" && event.shiftKey && document.activeElement === firstLinkRef.current) {
        event.preventDefault();
        lastLinkRef.current?.focus();
      } else if (event.key === "Tab" && !event.shiftKey && document.activeElement === lastLinkRef.current) {
        event.preventDefault();
        firstLinkRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.cancelAnimationFrame(focusFrame);
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
      pageContent?.removeAttribute("inert");
      pageFooter?.removeAttribute("inert");
    };
  }, [isOpen]);

  const isActive = (href: string) => href === "/" ? pathname === "/" : pathname.startsWith(href);
  const transition = reduceMotion ? { duration: 0 } : { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const };

  return (
    <>
      <header className={`nav-shell ${scrolled ? "nav-shell-scrolled" : ""}`}>
        <div className="nav-inner">
          <Link href="/" className="brand-lockup" aria-label="Andy Okoh Abounu — home">
            <span className="brand-mark" aria-hidden="true"><span>A</span><span>O</span><span>A</span></span>
            <span className="brand-name">Andy Okoh Abounu</span>
          </Link>
          <nav className="desktop-nav" aria-label="Main navigation">
            {LINKS.map((link) => <Link key={link.href} href={link.href} aria-current={isActive(link.href) ? "page" : undefined} className={`desktop-nav-link ${isActive(link.href) ? "is-active" : ""}`}>
              {link.label}<span className="nav-active-line" aria-hidden="true" />
            </Link>)}
          </nav>
          <Link href="/contact" className="nav-contact">Let&apos;s talk <ArrowUpRight size={15} aria-hidden="true" /></Link>
          <button ref={triggerRef} className="menu-toggle" type="button" aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={isOpen} aria-controls="mobile-navigation" onClick={() => setIsOpen((open) => !open)}>
            <span>{isOpen ? "Close" : "Menu"}</span>{isOpen ? <X size={19} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && <motion.div id="mobile-navigation" role="dialog" aria-modal="true" aria-label="Main navigation" className="mobile-menu" initial={{ clipPath: reduceMotion ? "inset(0)" : "inset(0 0 100% 0)" }} animate={{ clipPath: "inset(0)" }} exit={{ clipPath: reduceMotion ? "inset(0 0 100% 0)" : "inset(0 0 100% 0)" }} transition={transition}>
          <div className="mobile-menu-inner">
            <p className="eyebrow text-bronze">Navigate</p>
            <nav aria-label="Mobile navigation">
              {LINKS.map((link, index) => <motion.div key={link.href} initial={reduceMotion ? false : { opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} transition={{ ...transition, delay: reduceMotion ? 0 : index * 0.055 }}>
                <Link ref={index === 0 ? firstLinkRef : index === LINKS.length - 1 ? lastLinkRef : undefined} href={link.href} aria-current={isActive(link.href) ? "page" : undefined} onClick={() => { setIsOpen(false); triggerRef.current?.focus(); }} className={`mobile-nav-link ${isActive(link.href) ? "is-active" : ""}`}>
                  <span className="mobile-nav-number">{link.number}</span><span>{link.label}</span><ArrowUpRight size={20} aria-hidden="true" />
                </Link>
              </motion.div>)}
            </nav>
            <p className="mobile-menu-note">Communicating ideas. Creating impact. Building legacies.</p>
          </div>
        </motion.div>}
      </AnimatePresence>
    </>
  );
}
