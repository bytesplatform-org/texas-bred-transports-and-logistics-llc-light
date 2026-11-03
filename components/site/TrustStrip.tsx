import { trust } from "@/content/home";
import { containerClass } from "./ui";

export function TrustStrip() {
  return (
    <section aria-label={trust.label} className="bg-paper py-12 lg:py-14">
      <dl className={`${containerClass} grid grid-cols-2 gap-x-4 gap-y-8 lg:grid-cols-4 lg:gap-x-6`}>
        {trust.stats.map((stat) => (
          <div key={stat.label} className="flex flex-col-reverse justify-end border-l border-line pl-4 lg:pl-6">
            <dt className="mt-3 font-heading text-[11px] leading-snug tracking-[0.15em] text-slate uppercase">
              {stat.label}
            </dt>
            <dd className="font-heading text-stat font-bold text-navy max-[359px]:text-[32px]">{stat.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
