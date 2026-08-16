/**
 * Placeholder content for the home page. Swap these values per project — every
 * section reads its copy from here (component-conventions: no hardcoded content).
 */

export interface NavLink {
  label: string;
  href: string;
  hasDropdown?: boolean;
}

export interface Partner {
  name: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: "x" | "behance" | "dribbble";
}

export interface CreateWord {
  label: string;
  variant: "light" | "accent" | "dark" | "ghost";
  isArrow?: boolean;
}

export interface HeroCardItem {
  caption: string;
  title: string;
}

export interface PortfolioItem {
  id: string;
  name: string;
  category: string;
  year: string;
  description: string;
  tags: string[];
  href: string;
}

export interface ServiceItem {
  index: string;
  title: string;
  description: string;
  href: string;
}

export interface Stat {
  prefix?: string;
  value: number;
  suffix?: string;
  label: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}

export const homeContent = {
  brand: "A&A Associate",
  nav: [
    { label: "Program", href: "#home" },
    { label: "Process", href: "#works" },
    { label: "Included", href: "#services", hasDropdown: true },
    { label: "Why A&A", href: "#about" },
    { label: "FAQ", href: "#faq" },
    { label: "Consultation", href: "#contact" },
  ] as NavLink[],
  meta: {
    statusLabel: "Dubai time",
    time: "9:41am",
    date: "UAE · GMT+4",
  },
  hero: {
    eyebrow: "UAE Investor Residency",
    brandWatermark: "DUBAI",
    headingLines: ["World's Fastest UAE", "Residency Program"],
    rating: 5,
    customers: "",
    primaryCta: { label: "Start Your Residency", href: "#contact" },
    secondaryCta: { label: "See the Process", href: "#works" },
    cards: [
      { caption: "Your company", title: "Free-zone licence included." },
      { caption: "Your residency", title: "Two-year investor visa." },
      { caption: "Your timeline", title: "Remote-first. Five days." },
    ],
    partnersLabel: "Package highlights",
    partners: [
      { name: "2-year visa" },
      { name: "Emirates ID" },
      { name: "VIP medical" },
      { name: "Trade licence" },
      { name: "100% ownership" },
      { name: "10 activities" },
      { name: "No hidden fees" },
    ] as Partner[],
    footer: {
      left: "A decade of excellence",
      center: "Most of the process handled remotely",
      right: "Scroll to explore",
    },
  },
  about: {
    eyebrow: "The programme",
    globeLabel: "A UAE company and investor residency, handled end to end.",
    statement: {
      lead: "Skip weeks of paperwork and secure ",
      muted: "your free-zone company, two-year residency and Emirates ID in one coordinated five-day programme.",
    },
    socialLabel: "Talk to us",
    socials: [
      { label: "Call", href: "tel:+971564086728", icon: "x" },
      { label: "WhatsApp", href: "#contact", icon: "behance" },
      { label: "LinkedIn", href: "#contact", icon: "dribbble" },
    ] as SocialLink[],
    cta: { label: "Why A&A", href: "#about" },
  },
  create: {
    words: [
      { label: "Remote", variant: "light" },
      { label: "3 Days", variant: "accent" },
      { label: "", variant: "dark", isArrow: true },
      { label: "2 Days UAE", variant: "ghost" },
    ] as CreateWord[],
  },
  portfolio: {
    eyebrow: "How it works",
    heading: "Your five-day route",
    items: [
      {
        id: "aster-labs",
        name: "Business licence",
        category: "Remote",
        year: "Day 1",
        description:
          "We establish your free-zone company and issue the incorporation documents.",
        tags: ["Trade licence", "MOA", "Partner list"],
        href: "#aster-labs",
      },
      {
        id: "nova-finance",
        name: "Immigration setup",
        category: "Remote",
        year: "Days 2–3",
        description:
          "Your immigration file, e-channel registration and entry visa are completed.",
        tags: ["Immigration file", "E-channel", "Entry visa"],
        href: "#nova-finance",
      },
      {
        id: "helio-studio",
        name: "VIP medical & biometrics",
        category: "In the UAE",
        year: "Day 4",
        description:
          "A short UAE visit completes the mandatory medical and Emirates ID biometrics.",
        tags: ["VIP medical", "VIP biometrics"],
        href: "#helio-studio",
      },
      {
        id: "pulse-health",
        name: "Residency approved",
        category: "In the UAE",
        year: "Day 5",
        description:
          "Your two-year investor residency is approved and your Emirates ID is issued.",
        tags: ["Residency", "Emirates ID", "Bank letter"],
        href: "#pulse-health",
      },
    ] as PortfolioItem[],
  },
  services: {
    eyebrow: "Everything included",
    heading: "One price. Nothing hidden.",
    items: [
      {
        index: "01",
        title: "Company Formation",
        description: "Trade licence, incorporation certificate, MOA and co-working lease.",
        href: "#development",
      },
      {
        index: "02",
        title: "Immigration & Visa",
        description: "Immigration file, e-channel, entry visa and status change.",
        href: "#design",
      },
      {
        index: "03",
        title: "Residency & Emirates ID",
        description: "VIP medical, biometrics, residency approval and national ID.",
        href: "#qa",
      },
      {
        index: "04",
        title: "Business Banking Support",
        description: "A&A bank introduction letter and dedicated consultant support.",
        href: "#consulting",
      },
    ] as ServiceItem[],
  },
  stats: {
    eyebrow: "Why A&A Associate",
    heading: "Trusted across borders.",
    items: [
      { value: 12000, suffix: "+", label: "Company formations per year" },
      { value: 30, suffix: "+", label: "Authority partnerships" },
      { value: 12, suffix: "", label: "Offices across the globe" },
      { value: 10, suffix: "+", label: "Years of UAE experience" },
    ] as Stat[],
  },
  footer: {
    brandWatermark: "A&A",
    cta: {
      heading: "Ready to start your UAE residency?",
      button: { label: "Talk to a consultant", href: "#contact" },
    },
    tagline:
      "UAE business setup, investor residency and corporate services delivered with clarity.",
    columns: [
      {
        title: "Programme",
        links: [
          { label: "How it works", href: "#works" },
          { label: "Package", href: "#services" },
          { label: "Why A&A", href: "#about" },
          { label: "Consultation", href: "#contact" },
        ],
      },
      {
        title: "Included",
        links: [
          { label: "Company formation", href: "#services" },
          { label: "Investor visa", href: "#services" },
          { label: "Emirates ID", href: "#services" },
          { label: "Bank introduction", href: "#services" },
        ],
      },
      {
        title: "Contact",
        links: [
          { label: "+971 56 408 6728", href: "tel:+971564086728" },
          { label: "WhatsApp", href: "#contact" },
          { label: "LinkedIn", href: "#contact" },
          { label: "Dubai, UAE", href: "#contact" },
        ],
      },
    ] as FooterColumn[],
    legal: {
      copyright: "© 2026 A&A Associate. All rights reserved.",
      links: [
        { label: "Privacy", href: "#privacy" },
        { label: "Terms", href: "#terms" },
      ] as FooterLink[],
    },
  },
} as const;

export type HomeContent = typeof homeContent;
