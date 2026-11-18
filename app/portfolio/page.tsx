import { PortfolioGrid } from "@/components/portfolio-grid";
import { Reveal } from "@/components/reveal";
import { PORTFOLIO } from "@/content/portfolio";

export const metadata = {
  title: "Portfolio | Andy Okoh Abounu",
  description:
    "Selected creative work by Andy Okoh Abounu — communications, design, photography and storytelling.",
};

export default function Portfolio() {
  return (
    <div className="flex flex-col">
      <section className="bg-navy text-ivory pt-24 pb-20 lg:pt-32 lg:pb-28">
        <div className="container-premium">
          <Reveal className="text-center">
            <span className="inline-flex items-center gap-2 text-gold font-sans font-bold text-sm tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-gold"></span>
              Portfolio
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold leading-[1.1] text-balance mt-4">
              {PORTFOLIO.heading}
            </h1>
            <p className="text-gold/90 text-lg font-sans max-w-xl mx-auto leading-relaxed">
              {PORTFOLIO.subtitle}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-ivory section-pad">
        <div className="container-premium">
          <Reveal className="mb-14">
            <p className="text-slate text-sm font-sans text-center max-w-2xl mx-auto">
              {PORTFOLIO.notice}
            </p>
          </Reveal>
          <PortfolioGrid />
        </div>
      </section>
    </div>
  );
}
