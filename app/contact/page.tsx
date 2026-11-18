import { Reveal } from "@/components/reveal";
import { ContactForm } from "@/components/contact-form";
import { CONTACT } from "@/content/contact";
import { SITE } from "@/content/site";

export const metadata = {
  title: "Contact | Andy Okoh Abounu",
  description:
    "Get in touch with Andy Okoh Abounu, media and communications professional based in Abuja, Nigeria.",
};

export default function Contact() {
  return (
    <div className="flex flex-col">
      <section className="bg-navy text-ivory pt-24 pb-20 lg:pt-32 lg:pb-28">
        <div className="container-premium">
          <Reveal className="text-center">
            <span className="inline-flex items-center gap-2 text-gold font-sans font-bold text-sm tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-gold"></span>
              Contact
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold leading-[1.1] text-balance mt-4">
              {CONTACT.heading}
            </h1>
            <p className="text-gold/90 text-lg font-sans max-w-xl mx-auto leading-relaxed">
              {CONTACT.subtitle}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-ivory section-pad">
        <div className="container-premium">
          <Reveal className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4 space-y-8">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-gold/10 text-gold flex items-center justify-center shrink-0">
                    <span className="text-lg" aria-hidden="true">📍</span>
                  </div>
                  <div>
                    <span className="text-gold font-sans font-bold text-sm tracking-widest uppercase">Location</span>
                    <p className="text-slate text-sm font-sans">{CONTACT.location}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-gold/10 text-gold flex items-center justify-center shrink-0">
                    <span className="text-lg" aria-hidden="true">✉</span>
                  </div>
                  <div>
                    <span className="text-gold font-sans font-bold text-sm tracking-widest uppercase">Email</span>
                    <p className="text-slate text-sm font-sans">{SITE.emailPlaceholder}</p>
                  </div>
                </div>
              </div>
              <div className="pt-6 border-t border-navy/5">
                <span className="text-gold font-sans font-bold text-sm tracking-widest uppercase">Connect</span>
                <p className="text-slate text-sm font-sans mt-2">{SITE.socialPlaceholder}</p>
              </div>
            </div>

            <div className="lg:col-span-8">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
