import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { INSIGHTS } from "@/content/insights";

export const metadata = {
  title: "Insights | Andy Okoh Abounu",
  description:
    "Ideas, perspectives and insights on strategic communications, media, leadership, and creative entrepreneurship by Andy Okoh Abounu.",
};

export default function Insights() {
  return (
    <div className="flex flex-col">
      <section className="bg-navy text-ivory pt-24 pb-20 lg:pt-32 lg:pb-28">
        <div className="container-premium">
          <Reveal className="text-center">
            <span className="inline-flex items-center gap-2 text-gold font-sans font-bold text-sm tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-gold"></span>
              Insights
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold leading-[1.1] text-balance mt-4">
              {INSIGHTS.heading}
            </h1>
            <p className="text-gold/90 text-lg font-sans max-w-xl mx-auto leading-relaxed">
              {INSIGHTS.subtitle}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-ivory section-pad">
        <div className="container-premium">
          {/* Future categories */}
          <Reveal className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy tracking-tight text-center mb-6">
              Explore by Category
            </h2>
            <p className="text-gold/80 text-sm font-sans text-center max-w-xl mx-auto mb-8">
              Potential future article categories — articles will appear here once
              approved content is provided.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 justify-center">
              {INSIGHTS.categories.map((category) => (
                <div
                  key={category}
                  className="p-4 rounded-lg border border-navy/10 bg-navy/5 text-center text-sm font-sans text-slate hover:border-gold/50 transition-colors"
                >
                  {category}
                </div>
              ))}
            </div>
          </Reveal>

          {/* Empty state */}
          <Reveal className="max-w-2xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 text-gold mb-6">
              <span className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-navy font-bold">
                📝
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-navy">{INSIGHTS.emptyState.heading}</h2>
            </div>
            <p className="text-slate text-lg leading-relaxed font-sans mb-8">
              {INSIGHTS.emptyState.body}
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-gold font-sans font-bold underline underline-offset-4 hover:text-navy transition-colors"
            >
              Get in Touch <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
