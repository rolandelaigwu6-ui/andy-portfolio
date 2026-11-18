import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/reveal";

export const metadata = {
  title: "Page Not Found | Andy Okoh Abounu",
};

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <Reveal className="space-y-6">
        <h1 className="text-6xl md:text-8xl font-display font-bold text-navy">404</h1>
        <h2 className="text-2xl md:text-3xl font-bold text-navy">Page not found</h2>
        <p className="text-slate text-lg max-w-md mx-auto leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist. Head back to the
          homepage or get in touch.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="text-gold font-sans font-bold underline underline-offset-4 hover:text-navy transition-colors">
            Return Home <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </Reveal>
    </div>
  );
}
