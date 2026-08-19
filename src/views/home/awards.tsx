import Image from "next/image";
import { Inview } from "@/components/animation/springs/in-view";
import type { homeContent } from "@/data/mocks/home";

export interface AwardsProps {
  awards: (typeof homeContent)["awards"];
}

const referenceAwards = [
  { image: "/assets/awards-hq/award-superbrands.png", name: "Superbrands UAE's Choice", width: 112, height: 102, className: "" },
  { image: "/assets/awards-hq/award-ceo-insights.png", name: "CEO Insights Asia", width: 192, height: 52, className: "awards-slider__item--ceo" },
  { image: "/assets/awards-hq/award-gptw.png", name: "Great Place To Work certified", width: 60, height: 102, className: "awards-slider__item--gptw" },
  { image: "/assets/awards-hq/award-centuro.png", name: "Centuro Global", width: 124, height: 42, className: "awards-slider__item--centuro" },
  { image: "/assets/awards-hq/award-global-outlook.png", name: "Global Business Outlook Awards", width: 76, height: 102, className: "awards-slider__item--global" },
] as const;

export const Awards = ({ awards: _awards }: AwardsProps) => {
  const renderSet = (duplicate = false) => (
    <>
      {referenceAwards.slice(0, 3).map((award) => (
        <li className={`awards-slider__item ${award.className}`} key={`${duplicate ? "copy-" : ""}${award.name}`} aria-hidden={duplicate || undefined}>
          <Image src={award.image} alt={duplicate ? "" : award.name} width={award.width} height={award.height} unoptimized />
        </li>
      ))}
      <li className="awards-slider__item" key={duplicate ? "copy-top-10" : "top-10"} aria-hidden={duplicate || undefined}>
        <div className="awards-slider__top10" aria-label={duplicate ? undefined : "Top 10 Business Consultants from Asia 2023"}>
          <b>TOP 10</b><span>BUSINESS<br />CONSULTANTS</span><small>FROM ASIA 2023</small>
        </div>
      </li>
      {referenceAwards.slice(3).map((award) => (
        <li className={`awards-slider__item ${award.className}`} key={`${duplicate ? "copy-" : ""}${award.name}`} aria-hidden={duplicate || undefined}>
          <Image src={award.image} alt={duplicate ? "" : award.name} width={award.width} height={award.height} unoptimized />
        </li>
      ))}
    </>
  );

  return (
    <section className="awards-slider-section" aria-label="Awards and recognitions">
      <div className="mx-auto max-w-shell px-5 py-7 sm:px-8 lg:py-10">
        <Inview tag="div" mode="once" from={{ opacity: 0, transform: "translateY(16px)" }} to={{ opacity: 1, transform: "translateY(0px)" }}>
          <div className="awards-slider">
            <ul className="awards-slider__track">
              {renderSet()}
              {renderSet(true)}
            </ul>
          </div>
        </Inview>
      </div>
    </section>
  );
};
