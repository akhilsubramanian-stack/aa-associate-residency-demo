"use client";

import { useState } from "react";
import { Inview } from "@/components/animation/springs/in-view";
import { useIntro, useRequestModal } from "@/hooks/ui-store";
import type { homeContent } from "@/data/mocks/home";

export interface HeroProps {
  hero: (typeof homeContent)["hero"];
}

const inclusions = [
  "Business Licence",
  "1 Residence Visa",
  "Medical Insurance",
  "VIP Visa Service",
  "10 Business Activities",
  "Family Sponsorship Available",
  "Free Visa Renewal Every 2 Years",
];

const reviews = [
  { mark: "G", name: "Google", rating: "4.6", color: "text-[#4285f4]" },
  { mark: "★", name: "Trustpilot", rating: "4.1", color: "text-[#00b67a]" },
  { mark: "∞", name: "Meta", rating: "4.5", color: "text-[#1877f2]" },
];

export const Hero = ({ hero }: HeroProps) => {
  const ready = useIntro((state) => state.ready);
  const openModal = useRequestModal((state) => state.openModal);
  const [step, setStep] = useState(1);

  const next = () => setStep((current) => Math.min(3, current + 1));
  const back = () => setStep((current) => Math.max(1, current - 1));

  return (
    <section id="home" aria-labelledby="hero-heading" className="relative isolate overflow-hidden rounded-b-card bg-[#070b16]">
      <div className="hero-cinema absolute inset-0 z-0" aria-hidden>
        <div className="hero-cinema__stage">
          <video className="hero-cinema__video" autoPlay muted loop playsInline preload="auto">
            <source src="https://aa-associate-residency-3d.vercel.app/assets/hero/ain-dubai.mp4" type="video/mp4" />
          </video>
          <span className="hero-cinema__depth hero-cinema__depth--one" />
          <span className="hero-cinema__depth hero-cinema__depth--two" />
          <span className="hero-cinema__glow" />
        </div>
      </div>

      <div aria-hidden className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(90deg,rgba(5,8,15,.88)_0%,rgba(5,8,15,.68)_44%,rgba(5,8,15,.38)_70%,rgba(5,8,15,.56)_100%)]" />

      <div className="relative z-20 mx-auto grid max-w-shell gap-10 px-5 pb-16 pt-32 sm:px-8 lg:min-h-lvh lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:gap-14 lg:pb-20 lg:pt-36">
        <div className="flex flex-col items-start text-white">
          <Inview tag="p" mode="once" enabled={ready} from={{ opacity: 0, transform: "translateY(10px)" }} to={{ opacity: 1, transform: "translateY(0px)" }} className="mb-4 text-sm font-semibold uppercase tracking-[.18em] text-[#e0c675]">
            UAE Investor Residency
          </Inview>

          <h1 id="hero-heading" className="max-w-[13ch] text-5xl font-semibold leading-[.98] tracking-tight sm:text-6xl lg:text-7xl">
            World&apos;s Fastest UAE <span className="text-[#e0c675]">Residency Program</span>
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/78 sm:text-lg">
            Secure full UAE residency in just 5 working days, with most of the process completed remotely before you arrive.
          </p>

          <div className="mt-7 w-full max-w-2xl rounded-3xl border border-[#e0c675]/35 bg-transparent p-5 sm:p-6">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[.18em] text-[#e0c675]">Your company includes</p>
            <ul className="grid gap-x-6 gap-y-3 sm:grid-cols-2">
              {inclusions.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm font-medium text-white/92">
                  <span aria-hidden className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-[#e0c675] text-[.7rem] font-bold text-[#17131b]">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <button type="button" onClick={openModal} className="mt-6 inline-flex items-center gap-3 rounded-full bg-[#e0c675] px-7 py-4 text-sm font-bold text-[#17131b] shadow-[0_16px_44px_rgba(224,198,117,.24)] transition hover:-translate-y-0.5 hover:bg-[#f0d986] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
            Start Your Residency <span aria-hidden>→</span>
          </button>

          <div className="mt-6 flex flex-wrap gap-2.5" aria-label="Customer review ratings">
            {reviews.map((review) => (
              <div key={review.name} className="flex items-center gap-2 rounded-full border border-white/15 bg-black/40 px-3 py-2 backdrop-blur-md">
                <span className={`grid size-7 place-items-center rounded-full bg-white text-lg font-bold ${review.color}`}>{review.mark}</span>
                <span className="text-xs leading-tight text-white"><strong className="block text-sm">{review.rating} ★★★★★</strong>{review.name} Reviews</span>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full rounded-[2rem] border border-[#e0c675]/70 bg-transparent p-5 text-white sm:p-7 lg:ml-auto lg:max-w-[31rem]">
          <p className="text-3xl font-semibold">Let&apos;s Talk</p>
          <p className="mt-1 text-sm text-white/70">Request a Free Consultation</p>

          <div className="my-7 flex items-start justify-between" aria-label={`Step ${step} of 3`}>
            {["Business Type", "Business Details", "Personal Details"].map((label, index) => {
              const number = index + 1;
              return (
                <div key={label} className="relative flex flex-1 flex-col items-center text-center">
                  {index > 0 ? <span className="absolute right-1/2 top-4 h-px w-full bg-white/25" aria-hidden /> : null}
                  <span className={`relative z-10 grid size-8 place-items-center rounded-full border text-xs font-bold ${number <= step ? "border-[#e0c675] bg-[#e0c675] text-[#17131b]" : "border-white/35 bg-[#24252d] text-white/65"}`}>{number}</span>
                  <span className="relative z-10 mt-2 max-w-20 text-[.68rem] font-medium leading-tight text-white/75">{label}</span>
                </div>
              );
            })}
          </div>

          <form onSubmit={(event) => { event.preventDefault(); openModal(); }}>
            {step === 1 ? (
              <label className="block text-sm font-medium">Are you planning to apply for UAE residency?
                <select className="mt-3 w-full rounded-xl border border-white/15 bg-white px-4 py-3.5 text-sm text-[#17131b] outline-none focus:border-[#e0c675]" defaultValue="Yes">
                  <option>Yes</option><option>No</option>
                </select>
              </label>
            ) : null}
            {step === 2 ? (
              <div className="grid gap-4">
                <label className="text-sm font-medium">Are you applying for UAE residency for yourself or for others too?
                  <select className="mt-2 w-full rounded-xl border border-white/20 bg-white px-4 py-3.5 text-[#17131b] outline-none focus:border-[#e0c675]" defaultValue="Just for myself">
                    <option>Just for myself</option><option>Myself and my family</option><option>For someone else</option><option>Not sure yet</option>
                  </select>
                </label>
                <label className="text-sm font-medium">When would you like to start?
                  <select className="mt-2 w-full rounded-xl border border-white/20 bg-white px-4 py-3.5 text-[#17131b] outline-none focus:border-[#e0c675]" defaultValue="As soon as possible">
                    <option>As soon as possible</option><option>Within 1 month</option><option>Within 1–3 months</option><option>Later</option>
                  </select>
                </label>
                <label className="text-sm font-medium">Please select your preferred callback date (UAE time).
                  <input required type="date" className="mt-2 w-full rounded-xl border border-white/20 bg-white px-4 py-3.5 text-[#17131b] outline-none focus:border-[#e0c675]" />
                </label>
              </div>
            ) : null}
            {step === 3 ? (
              <div className="grid gap-4">
                <label className="text-sm font-medium">Full name<input required className="mt-2 w-full rounded-xl border border-white/20 bg-white px-4 py-3.5 text-[#17131b] outline-none focus:border-[#e0c675]" placeholder="Enter your full name" /></label>
                <label className="text-sm font-medium">WhatsApp number<input required type="tel" className="mt-2 w-full rounded-xl border border-white/20 bg-white px-4 py-3.5 text-[#17131b] outline-none focus:border-[#e0c675]" placeholder="+971" /></label>
                <label className="text-sm font-medium">Email address<input required type="email" className="mt-2 w-full rounded-xl border border-white/20 bg-white px-4 py-3.5 text-[#17131b] outline-none focus:border-[#e0c675]" placeholder="name@example.com" /></label>
                <label className="flex items-start gap-2 text-xs leading-relaxed text-white/75"><input required type="checkbox" className="mt-0.5 size-4 accent-[#e0c675]" />I agree to be contacted by A&amp;A Associate about my UAE residency enquiry.</label>
              </div>
            ) : null}

            <div className="mt-6 flex items-center justify-between gap-3">
              {step > 1 ? <button type="button" onClick={back} className="rounded-full border border-white/25 px-5 py-3 text-sm font-semibold text-white">Back</button> : <span />}
              {step < 3 ? <button type="button" onClick={next} className="rounded-full bg-[#e0c675] px-7 py-3 text-sm font-bold text-[#17131b]">Next</button> : <button type="submit" className="rounded-full bg-[#e0c675] px-7 py-3 text-sm font-bold text-[#17131b]">Request Consultation</button>}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
