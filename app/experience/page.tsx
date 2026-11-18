import { Reveal } from "@/components/reveal";
import { EXPERIENCE } from "@/content/experience";

export const metadata = {
  title: "Experience | Andy Okoh Abounu",
  description:
    "Professional journey and experience of Andy Okoh Abounu, media and communications professional based in Abuja, Nigeria.",
};

export default function Experience() {
  return (
    <div className="flex flex-col">
      <section className="bg-navy text-ivory pt-24 pb-20 lg:pt-32 lg:pb-28">
        <div className="container-premium">
          <Reveal className="text-center">
            <span className="inline-flex items-center gap-2 text-gold font-sans font-bold text-sm tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-gold"></span>
              Experience
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold leading-[1.1] text-balance mt-4">
              {EXPERIENCE.heading}
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="bg-ivory section-pad">
        <div className="container-premium">
          <Reveal className="relative max-w-3xl mx-auto">
            {/* Timeline connector */}
            <div className="hidden lg:block absolute left-[calc(50%-1px)] top-0 bottom-0 w-px bg-gold/30" aria-hidden="true" />
            {EXPERIENCE.timeline.map((item, i) => (
              <Reveal key={item.id} variant="fadeUp" className="relative mb-20 lg:mb-28">
                <div className="lg:absolute lg:left-[calc(50%-10px)] -top-2">
                  <div className="w-4 h-4 rounded-full bg-gold text-navy font-bold flex items-center justify-center text-xs border border-navy">
                    {i + 1}
                  </div>
                </div>
                <div className="lg:w-1/2 lg:pr-12 last:lg:w-full last:lg:pr-0">
                  <div className="lg:text-right">
                    <span className="text-gold font-sans font-bold text-sm tracking-widest uppercase block mb-1">
                      {item.date}
                    </span>
                    <span className="text-slate text-xs font-sans">{item.dateNote}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-navy mb-1">{item.title}</h3>
                  <p className="text-gold font-sans font-medium text-sm mb-3">{item.organization}</p>
                  <p className="text-slate text-sm font-sans mb-3">{item.location}</p>
                  {item.roleNote && (
                    <p className="text-slate text-xs italic font-sans mb-4">{item.roleNote}</p>
                  )}
                  {item.responsibilities && item.responsibilities.length > 0 ? (
                    <ul className="list-disc list-inside text-slate text-sm font-sans space-y-1 mb-4">
                      {item.responsibilities.map((r) => (
                        <li key={r}>{r}</li>
                      ))}
                    </ul>
                  ) : null}
                  {item.description && (
                    <p className="text-slate text-sm font-sans leading-relaxed mb-4">{item.description}</p>
                  )}
                  {item.themes && item.themes.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {item.themes.map((t) => (
                        <span key={t} className="px-2.5 py-0.5 rounded text-[10px] font-sans font-medium text-navy bg-gold/20 border border-gold/30">
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="bg-navy section-pad">
        <div className="container-premium text-center">
          <Reveal>
            <p className="text-gold/80 font-sans text-sm mt-6">
              Timeline built from verified information only. Dates and titles not
              disclosed are marked as such.
            </p>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
