import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata = { title: "Page Not Found" };

export default function NotFound() {
  return <main className="not-found-page"><div className="container-editorial"><p className="eyebrow text-bronze">A page outside the frame</p><h1 className="display-type">404<span>.</span></h1><h2 className="display-type">This story isn&apos;t here.</h2><p>The page may have moved. Return to the beginning and continue from there.</p><Link href="/" className="arrow-link">Return to the home page <ArrowUpRight /></Link></div></main>;
}
