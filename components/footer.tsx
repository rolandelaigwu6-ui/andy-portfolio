import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const links = [
  ["About", "/about"], ["Experience", "/experience"], ["Portfolio", "/portfolio"],
  ["Insights", "/insights"], ["Contact", "/contact"],
] as const;

export function Footer() {
  return <footer className="site-footer">
    <div className="footer-main container-editorial">
      <div>
        <p className="eyebrow text-champagne">Abuja, Nigeria · Available for thoughtful collaboration</p>
        <h2 className="display-type footer-heading">Let the next<br /><em>story begin.</em></h2>
        <Link href="/contact" className="footer-contact">Start a conversation <ArrowUpRight size={17} /></Link>
      </div>
      <div className="footer-index">
        <p className="eyebrow text-stone">Explore</p>
        {links.map(([label, href]) => <Link key={href} href={href}>{label}<span>↗</span></Link>)}
      </div>
    </div>
    <div className="footer-bottom container-editorial">
      <Link href="/" className="footer-monogram" aria-label="Andy Okoh Abounu, home">AOA</Link>
      <p>Communicating Ideas. Creating Impact. Building Legacies.</p>
      <p>© Andy Okoh Abounu</p>
    </div>
  </footer>;
}
