"use client";

import { useState, type CSSProperties, type PointerEvent } from "react";
import { Inview } from "@/components/animation/springs/in-view";
import type { homeContent } from "@/data/mocks/home";

export interface ServicesProps {
  services: (typeof homeContent)["services"];
}

type IncludedStyle = CSSProperties & {
  "--included-rx": string;
  "--included-ry": string;
  "--included-x": string;
  "--included-y": string;
};

const baseStyle: IncludedStyle = {
  "--included-rx": "0deg",
  "--included-ry": "0deg",
  "--included-x": "50%",
  "--included-y": "50%",
};

export const Services = ({ services }: ServicesProps) => {
  const [style, setStyle] = useState<IncludedStyle>(baseStyle);

  const handlePointerMove = (event: PointerEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    setStyle({
      "--included-rx": `${(0.5 - y) * 4}deg`,
      "--included-ry": `${(x - 0.5) * 6}deg`,
      "--included-x": `${x * 100}%`,
      "--included-y": `${y * 100}%`,
    });
  };

  const midpoint = Math.ceil(services.inclusions.length / 2);
  const columns = [services.inclusions.slice(0, midpoint), services.inclusions.slice(midpoint)];

  return (
    <section id="services" aria-labelledby="services-heading" className="included-section">
      <div className="mx-auto max-w-shell px-5 py-20 sm:px-8 lg:py-28">
        <Inview
          tag="article"
          mode="once"
          from={{ opacity: 0, transform: "translateY(45px) scale(.98)" }}
          to={{ opacity: 1, transform: "translateY(0px) scale(1)" }}
          config={{ tension: 170, friction: 25 }}
          className="included-scene"
          style={style}
          onPointerMove={handlePointerMove}
          onPointerLeave={() => setStyle(baseStyle)}
        >
          <div className="included-scene__backplate included-scene__backplate--one" aria-hidden="true" />
          <div className="included-scene__backplate included-scene__backplate--two" aria-hidden="true" />
          <div className="included-scene__panel">
            <div className="included-scene__light" aria-hidden="true" />
            <div className="included-scene__grid" aria-hidden="true" />

            <header className="included-scene__header">
              <p>{services.eyebrow}</p>
              <h2 id="services-heading">{services.heading}</h2>
              <span>{services.intro}</span>
            </header>

            <div className="included-model" aria-hidden="true">
              <span className="included-model__halo included-model__halo--one" />
              <span className="included-model__halo included-model__halo--two" />
              <span className="included-model__core">A&amp;A</span>
              <span className="included-model__satellite included-model__satellite--one">UAE</span>
              <span className="included-model__satellite included-model__satellite--two">5D</span>
              <span className="included-model__satellite included-model__satellite--three">✓</span>
            </div>

            <div className="included-scene__lists">
              {columns.map((column, columnIndex) => (
                <ul key={columnIndex}>
                  {column.map((item, itemIndex) => (
                    <li key={item} style={{ "--item-delay": `${(columnIndex * midpoint + itemIndex) * 60}ms` } as CSSProperties}>
                      <span aria-hidden="true">✓</span>
                      <p>{item}</p>
                    </li>
                  ))}
                </ul>
              ))}
            </div>

            <p className="included-scene__note">{services.note}</p>
          </div>
        </Inview>
      </div>
    </section>
  );
};
