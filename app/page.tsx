import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/button";
import { HOME } from "@/content/home";

export default function Home() {
  return (
    <div className="relative overflow-x-hidden">
      {/* SCENE 01 ??? THE OPENING */}
      <section className="relative pt-24 pb-32 lg:pt-32 lg:pb-40 bg-[var(--deep-midnight)] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/img/img1.jpeg"
            alt="Andy Okoh Abounu portrait"
            width={600}
            height={400}
            className="object-cover w-full h-64 lg:h-full rounded-t-2xl lg:rounded-none lg:rounded-l-0 lg:rounded-tr-2xl bg-[var(--deep-midnight)]"
            loading="lazy"
            priority
          />
        </div>
        <div className="relative z-10 container-premium max-w-7xl mx-auto py-16 lg:py-24">
          <Reveal className="text-center mb-12">
            <span className="inline-flex items-center gap-2 text-champagne-gold font-sans font-bold text-sm tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-champagne-gold"></span>
              Media & Communications ??? Abuja, Nigeria
            </span>
            <h1 className="mt-8 text-5xl md:text-6xl lg:text-7xl font-display font-bold text-[var(--soft-ivory)] tracking-tight text-center">
              ANDY OKOH ABOUNU
            </h1>
            <p className="mt-6 text-lg max-w-xl mx-auto leading-relaxed text-[var(--soft-ivory)]">
              Building meaningful connections through strategic communication,
              creative expression, and purposeful storytelling.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button asChild size="lg" className="w-full">
                <a href="/portfolio">
                  Explore My Work
                </a>
              </Button>
              <Button variant="outline" asChild size="lg" className="w-full">
                <a href="/about">
                  Discover My Story
                </a>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SCENE 02 ??? THE STORY BEGINS */}
      <section className="bg-[var(--royal-navy)] py-24 lg:py-32">
        <div className="relative z-10 container-premium max-w-7xl mx-auto">
          <Reveal className="text-center">
            <span className="inline-flex items-center gap-2 text-champagne-gold font-sans font-bold text-sm tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-champagne-gold"></span>
              Story
            </span>
            <h2 className="mt-6 text-3xl md:text-4xl lg:text-5xl font-display font-bold text-[var(--soft-ivory)] tracking-tight">
              "More Than Communication. A Vision for Impact."
            </h2>
            <p className="mt-6 text-lg max-w-xl lg:text-xl leading-relaxed text-[var(--soft-ivory)]">
              Andy Okoh Abounu is a Nigerian media and communications professional based in Abuja, Nigeria, with a background in Library and Information Science from Benue State University, where he graduated in 2023.
            </p>
          </Reveal>
        </div>
      </section>

      {/* SCENE 03 ??? THE EXPERTISE */}
      <section className="py-24 lg:py-32" style={{ background: "var(--deep-midnight);">
        <div className="relative z-10 container-premium max-w-7xl mx-auto">
          <Reveal className="text-center mb-16">
            <span className="inline-flex items-center gap-2 text-champagne-gold font-sans font-bold text-sm tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-champagne-gold"></span>
              Expertise
            </span>
            <h3 className="mt-6 text-2xl md:text-3xl font-display text-[var(--soft-ivory)] tracking-tight">
              Where Strategy Meets Creativity
            </h3>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
              <Reveal key={index} variant="fadeUp" className="p-4 rounded-lg border border-[var(--rich-charcoal)] bg-[var(--royal-navy)] hover:border-[var(--champagne-gold)] transition-colors">
                <div className="w-8 h-8 rounded-full bg-[var(--champagne-gold)]/20 flex items-center justify-center mb-3">
                  {index}
                </div>
                <h4 className="text-base font-bold text-[var(--soft-ivory)] mb-2">
                  Discipline {index}
                </h4>
                <p className="text-sm text-[var(--soft-ivory)]/60">
                  Description discipline {index}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SCENE 04 ??? PROFESSIONAL JOURNEY */}
      <section className="py-24 lg:py-32">
        <div className="relative z-10 container-premium max-w-7xl mx-auto">
          <Reveal className="text-center mb-16">
            <span className="inline-flex items-center gap-2 text-champagne-gold font-sans font-bold text-sm tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-champagne-gold"></span>
              Journey
            </span>
            <h4 className="mt-6 text-2xl md:text-3xl font-display text-[var(--royal-navy)] tracking-tight">
              Working at the Intersection of Media and Leadership
            </h4>
          </Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <Reveal className="mb-6">
                <h5 className="font-display font-bold text-[var(--royal-navy)] mb-4">Media Aide</h5>
                <p className="text-[var(--rich-charcoal)]/80">
                  Currently based in Abuja, Andy serves as a Media Aide to Hon. Chief Dr. Nelson Godwin Alapa, Ph.D., where his professional responsibilities involve media support, digital communications, content development and public engagement.
                </p>
              </Reveal>
              <Reveal>
                <h5 className="font-display font-bold text-[var(--royal-navy)] mb-4">Professional Initiatives</h5>
                <p className="text-[var(--rich-charcoal)]/80">
                  He previously championed Miss Fashion Benue, a pageantry-oriented initiative that reflects his interests in fashion, talent discovery, personal development and empowerment. The initiative relates to confidence, visibility, creativity and individual potential.
                </p>
              </Reveal>
            </div>
            <div>
              <Reveal>
                <h5 className="font-display font-bold text-[var(--royal-navy)] mb-4">Education</h5>
                <p className="text-[var(--rich-charcoal)]/80">
                  Benue State University, Library and Information Science, Graduated in 2023.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* SCENE 05 ??? CREATIVE INITIATIVES */}
      <section className="py-24 lg:py-32" style={{ background: "var(--deep-midnight);">
        <div className="relative z-10 container-premium max-w-7xl mx-auto">
          <Reveal className="text-center mb-16">
            <span className="inline-flex items-center gap-2 text-champagne-gold font-sans font-bold text-sm tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-champagne-gold"></span>
              Initiatives
            </span>
            <h5 className="mt-6 text-2xl md:text-3xl font-display text-[var(--soft-ivory)] tracking-tight">
              Creating Platforms for Visibility and Potential
            </h5>
          </Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <Reveal>
                <h6 className="font-display font-bold text-[var(--soft-ivory)] mb-4">Miss Fashion Benue</h6>
                <p className="text-[var(--soft-ivory)]/70">
                  A pageantry-oriented initiative reflecting his interest in fashion, talent discovery, personal development and empowerment.
                </p>
                <p className="mt-4 text-[var(--soft-ivory)]/60">
                  Related to: confidence, visibility, creativity, individual potential.
                </p>
              </Reveal>
            </div>
            <div>
              <Reveal>
                <h6 className="font-display font-bold text-[var(--soft-ivory)] mb-4">Public Engagement</h6>
                <p className="text-[var(--soft-ivory)]/70">
                  Using creative platforms to inspire engagement and create opportunities.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* SCENE 07 ??? CORE VALUES */}
      <section className="py-24 lg:py-32" style={{ background: "var(--deep-midnight);">
        <div className="relative z-10 container-premium max-w-7xl mx-auto">
          <div className="grid grid-cols-3 gap-8 text-center">
            <Reveal>
              <div className="p-4 rounded-lg border border-[var(--champagne-gold)]/20 bg-[var(--royal-navy)]/5">
                <div className="w-8 h-8 rounded-full bg-[var(--champagne-gold)]/30 flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl" aria-hidden="true">???</span>
                </div>
                <h4 className="font-display font-bold text-[var(--soft-ivory)]">PROFESSIONALISM</h4>
              </div>
            </Reveal>
            <Reveal>
              <div className="p-4 rounded-lg border border-[var(--champagne-gold)]/20 bg-[var(--royal-navy)]/5">
                <div className="w-8 h-8 rounded-full bg-[var(--champagne-gold)]/30 flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl" aria-hidden="true">???</span>
                </div>
                <h4 className="font-display font-bold text-[var(--soft-ivory)]">INTEGRITY</h4>
              </div>
            </Reveal>
            <Reveal>
              <div className="p-4 rounded-lg border border-[var(--champagne-gold)]/20 bg-[var(--royal-navy)]/5">
                <div className="w-8 h-8 rounded-full bg-[var(--champagne-gold)]/30 flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl" aria-hidden="true">???</span>
                </div>
                <h4 className="font-display font-bold text-[var(--soft-ivory)]">EXCELLENCE</h4>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SCENE 08 ??? CLOSING */}
      <section className="bg-[var(--rich-charcoal)] py-24 lg:py-32">
        <div className="relative z-10 container-premium max-w-7xl mx-auto text-center">
          <Reveal>
            <p className="text-[var(--champagne-gold)]/60 text-sm mb-8 tracking-widest uppercase">Every Great Legacy Begins With an Idea.</p>
            <h3 className="mt-8 text-3xl md:text-4xl lg:text-5xl font-display font-bold text-[var(--soft-ivory)] tracking-tight">
              "Let's create meaningful connections through communication, creativity, and purpose."
            </h3>
            <Button asChild size="lg" className="mt-8 w-fit">
              <a href="/contact">Connect With Andy</a>
            </Button>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
