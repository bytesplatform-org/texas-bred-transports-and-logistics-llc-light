import type { ReactNode } from "react";

export const containerClass = "mx-auto w-full max-w-[1200px] px-6";
export const sectionYClass = "py-16 md:py-20 lg:py-28";
/** For a section that follows another of the same color, so the gap isn't doubled. */
export const sectionBottomClass = "pb-16 md:pb-20 lg:pb-28";

type Tone = "light" | "dark";

/** Renders "Ready to *move*?" with the starred word as the italic accent word. */
export function AccentText({ text, tone = "light" }: { text: string; tone?: Tone }) {
  return text.split("*").map((part, index) =>
    index % 2 === 1 ? (
      <em
        key={index}
        className={`font-normal whitespace-nowrap italic ${tone === "dark" ? "text-accent-on-dark" : "text-accent"}`}
      >
        {part}
      </em>
    ) : (
      part
    ),
  );
}

export function Eyebrow({
  children,
  tone = "light",
  accentText = false,
}: {
  children: ReactNode;
  tone?: Tone;
  accentText?: boolean;
}) {
  const color = accentText
    ? "text-accent-on-dark"
    : tone === "dark"
      ? "text-white"
      : "text-navy";

  return (
    <p
      className={`flex items-center gap-3 font-heading text-xs leading-snug tracking-[0.2em] uppercase ${color}`}
    >
      <span aria-hidden="true" className="h-px w-8 shrink-0 bg-accent" />
      <span>{children}</span>
    </p>
  );
}

export function SectionIntro({
  eyebrow,
  headline,
  body,
  tone = "light",
  accentEyebrow = false,
}: {
  eyebrow: string;
  headline: string;
  body?: string;
  tone?: Tone;
  accentEyebrow?: boolean;
}) {
  return (
    <div className="reveal">
      <Eyebrow tone={tone} accentText={accentEyebrow}>
        {eyebrow}
      </Eyebrow>
      <h2
        className={`mt-5 font-heading text-h2 font-bold text-balance ${tone === "dark" ? "text-white" : "text-navy"}`}
      >
        <AccentText text={headline} tone={tone} />
      </h2>
      {body ? (
        <p className={`mt-5 max-w-[60ch] ${tone === "dark" ? "text-white/85" : "text-slate"}`}>
          {body}
        </p>
      ) : null}
    </div>
  );
}

export function GhostLink({
  href,
  children,
  ariaLabel,
}: {
  href: string;
  children: ReactNode;
  ariaLabel?: string;
}) {
  return (
    <a
      href={href}
      aria-label={ariaLabel}
      className="inline-flex items-center gap-2 border-b border-line py-2 font-heading text-xs leading-none tracking-[0.15em] text-navy uppercase transition-colors hover:border-accent"
    >
      {children}
      <span aria-hidden="true">→</span>
    </a>
  );
}

const buttonVariants = {
  accent: "border-accent bg-accent text-white hover:border-accent-dark hover:bg-accent-dark",
  outlineLight: "border-white text-white hover:bg-white hover:text-navy",
};

export const buttonClass =
  "inline-flex min-h-12 items-center justify-center rounded-ui border px-6 py-3 text-center font-heading text-[13px] leading-tight tracking-[0.1em] uppercase transition-colors";

export function ButtonLink({
  href,
  children,
  variant = "accent",
  className = "",
  onClick,
}: {
  href: string;
  children: ReactNode;
  variant?: keyof typeof buttonVariants;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <a href={href} onClick={onClick} className={`${buttonClass} ${buttonVariants[variant]} ${className}`}>
      {children}
    </a>
  );
}

export function Wordmark({
  name,
  sub,
  tone = "light",
}: {
  name: string;
  sub: string;
  tone?: Tone;
}) {
  return (
    <span className={`block ${tone === "dark" ? "text-white" : "text-navy"}`}>
      <span className="block font-heading text-[22px] leading-none font-bold tracking-[0.04em] whitespace-nowrap uppercase">
        {name}
      </span>
      <span className="mt-1.5 block font-sans text-[11px] leading-none tracking-[0.2em] whitespace-nowrap uppercase">
        {sub}
      </span>
    </span>
  );
}

/** Formats a list index as 01, 02, 03… */
export function formatIndex(index: number) {
  return String(index + 1).padStart(2, "0");
}
