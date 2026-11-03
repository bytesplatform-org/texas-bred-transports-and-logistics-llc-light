import { company, footer, services } from "@/content/home";
import { containerClass, Wordmark } from "./ui";

const headingClass = "font-heading text-xs leading-none tracking-[0.2em] text-white uppercase";
const linkClass = "text-white/80 transition-colors hover:text-white hover:underline";

export function Footer() {
  return (
    <footer className="on-dark bg-navy-900 text-white">
      <div
        className={`${containerClass} grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_0.7fr_1.3fr] lg:gap-10`}
      >
        <div>
          <Wordmark name={company.wordmark} sub={company.wordmarkSub} tone="dark" />
          <p className="mt-5 max-w-[32ch] text-white/80">{footer.description}</p>
          <p className="mt-5 inline-block rounded-ui border border-white/30 px-3 py-2 font-heading text-[11px] leading-snug tracking-[0.1em] uppercase">
            {footer.badge}
          </p>
        </div>

        <nav aria-labelledby="footer-services">
          <h2 id="footer-services" className={headingClass}>
            {footer.servicesHeading}
          </h2>
          <ul className="mt-5 space-y-2.5">
            {services.items.map((service) => (
              <li key={service.title}>
                <a href="#services" className={linkClass}>
                  {service.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-labelledby="footer-company">
          <h2 id="footer-company" className={headingClass}>
            {footer.companyHeading}
          </h2>
          <ul className="mt-5 space-y-2.5">
            {footer.companyLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className={linkClass}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className={headingClass}>{footer.contactHeading}</h2>
          <address className="mt-5 space-y-2.5 not-italic">
            <p className="text-white/80">{company.address.full}</p>
            <p>
              <a href={`tel:${company.phoneE164}`} className={linkClass}>
                {company.phone}
              </a>
            </p>
            <p>
              <a href={`mailto:${company.email}`} className={`${linkClass} [overflow-wrap:anywhere]`}>
                {company.email}
              </a>
            </p>
          </address>
        </div>
      </div>

      <div className="border-t border-white/15">
        <div
          className={`${containerClass} flex flex-col gap-3 py-6 text-sm text-white/80 md:flex-row md:items-center md:justify-between`}
        >
          <p>
            {footer.copyright}
            {footer.legalLinks.map((link) => (
              <span key={link.label}>
                {" · "}
                <a href={link.href} className="transition-colors hover:text-white hover:underline">
                  {link.label}
                </a>
              </span>
            ))}
          </p>
          <p className="text-[11px] tracking-[0.1em]">{footer.naics}</p>
        </div>
      </div>
    </footer>
  );
}
