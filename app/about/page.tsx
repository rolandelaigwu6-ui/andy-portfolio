import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { PortraitPlaceholder } from "@/components/portrait-placeholder";
import { ABOUT } from "@/content/about";
import { SITE } from "@/content/site";

export const metadata = {
  title: "About Andy Okoh Abounu",
  description:
    "Discover the journey, philosophy, and professional interests shaping Andy Okoh Abounu, a media and communications professional based in Abuja, Nigeria.",
};

export default function About() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-navy text-ivory pt-24 pb-20 lg:pt-32 lg:pb-28">
        <div className="container-premium">
          <Reveal className="text-center space-y-6">
            <span className="inline-flex items-center gap-2 text-gold font-sans font-bold text-sm tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-gold"></span>
              About
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold leading-[1.1] text-balance">
              {ABOUT.hero.heading}
            </h1>
            <p className="text-gold/90 text-lg font-sans max-w-xl mx-auto leading-relaxed">
              {ABOUT.hero.subtitle}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Biography */}
      <section className="bg-ivory section-pad">
        <div className="container-premium">
          <Reveal className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
              <PortraitPlaceholder className="w-full h-80 bg-navy rounded-lg mb-6" />
              <div className="space-y-3">
                <span className="text-gold font-sans font-bold text-sm tracking-widest uppercase">Location</span>
                <p className="text-slate text-sm font-sans">{SITE.location}</p>
                <span className="mt-6 block text-gold font-sans font-bold text-sm tracking-widest uppercase">Education</span>
                <p className="text-slate text-sm font-sans">
                  {ABOUT.education.institution} — {ABOUT.education.field}, {ABOUT.education.year}
                </p>
                <span className="mt-6 block text-gold font-sans font-bold text-sm tracking-widest uppercase">Motto</span>
                <p className="text-slate text-sm font-sans italic">“{ABOUT.motto}”</p>
              </div>
            </div>
            <div className="lg:col-span-8">
              <h2 className="text-3xl md:text-4xl font-bold text-navy tracking-tight mb-6">The Story</h2>
              <p className="text-charcoal text-lg leading-relaxed mb-8 font-sans">
                {ABOUT.biography}
              </p>
              {ABOUT.journey.map((paragraph, i) => (
                <p key={i} className="text-charcoal text-lg leading-relaxed mb-8 font-sans">
                  {paragraph}
                </p>
              ))}
              <div className="pt-8 border-t border-navy/10">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-gold font-sans font-bold underline underline-offset-4 hover:text-navy transition-colors"
                >
                  Start a Conversation <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Professional Interests */}
      <section className="bg-navy section-pad">
        <div className="container-premium">
          <Reveal className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-ivory tracking-tight">Professional Interests</h2>
            <p className="mt-4 text-gold/80 font-sans">Areas that shape his work</p>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {ABOUT.interests.map((interest) => (
              <Reveal key={interest} variant="fadeUp" className="p-6 rounded-lg border border-navy/30 bg-navy/40 text-center">
                <span className="text-slate/50 font-sans text-sm">{interest}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Interests */}
      <section className="bg-ivory section-pad">
        <div className="container-premium">
          <Reveal className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy tracking-tight">Personal Interests</h2>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {ABOUT.personalInterests.map((interest) => (
              <Reveal key={interest} variant="fadeUp" className="p-6 rounded-lg border border-navy/5 bg-white/30 text-center">
                <span className="text-slate font-sans text-sm">{interest}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy & Motto */}
      <section className="bg-gold section-pad">
        <div className="container-premium">
          <Reveal className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-navy tracking-tight mb-6">
              Professional Philosophy
            </h2>
            <p className="text-2xl md:text-3xl font-display text-navy font-bold mb-4">
              {SITE.philosophy}
            </p>
            <p className="text-navy/90 text-lg font-sans max-w-xl mx-auto mb-8 leading-relaxed">
              “{ABOUT.motto}”
            </p>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
