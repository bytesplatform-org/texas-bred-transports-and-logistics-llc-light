import { ArrowRight } from "lucide-react";
import { industries } from "@/content/home";
import { containerClass, formatIndex, GhostLink, sectionYClass, SectionIntro } from "./ui";

export function Industries() {
  return (
    <section id="industries" className={`bg-paper ${sectionYClass}`}>
      <div className={containerClass}>
        <SectionIntro
          eyebrow={industries.eyebrow}
          headline={industries.headline}
          body={industries.body}
        />
        <ul className="mt-12 border-t border-line lg:mt-16">
          {industries.items.map((industry, index) => (
            <li key={industry.name} className="reveal border-b border-line">
              <a
                href={industries.cta.href}
                className="group grid grid-cols-[2.5rem_1fr_auto] items-center gap-x-3 py-6 md:grid-cols-[3.5rem_minmax(0,1fr)_minmax(0,1.1fr)_auto] md:gap-x-6 lg:py-8"
              >
                <span aria-hidden="true" className="font-heading text-sm text-accent">
                  {formatIndex(index)}
                </span>
                <h3 className="font-heading text-xl leading-tight font-bold tracking-[0.02em] text-navy lg:text-2xl">
                  {industry.name}
                </h3>
                <p className="col-start-2 row-start-2 mt-2 text-slate md:col-start-3 md:row-start-1 md:mt-0">
                  {industry.description}
                </p>
                <ArrowRight
                  aria-hidden="true"
                  className="col-start-3 row-span-2 row-start-1 size-5 text-navy transition-colors group-hover:text-accent md:col-start-4 md:row-span-1"
                  strokeWidth={1.5}
                />
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-8">
          <GhostLink href={industries.cta.href}>{industries.cta.label}</GhostLink>
        </div>
      </div>
    </section>
  );
}
