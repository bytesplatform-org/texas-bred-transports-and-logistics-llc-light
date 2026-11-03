/**
 * All homepage copy lives here, so text can change without touching JSX.
 *
 * Conventions:
 * - Wrap one word in *asterisks* to set it as the italic accent word in a
 *   headline, e.g. "Ready to *move*?".
 * - Values in [BRACKETS] are placeholders for the client to fill in. Search this
 *   file for "[" to find them all.
 */

export const company = {
  name: "Texas Bred Transports & Logistics LLC",
  wordmark: "Texas Bred",
  wordmarkSub: "Transports & Logistics",
  phone: "(281) 924-0703",
  phoneE164: "+12819240703",
  email: "andrea@texasbredtransports.com",
  address: {
    street: "929 Oak Street",
    city: "Houston",
    state: "TX",
    zip: "77018",
    full: "929 Oak Street, Houston, TX 77018",
  },
  // TODO(client): replace with real values.
  yearsInOperation: "2+",
  yearEstablished: "[YEAR]",
};

export const seo = {
  title:
    "Texas Bred Transports & Logistics | Freight, Warehousing & Courier Services in Houston, TX",
  description:
    "Houston logistics partner for commercial and government clients: freight, warehousing, courier and medical supply transport. SAM.gov registered WOSB.",
};

export const announcement = {
  items: ["SAM.gov registered", "WOSB certified", "Houston, TX"],
};

