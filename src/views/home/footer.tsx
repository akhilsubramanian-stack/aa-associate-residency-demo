"use client";

import Image from "next/image";
import { useRequestModal } from "@/hooks/ui-store";
import type { homeContent } from "@/data/mocks/home";

export interface FooterProps { brand: string; footer: (typeof homeContent)["footer"] }

export const Footer = ({ brand, footer }: FooterProps) => {
  const openModal = useRequestModal((state)=>state.openModal);
  return (
    <footer className="residency-footer" id="contact">
      <div className="residency-footer__orb" aria-hidden="true" />
      <div className="mx-auto max-w-shell px-5 pb-8 pt-20 sm:px-8 lg:pt-24">
        <div className="residency-footer__grid">
          <div className="residency-footer__brand">
            <Image src="/assets/aa-logo.png" alt={`${brand} logo`} width={360} height={120} />
            <h2 className="mobile-section-heading">Ready to start your <br className="mobile-heading-break" />UAE Residency?</h2>
            <p>{footer.tagline}</p>
            <a href="tel:+971564086728">Call Us: +971 56 408 6728</a>
          </div>

          <div className="footer-consultation">
            <p>Let&apos;s Talk</p>
            <h3>Request a Free Consultation</h3>
            <div className="footer-consultation__steps" aria-label="Consultation steps">
              {["Business Type","Business Details","Personal Details"].map((step,index)=><span key={step}><b>{index+1}</b><small>{step}</small></span>)}
            </div>
            <label htmlFor="footer-residency">Are you planning to apply for UAE residency?</label>
            <select id="footer-residency" defaultValue="yes"><option value="yes">Yes</option><option value="no">No, I need advice</option></select>
            <button type="button" onClick={openModal}>Start consultation <span>→</span></button>
          </div>
        </div>
        <div className="residency-footer__legal"><p>{footer.legal.copyright}</p><nav>{footer.legal.links.map(link=><a href={link.href} key={link.label}>{link.label}</a>)}</nav></div>
      </div>
    </footer>
  );
};
