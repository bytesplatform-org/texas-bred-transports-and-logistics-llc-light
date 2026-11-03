import Image from "next/image";
import { hero } from "@/content/home";
import { AccentText, ButtonLink, containerClass, Eyebrow } from "./ui";

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="on-dark relative isolate flex min-h-[min(92vh,calc(100vh-108px))] flex-col overflow-hidden bg-navy text-white"
    >
      {/* TODO: replace with client photography (image URL is in content/home.ts). */}
      <Image
        src={hero.image.src}
        alt={hero.image.alt}
        fill
        sizes="100vw"
        preload
        className="-z-20 object-cover object-[65%_center]"
      />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-navy/55" />
      {/* Darkens the photo behind the copy so the accent word stays legible. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-navy/60 lg:bg-transparent lg:bg-linear-to-r lg:from-navy/75 lg:via-navy/60 lg:via-45% lg:to-transparent lg:to-75%"
      />

      <div className={`${containerClass} flex flex-1 items-center py-10`}>
        <div className="grid w-full grid-cols-12">
          <div className="col-span-12 lg:col-span-7">
            <Eyebrow tone="dark">{hero.eyebrow}</Eyebrow>
            <h1 id="hero-heading" className="mt-6 font-heading text-hero font-bold max-[359px]:text-[34px]">
              {hero.headlineLines.map((line) => (
                <span key={line} className="block">
                  <AccentText text={line} tone="dark" />{" "}
                </span>
              ))}
            </h1>
            <p className="mt-6 max-w-[34em] text-xl leading-normal font-light text-white">
              {hero.sub}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <ButtonLink href={hero.primaryCta.href}>{hero.primaryCta.label}</ButtonLink>
              <ButtonLink href={hero.secondaryCta.href} variant="outlineLight">
                {hero.secondaryCta.label}
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>

      <div className={`${containerClass} flex justify-end pb-6`}>
        <ul className="text-right font-heading text-xs leading-relaxed tracking-[0.1em] text-white">
          {hero.reach.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
