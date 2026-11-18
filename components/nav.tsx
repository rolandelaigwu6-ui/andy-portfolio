"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./button";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/insights", label: "Insights" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <nav
      className="fixed top-0 z-50 w-full border-b border-navy/5 bg-ivory/90 backdrop-blur-sm"
      aria-label="Main navigation"
    >
      <div className="container-premium">
        <div className="flex flex-wrap items-center justify-between py-4 md:py-6 lg:py-8">
          <Link
            href="/"
            className="flex items-center gap-2 font-display text-2xl font-bold text-navy tracking-tight"
            title="Andy Okoh Abounu"
          >
            <span className="text-gold">A</span>OA.
          </Link>

          <div className="hidden md:flex items-center gap-8 text-sm font-sans font-medium">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "transition-colors",
                  isActive(link.href)
                    ? "text-gold"
                    : "text-charcoal hover:text-gold",
                  "relative after:content-[''] after:absolute after:left-[50%] after:bottom-[-2px] after:w-0 after:h-0.5 after:bg-gold after:transition-all after:duration-300 after:origin-center",
                  isActive(link.href)
                    ? "after:left-0 after:w-full after:origin-center"
                    : undefined
                )}
                aria-current={isActive(link.href) ? "page" : undefined}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="sm"
              asChild
              className="hidden sm:block"
            >
              <Link href="/contact">Get in Touch</Link>
            </Button>
            <button
              className="md:hidden inline-flex items-center justify-center p-2 text-charcoal hover:text-navy focus-visible:outline-none"
              onClick={() => setIsOpen((prev) => !prev)}
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div
            className="md:hidden border-t border-navy/5"
            role="menu"
            aria-label="Mobile navigation"
          >
            <div className="container-premium py-6 space-y-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "block py-3 text-lg font-sans font-medium transition-colors",
                    isActive(link.href) ? "text-gold" : "text-charcoal hover:text-gold"
                  )}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  role="menuitem"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4">
                <Button variant="primary" asChild className="w-full">
                  <Link href="/contact">Get in Touch</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
