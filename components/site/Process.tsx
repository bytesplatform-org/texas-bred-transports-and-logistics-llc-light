import { howItWorks } from "@/content/home";
import { containerClass, formatIndex, GhostLink, sectionYClass, SectionIntro } from "./ui";

export function Process() {
  return (
    <section id="process" className={`bg-white ${sectionYClass}`}>
      <div className={containerClass}>
        <SectionIntro
          eyebrow={howItWorks.eyebrow}
          headline={howItWorks.headline}
          body={howItWorks.body}
        />
        <div className="relative mt-12 lg:mt-16">
          {/* Connecting line, centered on the 40px step numbers. */}
          <span aria-hidden="true" className="absolute inset-x-0 top-5 hidden h-px bg-line lg:block" />
          <ol className="relative grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {howItWorks.steps.map((step, index) => (
              <li key={step.title} className="reveal">
                <span
                  aria-hidden="true"
                  className="inline-block bg-white pr-4 font-heading text-[40px] leading-none font-bold text-line"
                >
                  {formatIndex(index)}
                </span>
                <h3 className="mt-5 font-heading text-xl leading-tight font-bold tracking-[0.02em] text-navy">
                  {step.title}
                </h3>
                <p className="mt-3 text-slate">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
        <div className="mt-10">
          <GhostLink href={howItWorks.cta.href}>{howItWorks.cta.label}</GhostLink>
        </div>
      </div>
    </section>
  );
}
