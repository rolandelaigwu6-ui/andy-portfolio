import { notFound } from "next/navigation";
import { Reveal } from "@/components/reveal";
import { PortraitPlaceholder } from "@/components/portrait-placeholder";
import { PORTFOLIO } from "@/content/portfolio";

export function generateMetadata({ params }: { params: { slug: string } }) {
  const project = PORTFOLIO.projects.find((p) => p.id === params.slug);
  if (!project) return { title: "Project not found | Andy Okoh Abounu" };
  return {
    title: `${project.title} | Portfolio | Andy Okoh Abounu`,
    description: project.description,
  };
}

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const project = PORTFOLIO.projects.find((p) => p.id === params.slug);
  if (!project) notFound();

  return (
    <div className="flex flex-col">
      <section className="bg-navy text-ivory pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="container-premium">
          <Reveal className="text-center">
            <span className="inline-flex items-center gap-2 text-gold font-sans font-bold text-sm tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-gold"></span>
              Portfolio
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold leading-[1.1] text-balance mt-4">
              {project.title}
            </h1>
            <p className="text-gold/90 text-lg font-sans mt-4">
              {project.category} • Development placeholder
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-ivory section-pad">
        <div className="container-premium">
          <Reveal className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
              <PortraitPlaceholder className="w-full h-96 bg-navy rounded-lg mb-6" />
              <div className="space-y-3 text-sm font-sans text-slate">
                <p><span className="text-navy font-bold">Category:</span> {project.category}</p>
                <p><span className="text-navy font-bold">Status:</span> Approved project details pending</p>
              </div>
            </div>
            <div className="lg:col-span-8 space-y-10">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-navy mb-3">Overview</h2>
                <p className="text-slate text-lg leading-relaxed font-sans">
                  {project.description}
                </p>
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-navy mb-3">Objective</h2>
                <p className="text-slate text-lg leading-relaxed font-sans">
                  Approved project objective will appear here once assets are provided.
                </p>
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-navy mb-3">Andy&apos;s Role</h2>
                <p className="text-slate text-lg leading-relaxed font-sans">
                  Communications strategy and creative direction (to be confirmed with approved content).
                </p>
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-navy mb-3">Creative Approach</h2>
                <p className="text-slate text-lg leading-relaxed font-sans">
                  Approach and execution notes will be documented once the project is approved.
                </p>
              </div>
              <div className="border-t border-navy/5 pt-8">
                <h2 className="text-2xl md:text-3xl font-bold text-navy mb-3">Gallery</h2>
                <p className="text-slate text-sm font-sans">
                  Project imagery will be displayed here once approved assets are supplied.
                </p>
              </div>
              <div className="bg-navy/5 rounded-lg p-8 border border-navy/5 text-center">
                <p className="text-slate text-sm font-sans">
                  Outcomes shown only when verified. No outcomes are claimed for this placeholder.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
