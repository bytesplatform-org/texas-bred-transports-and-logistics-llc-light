import { Check } from "lucide-react";
import Image from "next/image";
import { about } from "@/content/home";
import { containerClass, GhostLink, sectionBottomClass, SectionIntro } from "./ui";

export function About() {
  return (
    <section id="about" className={`bg-white ${sectionBottomClass}`}>
      <div className={`${containerClass} grid items-center gap-16 lg:grid-cols-2 lg:gap-20`}>
        <div className="reveal relative">
          {/* TODO: replace with client photography (image URL is in content/home.ts). */}
          <div className="relative aspect-[5/4] overflow-hidden rounded-ui lg:aspect-[4/5]">
            <Image
              src={about.image.src}
              alt={about.image.alt}
              fill
              sizes="(min-width: 1200px) 536px, (min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <p className="absolute -top-4 -right-4 flex size-28 flex-col items-center justify-center rounded-ui bg-navy text-white lg:-top-6 lg:-right-6 lg:size-32">
            <span className="font-heading text-[28px] leading-none font-bold lg:text-[32px]">
              {about.badgeValue}
            </span>
            <span className="mt-2 font-heading text-[11px] leading-none tracking-[0.2em] uppercase">
              {about.badgeLabel}
            </span>
          </p>
        </div>

        <div>
          <SectionIntro eyebrow={about.eyebrow} headline={about.headline} />
          <div className="mt-5 max-w-[60ch] space-y-4 text-slate">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <ul className="mt-8 space-y-3">
            {about.points.map((point) => (
              <li key={point} className="flex items-center gap-3 font-medium text-navy">
                <Check aria-hidden="true" className="size-5 shrink-0 text-accent" strokeWidth={2} />
                {point}
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <GhostLink href={about.cta.href}>{about.cta.label}</GhostLink>
          </div>
        </div>
      </div>
    </section>
  );
}
