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
    eyebrow: "World's Fastest Residency Program",
    title: "A&A Associate: The Fastest Route to UAE Residency",
    paragraphs: [
      "With A&A Associate, you can secure full UAE residency in just 5 working days. Your business licence, immigration card, e-channel registration and entry visa are all handled remotely in the first 3 days, so the groundwork is already done before you even land.",
      "The remaining steps happen during a single 48-hour visit. That includes your status change, medical and biometrics—both fast-tracked through VIP services—residency approval and Emirates ID. No extended stays, repeat trips or weeks spent waiting on appointments.",
    ],
    videoId: "GjGP5boAsr4",
    videoTitle: "A&A Associate — World's Fastest UAE Residency Program",
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
    eyebrow: "The five-day process",
    heading: "How it works",
    intro: "Just 5 working days—most of it completed remotely, followed by one short UAE visit.",
    items: [
      {
        id: "remote-setup",
        name: "Done Remotely",
        category: "Step 1",
        year: "3 Working Days",
        description: "No UAE presence required",
        tags: ["Business Licence", "Immigration Card", "E-Channel", "Entry Visa"],
        href: "#remote-setup",
      },
      {
        id: "uae-visit",
        name: "Physical Presence",
        category: "Step 2",
        year: "2 Working Days",
        description: "In person in the UAE",
        tags: ["Medical — VIP Services", "EID Biometrics — VIP Services", "Residency Approval", "Emirates ID (National ID)"],
        href: "#uae-visit",
      },
    ] as PortfolioItem[],
  },
  services: {
    eyebrow: "The complete package",
    heading: "What's Included?",
    intro: "Every document, approval and essential service—coordinated by one A&A team.",
    note: "One coordinated process · No repeated appointments · Dedicated support",
    inclusions: [
      "Trade Licence",
      "Certificate of Incorporation",
      "Co-working Lease Agreement",
      "Partner List",
      "Memorandum of Association (MOA)",
      "Introduction Letter to Bank",
      "E-Channel Registration",
      "Medical Insurance",
      "E-Visa",
      "Medical Check-up",
      "Residence Approval",
      "Emirates ID",
      "Pre-approval for 1 Shareholder",
      "Status Change",
      "Immigration File",
      "Designated Free-zone Address",
    ],
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
    heading: "UAE's Largest Corporate Service Provider",
    intro: "A&A Associate guides more than 1,200 company formations each year across mainland, free-zone and offshore jurisdictions. With an international team, 12 offices and direct partnerships with over 30 authorities, we handle the regulatory relationships so you can move with confidence.",
    items: [
      { value: 1200, suffix: "+", label: "Company formations per year" },
      { value: 450, suffix: "+", label: "Team members" },
      { value: 12, suffix: "+", label: "Offices across the globe" },
      { value: 30, suffix: "+", label: "Authority partnerships" },
    ] as Stat[],
  },
  awards: {
    eyebrow: "Awards & Recognition",
    heading: "Recognised for excellence across the UAE",
    intro: "Independent recognition for trusted advisory, exceptional workplace culture and consistent service to entrepreneurs.",
    items: [
      { image: "/assets/awards/logo-1.webp", name: "Superbrands", detail: "UAE's Choice", year: "Awarded" },
      { image: "/assets/awards/logo-6.webp", name: "Global Business Outlook", detail: "Business Setup Consultancy", year: "Winner" },
      { image: "/assets/awards/logo-5.webp", name: "Centuro Global", detail: "Registered Global Member", year: "Member" },
      { image: "/assets/awards/logo-4.webp", name: "Top 10 Consultants", detail: "Business Consultants from Asia", year: "2023" },
      { image: "/assets/awards/logo-3.webp", name: "Great Place To Work", detail: "Certified UAE", year: "2025–26" },
      { image: "/assets/awards/logo-2.webp", name: "CEO Insights Asia", detail: "Industry Recognition", year: "Featured" },
    ],
  },
  testimonials: {
    eyebrow: "Client Stories",
    heading: "The Entrepreneur's First Choice for Business Setup",
    intro: "See what our clients have to say. Every consultation starts with understanding your needs and business goals. Our team provides tailored advice to every client.",
    items: [
      { name: "Kristine", country: "Russian", flag: "🇷🇺", videoId: "ikIM_pcRMy8" },
      { name: "Abdul", country: "French", flag: "🇫🇷", videoId: "6uJFwKl342c" },
    ],
  },
  agencies: {
    heading: "We work closely with all Government Agencies",
    intro: "We're always on the same page with Government Agencies, working together to get the job done!",
    items: [
      { name: "Government of Dubai", image: "/assets/agencies/government-of-dubai.webp" },
      { name: "UAE Ministry of Finance", image: "/assets/agencies/ministry-of-finance.webp" },
      { name: "Expo 2020 Dubai", image: "/assets/agencies/expo-2020.webp" },
      { name: "Dubai Health Authority", image: "/assets/agencies/dubai-health-authority.webp" },
      { name: "Emirates Identity Authority", image: "/assets/agencies/emirates-identity-authority.webp" },
      { name: "Dubai Police", image: "/assets/agencies/dubai-police.webp" },
      { name: "Federal Tax Authority", image: "/assets/agencies/federal-tax-authority.webp" },
    ],
  },
  faq: {
    eyebrow: "Questions, answered",
    heading: "UAE residency FAQs",
    intro: "Clear answers about the five-day investor residency programme, company formation and bringing your family to the UAE.",
    items: [
      { question: "How can I get UAE residency fast?", answer: "The quickest route is a free-zone company formation paired with an investor visa. Most paperwork is completed remotely in the first 3 working days, followed by a short 2-working-day UAE visit for medical screening, biometrics and final approval." },
      { question: "How much does UAE residency cost?", answer: "Your final cost depends on the selected business activities, visa requirements and number of applicants. A consultant will confirm the complete package price before your application begins." },
      { question: "Do I need to move to the UAE to get residency?", answer: "No. The initial company and immigration processing can be handled remotely. You only need to visit the UAE for the required in-person medical screening and Emirates ID biometrics." },
      { question: "Can I get a UAE visa without a job offer?", answer: "Yes. An investor or business-owner residency route does not require a traditional employer job offer, provided the company and immigration requirements are met." },
      { question: "Can I bring my spouse and children on a UAE investor visa?", answer: "Family sponsorship is available after your own residency is issued, subject to the applicable immigration requirements and supporting documents." },
      { question: "How long is a UAE investor visa valid for?", answer: "This programme includes a renewable two-year investor residence visa. Renewal eligibility remains subject to the company and immigration requirements in force at that time." },
      { question: "What documents do I need to apply for UAE residency?", answer: "Typical documents include a clear passport copy, passport photograph and basic personal and business information. Your consultant will provide the final checklist for your application." },
      { question: "Can I own 100% of my company in the UAE as a foreigner?", answer: "Yes. The included free-zone company structure permits full foreign ownership for approved business activities." },
      { question: "What happens if I fail the UAE medical test?", answer: "Residency approval depends on completing the required government medical screening. If a result needs review, the relevant authority determines the next steps and our team will guide you through the process." },
    ],
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
