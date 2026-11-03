import {
  BriefcaseMedical,
  Network,
  PackageCheck,
  Route,
  Truck,
  Warehouse,
  type LucideIcon,
} from "lucide-react";
import { services, type ServiceIcon } from "@/content/home";
import { containerClass, formatIndex, GhostLink, sectionYClass, SectionIntro } from "./ui";

const icons: Record<ServiceIcon, LucideIcon> = {
  freight: Truck,
  warehouse: Warehouse,
  "supply-chain": Network,
  courier: PackageCheck,
  medical: BriefcaseMedical,
  solutions: Route,
};

export function Services() {
  return (
    <section id="services" className={`bg-white ${sectionYClass}`}>
      <div className={containerClass}>
        <SectionIntro
          eyebrow={services.eyebrow}
          headline={services.headline}
          body={services.body}
        />
        <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {services.items.map((service, index) => {
            const Icon = icons[service.icon];
            return (
              <li
                key={service.title}
                className="reveal flex flex-col rounded-ui border border-line p-8 hover:border-navy"
              >
                <div className="flex items-start justify-between">
                  <span aria-hidden="true" className="font-heading text-sm text-accent">
                    {formatIndex(index)}
                  </span>
                  <Icon aria-hidden="true" className="size-7 text-navy" strokeWidth={1.25} />
                </div>
                <h3 className="mt-8 font-heading text-xl leading-tight font-bold tracking-[0.02em] text-navy">
                  {service.title}
                </h3>
                <p className="mt-3 mb-6 text-slate">{service.description}</p>
                <div className="mt-auto">
                  <GhostLink
                    href={services.cardCta.href}
                    ariaLabel={`${services.cardCta.label} about ${service.title}`}
                  >
                    {services.cardCta.label}
                  </GhostLink>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
