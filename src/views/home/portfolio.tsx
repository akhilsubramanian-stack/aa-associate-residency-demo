"use client";

import { useState, type CSSProperties, type PointerEvent } from "react";
import { Inview } from "@/components/animation/springs/in-view";
import type { homeContent, PortfolioItem } from "@/data/mocks/home";

export interface PortfolioProps {
  portfolio: (typeof homeContent)["portfolio"];
}

type ProcessStyle = CSSProperties & {
  "--process-rx": string;
  "--process-ry": string;
  "--process-x": string;
  "--process-y": string;
};

const neutralTilt: ProcessStyle = {
  "--process-rx": "0deg",
  "--process-ry": "0deg",
  "--process-x": "50%",
  "--process-y": "50%",
};

const ProcessModel = ({ step }: { step: number }) => (
  <div className={`process-model process-model--${step}`} aria-hidden="true">
    <span className="process-model__orbit process-model__orbit--one" />
    <span className="process-model__orbit process-model__orbit--two" />
    <span className="process-model__disc" />
    {step === 1 ? (
      <>
        <span className="process-model__passport">
          <span className="process-model__passport-mark">A&A</span>
          <span className="process-model__passport-line" />
        </span>
        <span className="process-model__document process-model__document--one">✓</span>
        <span className="process-model__document process-model__document--two">✓</span>
        <span className="process-model__cloud">Remote</span>
      </>
    ) : (
      <>
        <span className="process-model__id">
          <span className="process-model__portrait" />
          <span className="process-model__id-lines" />
          <span className="process-model__id-label">EMIRATES ID</span>
        </span>
        <span className="process-model__scan process-model__scan--one" />
        <span className="process-model__scan process-model__scan--two" />
        <span className="process-model__pin">UAE</span>
      </>
    )}
  </div>
);

const ProcessCard = ({ item, index }: { item: PortfolioItem; index: number }) => {
  const [tilt, setTilt] = useState<ProcessStyle>(neutralTilt);

  const handleMove = (event: PointerEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    setTilt({
      "--process-rx": `${(0.5 - y) * 6}deg`,
      "--process-ry": `${(x - 0.5) * 8}deg`,
      "--process-x": `${x * 100}%`,
      "--process-y": `${y * 100}%`,
    });
  };

  return (
    <Inview
      tag="li"
      mode="once"
      from={{ opacity: 0, transform: `translate3d(${index ? 50 : -50}px, 35px, 0)` }}
      to={{ opacity: 1, transform: "translate3d(0, 0, 0)" }}
      config={{ tension: 170, friction: 24 }}
      delayIn={index * 120}
      className="process-card-wrap"
    >
      <article
        className={`process-card process-card--${index + 1}`}
        style={tilt}
        onPointerMove={handleMove}
        onPointerLeave={() => setTilt(neutralTilt)}
      >
        <div className="process-card__glow" aria-hidden="true" />
        <div className="process-card__top">
          <span className="process-card__step">{item.category}</span>
          <span className="process-card__time">
            <span aria-hidden="true">◷</span> {item.year}
          </span>
        </div>
        <div className="process-card__content">
          <div className="process-card__copy">
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <ul>
              {item.tags.map((tag) => (
                <li key={tag}>
                  <span aria-hidden="true">✓</span>
                  {tag}
                </li>
              ))}
            </ul>
          </div>
          <ProcessModel step={index + 1} />
        </div>
        <div className="process-card__number" aria-hidden="true">0{index + 1}</div>
      </article>
    </Inview>
  );
};

export const Portfolio = ({ portfolio }: PortfolioProps) => (
  <section id="works" aria-labelledby="portfolio-heading" className="process-section">
    <div className="process-section__noise" aria-hidden="true" />
    <div className="mx-auto max-w-shell px-5 py-20 sm:px-8 lg:py-28">
      <div className="process-section__heading">
        <div>
          <p className="process-section__eyebrow">{portfolio.eyebrow}</p>
          <h2 id="portfolio-heading">{portfolio.heading}</h2>
        </div>
        <p>{portfolio.intro}</p>
      </div>
      <ul className="process-section__grid">
        {portfolio.items.map((item, index) => (
          <ProcessCard key={item.id} item={item} index={index} />
        ))}
      </ul>
    </div>
  </section>
);
