"use client";

import Image from "next/image";
import { useState, type CSSProperties, type PointerEvent } from "react";
import { Inview } from "@/components/animation/springs/in-view";
import type { homeContent } from "@/data/mocks/home";

export interface AwardsProps {
  awards: (typeof homeContent)["awards"];
}

type AwardStyle = CSSProperties & {
  "--award-rx": string;
  "--award-ry": string;
  "--award-x": string;
  "--award-y": string;
};

const baseStyle: AwardStyle = {
  "--award-rx": "0deg",
  "--award-ry": "0deg",
  "--award-x": "50%",
  "--award-y": "50%",
};

export const Awards = ({ awards }: AwardsProps) => {
  const [style, setStyle] = useState<AwardStyle>(baseStyle);

  const handlePointerMove = (event: PointerEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    setStyle({
      "--award-rx": `${(0.5 - y) * 3}deg`,
      "--award-ry": `${(x - 0.5) * 4}deg`,
      "--award-x": `${x * 100}%`,
      "--award-y": `${y * 100}%`,
    });
  };

  return (
    <section className="awards-section" aria-labelledby="awards-heading">
      <div className="mx-auto max-w-shell px-5 py-20 sm:px-8 lg:py-28">
        <Inview
          tag="div"
          mode="once"
          from={{ opacity: 0, transform: "translateY(38px)" }}
          to={{ opacity: 1, transform: "translateY(0px)" }}
          className="awards-stage"
          style={style}
          onPointerMove={handlePointerMove}
          onPointerLeave={() => setStyle(baseStyle)}
        >
          <div className="awards-stage__back" aria-hidden="true" />
          <div className="awards-stage__panel">
            <div className="awards-stage__glow" aria-hidden="true" />
            <header className="awards-stage__header">
              <p>{awards.eyebrow}</p>
              <h2 id="awards-heading">{awards.heading}</h2>
              <span>{awards.intro}</span>
            </header>

            <ul className="awards-grid">
              {awards.items.map((award, index) => (
                <li className={`award-plaque award-plaque--${index + 1}`} key={award.name}>
                  <div className="award-plaque__logo">
                    <Image
                      src={award.image}
                      alt={`${award.name} logo`}
                      width={285}
                      height={110}
                      sizes="(max-width: 640px) 140px, 160px"
                    />
                  </div>
                  <div>
                    <strong>{award.name}</strong>
                    <p>{award.detail}</p>
                  </div>
                  <small>{award.year}</small>
                </li>
              ))}
            </ul>
            <div className="awards-stage__edge" aria-hidden="true" />
          </div>
        </Inview>
      </div>
    </section>
  );
};
