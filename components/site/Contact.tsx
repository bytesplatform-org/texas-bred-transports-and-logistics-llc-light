import { company, contact } from "@/content/home";
import { QuoteForm } from "./QuoteForm";
import { SectionIntro } from "./ui";

export function Contact() {
  return (
    <section id="contact" className="grid border-t border-line lg:grid-cols-2">
      <div className="bg-paper py-16 lg:py-28">
        {/* Half of the 1200px container, so the text lines up with other sections. */}
        <div className="w-full px-6 lg:ml-auto lg:max-w-[600px] lg:pr-16">
          <SectionIntro eyebrow={contact.eyebrow} headline={contact.headline} body={contact.body} />
          <div className="mt-10 space-y-3 font-heading font-bold tracking-[0.02em] text-navy">
            <a
              href={`tel:${company.phoneE164}`}
              className="block text-[28px] leading-tight transition-colors hover:text-accent lg:text-[32px]"
            >
              {company.phone}
            </a>
            <a
              href={`mailto:${company.email}`}
              className="block text-[clamp(1rem,5vw,1.5rem)] leading-tight [overflow-wrap:anywhere] transition-colors hover:text-accent lg:text-[22px]"
            >
              {company.email}
            </a>
          </div>
          <address className="mt-6 text-slate not-italic">{company.address.full}</address>
        </div>
      </div>

      <div className="bg-white py-16 lg:py-28">
        <div className="w-full px-6 lg:mr-auto lg:max-w-[600px] lg:pl-16">
          <QuoteForm />
        </div>
      </div>
    </section>
  );
}