export const navigation = {
  links: [
    { label: "Services", href: "#services" },
    { label: "Industries", href: "#industries" },
    { label: "Government", href: "#government" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
  cta: { label: "Request a Quote", href: "#contact" },
};

export const hero = {
  eyebrow: "Texas Bred Transports & Logistics",
  headlineLines: ["Freight.", "Warehousing.", "*Delivered.*"],
  sub: "A professional logistics partner for commercial and government clients, moving freight from our base in Houston, Texas.",
  primaryCta: { label: "Request a Quote", href: "#contact" },
  secondaryCta: { label: "View Services", href: "#services" },
  reach: ["Local", "Regional", "National"],
  image: {
    // TODO: replace with client photography.
    src: "https://images.unsplash.com/photo-1592838064575-70ed626d3a0e?auto=format&fit=crop&w=2400&q=80",
    alt: "Semi truck parked on an open lot at dusk with hills on the horizon",
  },
};

export const trust = {
  label: "Company at a glance",
  // TODO(client): confirm every value here. Only the WOSB status appears in the
  // supplied company facts; "48 States" and "24/7 Dispatch" came from the design
  // brief and need sign-off before launch.
  stats: [
    { value: company.yearsInOperation, label: "Years in Operation" },
    { value: "48", label: "States Served" },
    { value: "24/7", label: "Dispatch" },
    { value: "WOSB", label: "Certified" },
  ],
};

export type ServiceIcon =
  | "freight"
  | "warehouse"
  | "supply-chain"
  | "courier"
  | "medical"
  | "solutions";

export const services = {
  eyebrow: "What we move",
  headline: "Logistics built for *reliability*",
  body: "Six ways to put Texas Bred to work, from a single local delivery to an ongoing supply chain program.",
  // TODO: point these at individual service pages if they get built.
  cardCta: { label: "Learn more", href: "#contact" },
  items: [
    {
      title: "Freight Transportation",
      description:
        "Local, regional and national freight, planned around your schedule and delivery requirements.",
      icon: "freight",
    },
    {
      title: "Warehousing & Storage",
      description:
        "Secure storage for your goods, ready to move when your customers and projects need them.",
      icon: "warehouse",
    },
    {
      title: "Supply Chain Management",
      description:
        "Coordination from origin to destination, so every link in your supply chain stays on plan.",
      icon: "supply-chain",
    },
    {
      title: "Local Courier & Delivery",
      description:
        "Dependable courier and delivery service across the Houston area for time-sensitive shipments.",
      icon: "courier",
    },
    {
      title: "Medical Supply Transport",
      description:
        "Careful, compliant transportation of medical supplies for healthcare providers and suppliers.",
      icon: "medical",
    },
    {
      title: "Logistics Solutions",
      description:
        "Tailored logistics plans built around your industry, your freight and your operating needs.",
      icon: "solutions",
    },
  ] satisfies { title: string; description: string; icon: ServiceIcon }[],
};

export const about = {
  eyebrow: "About the company",
  headline: "Houston-based. *Texas-bred.*",
  paragraphs: [
    "Texas Bred Transports & Logistics is based in Houston, Texas, and serves as a professional logistics partner for commercial and government clients.",
    "Our mission is to deliver seamless, tailored logistics across multiple industries, with reliability, efficiency and customer satisfaction guiding every job we take on.",
  ],
  points: [
    "Fleet management technology",
    "Route optimization",
    "Full regulatory compliance",
  ],
  // TODO: link to the company story page once it exists.
  cta: { label: "Our story", href: "#" },
  badgeValue: company.yearsInOperation,
  badgeLabel: "Years",
  image: {
    // TODO: replace with client photography.
    src: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1400&q=80",
    alt: "Warehouse aisle lined with tall racks of palletized goods",
  },
};

export const industries = {
  eyebrow: "Who we serve",
  headline: "One partner, *every* industry",
  body: "We tailor our logistics to the demands of each sector we serve, backed by strong industry partnerships.",
  cta: { label: "Talk to our team", href: "#contact" },
  items: [
    {
      name: "Retail & E-commerce",
      description: "Freight, storage and delivery that keep products moving to customers.",
    },
    {
      name: "Manufacturing",
      description: "Transportation and warehousing that keep materials and finished goods on schedule.",
    },
    {
      name: "Healthcare & Medical Supply",
      description: "Careful, compliant transport for medical supplies and healthcare providers.",
    },
    {
      name: "Government & Public Sector",
      description: "A registered, contract-ready logistics partner for government agencies.",
    },
  ],
};

export const government = {
  eyebrow: "Government ready",
  headline: "Registered. Certified. *Compliant.*",
  body: "Texas Bred is a contract-ready, Women-Owned Small Business registered with SAM.gov. Agencies and prime contractors can verify our details below and reach out directly.",
  // TODO: link to the capability statement PDF once the client supplies it.
  cta: { label: "Download Capability Statement", href: "#" },
  details: [
    { label: "SAM.gov", value: "Registered" },
    { label: "CAGE", value: "14B82" },
    { label: "UEI", value: "D254NGB5L8C1" },
    { label: "NAICS", value: "492110, 492210" },
    { label: "Certification", value: "WOSB" },
    { label: "Location", value: "Houston, TX" },
  ],
};

export const howItWorks = {
  eyebrow: "How it works",
  headline: "From quote to *delivery*",
  body: "Four clear steps, with one logistics partner responsible from start to finish.",
  cta: { label: "Start your quote", href: "#contact" },
  steps: [
    {
      title: "Request a quote",
      description: "Tell us what you are moving, where it is now and where it needs to go.",
    },
    {
      title: "We plan the route",
      description: "We use route optimization to build a plan around your shipment and timeline.",
    },
    {
      title: "We move it",
      description: "Our team handles transportation in full compliance with regulations.",
    },
    {
      title: "Tracked & confirmed",
      description: "Your shipment is tracked along the way and delivery is confirmed at the end.",
    },
  ],
};

export const contact = {
  eyebrow: "Get a quote",
  headline: "Ready to *move*?",
  body: "Call, email or send the form and we will get back to you with the next steps.",
};

export const quoteForm = {
  label: "Request a quote",
  requiredNote: "Fields marked * are required.",
  serviceOptionPlaceholder: "Select a service",
  submit: "Request a Quote",
  submitting: "Sending…",
  success: "Thank you. Your quote request has been received and we will be in touch soon.",
  failure: `Something went wrong and your request was not sent. Please try again or call ${company.phone}.`,
  summaryError: "Please correct the highlighted fields.",
  labels: {
    name: "Name",
    company: "Company",
    email: "Email",
    phone: "Phone",
    service: "Service Needed",
    pickup: "Pickup city",
    delivery: "Delivery city",
    message: "Message",
  },
  errors: {
    name: "Please enter your name.",
    email: "Please enter a valid email address.",
    phone: "Please enter a valid phone number.",
    service: "Please select a service.",
    pickup: "Please enter a pickup city.",
    delivery: "Please enter a delivery city.",
  },
};

export const footer = {
  description: "A professional logistics partner for commercial and government clients.",
  badge: "Women-Owned Small Business (WOSB)",
  servicesHeading: "Services",
  companyHeading: "Company",
  contactHeading: "Contact",
  companyLinks: [
    { label: "About", href: "#about" },
    { label: "Industries", href: "#industries" },
    { label: "Government", href: "#government" },
    // TODO: link to the careers page once it exists.
    { label: "Careers", href: "#" },
    { label: "Contact", href: "#contact" },
  ],
  copyright: `© 2026 ${company.name}`,
  // TODO: link to the legal pages once they exist.
  legalLinks: [
    { label: "Privacy", href: "#" },
    { label: "Terms", href: "#" },
  ],
  naics: "NAICS 492110 · 492210",
};
