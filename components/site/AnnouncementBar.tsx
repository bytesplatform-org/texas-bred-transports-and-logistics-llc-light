import { announcement, company } from "@/content/home";
import { containerClass } from "./ui";

export function AnnouncementBar() {
  return (
    <aside aria-label="Company credentials" className="on-dark bg-navy-900 text-white">
      <div
        className={`${containerClass} flex h-9 items-center justify-center gap-6 font-heading text-[11px] leading-none tracking-[0.12em] uppercase sm:justify-between`}
      >
        <p className="whitespace-nowrap">
          {announcement.items.map((item, index) => (
            <span
              key={item}
              // The last item drops on phones so the bar stays on a single line.
              className={index === announcement.items.length - 1 ? "hidden sm:inline" : ""}
            >
              {index > 0 ? " · " : ""}
              {item}
            </span>
          ))}
        </p>
        <a href={`tel:${company.phoneE164}`} className="hidden whitespace-nowrap hover:underline sm:block">
          {company.phone}
        </a>
      </div>
    </aside>
  );
}
