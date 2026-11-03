import { government } from "@/content/home";
import { ButtonLink, containerClass, sectionYClass, SectionIntro } from "./ui";

export function GovernmentBand() {
  return (
    <section id="government" className={`on-dark bg-navy text-white ${sectionYClass}`}>
      <div className={`${containerClass} grid items-center gap-12 lg:grid-cols-2 lg:gap-20`}>
        <div>
          <SectionIntro
            eyebrow={government.eyebrow}
            headline={government.headline}
            body={government.body}
            tone="dark"
            accentEyebrow
          />
          {/* TODO: point government.cta.href at the capability statement PDF. */}
          <ButtonLink href={government.cta.href} variant="outlineLight" className="mt-8">
            {government.cta.label}
          </ButtonLink>
        </div>

        <dl className="reveal grid border-t border-white/20 sm:grid-cols-2 sm:gap-x-8">
          {government.details.map((detail) => (
            <div key={detail.label} className="border-b border-white/20 py-5">
              <dt className="font-heading text-[11px] leading-none tracking-[0.2em] text-white/75 uppercase">
                {detail.label}
              </dt>
              <dd className="mt-3 font-heading text-lg leading-tight font-bold tracking-[0.02em]">
                {detail.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
