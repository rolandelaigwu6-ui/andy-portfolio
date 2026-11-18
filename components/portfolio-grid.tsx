"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { PORTFOLIO } from "@/content/portfolio";

export function PortfolioGrid() {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return PORTFOLIO.projects;
    return PORTFOLIO.projects.filter((p) => p.category === activeFilter);
  }, [activeFilter]);

  return (
    <>
      <Reveal className="flex flex-wrap justify-center gap-3 mb-12">
        {PORTFOLIO.filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-5 py-2 rounded-full text-sm font-sans font-medium transition-all border ${
              activeFilter === filter
                ? "bg-navy text-ivory border-navy"
                : "border-navy/20 text-navy hover:bg-navy/5"
            }`}
          >
            {filter}
          </button>
        ))}
      </Reveal>

      <Reveal className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <article
              key={project.id}
              className="group p-8 rounded-lg border border-navy/30 bg-navy/40 hover:border-gold/50 hover:bg-navy/30 transition-colors flex flex-col h-full"
            >
              <div className="w-16 h-16 rounded-lg bg-gold/10 flex items-center justify-center mb-6 text-gold group-hover:bg-gold group-hover:text-navy transition-colors">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
              </div>
              <h3 className="text-lg font-bold text-ivory mb-2 group-hover:text-gold transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-gold/60 font-sans mb-3">{project.category}</p>
              <p className="text-xs text-slate/50 font-sans mb-6 flex-1">
                {project.description}
              </p>
              <Link
                href={`/portfolio/${project.id}`}
                className="w-fit self-start text-navy font-bold text-sm underline underline-offset-4 hover:text-gold transition-colors"
              >
                View project →
              </Link>
              <span className="text-[10px] text-gold/40 font-sans font-medium uppercase tracking-wider mt-auto">
                Development placeholder
              </span>
            </article>
          ))
        ) : (
          <p className="text-slate text-center py-12 font-sans">
            No projects match this category yet.
          </p>
        )}
      </Reveal>
    </>
  );
}
