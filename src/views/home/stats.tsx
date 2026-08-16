"use client";

import Image from "next/image";
import { useState, type CSSProperties, type PointerEvent } from "react";
import { Inview } from "@/components/animation/springs/in-view";
import { StatCounter } from "./stat-counter";
import type { homeContent } from "@/data/mocks/home";

export interface StatsProps {
  stats: (typeof homeContent)["stats"];
}

type StatsStyle = CSSProperties & {
  "--stats-rx": string;
  "--stats-ry": string;
  "--stats-x": string;
  "--stats-y": string;
};

const baseStatsStyle: StatsStyle = {
  "--stats-rx": "0deg",
  "--stats-ry": "0deg",
  "--stats-x": "50%",
  "--stats-y": "50%",
};

export const Stats = ({ stats }: StatsProps) => {
  const [style, setStyle] = useState<StatsStyle>(baseStatsStyle);

  const handlePointerMove = (event: PointerEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    setStyle({
      "--stats-rx": `${(0.5 - y) * 3.5}deg`,
      "--stats-ry": `${(x - 0.5) * 5}deg`,
      "--stats-x": `${x * 100}%`,
      "--stats-y": `${y * 100}%`,
    });
  };

  return (
    <section aria-labelledby="stats-heading" className="authority-section">
      <div className="mx-auto max-w-shell px-5 py-20 sm:px-8 lg:py-28">
        <Inview
          tag="article"
          mode="once"
          from={{ opacity: 0, transform: "translateY(45px) scale(.985)" }}
          to={{ opacity: 1, transform: "translateY(0px) scale(1)" }}
          config={{ tension: 180, friction: 26 }}
          className="authority-scene"
          style={style}
          onPointerMove={handlePointerMove}
          onPointerLeave={() => setStyle(baseStatsStyle)}
        >
          <div className="authority-scene__shadow" aria-hidden="true" />
          <div className="authority-scene__frame">
            <Image
              src="/assets/sections/dubai-corporate-night-v2.jpg"
              alt="Dubai skyline viewed from a premium executive lounge"
              fill
              unoptimized
              sizes="(max-width: 640px) 100vw, 88rem"
              className="authority-scene__image"
            />
            <div className="authority-scene__veil" aria-hidden="true" />
            <div className="authority-scene__light" aria-hidden="true" />
            <div className="authority-scene__skyline" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>

            <div className="authority-scene__content">
              <header>
                <p>{stats.eyebrow}</p>
                <h2 id="stats-heading" className="mobile-section-heading">UAE&rsquo;s Largest <br className="mobile-heading-break" />Corporate Service Provider</h2>
                <span>{stats.intro}</span>
              </header>

              <ul>
                {stats.items.map((stat, index) => (
                  <StatCounter key={stat.label} stat={stat} index={index} />
                ))}
              </ul>
            </div>

            <div className="authority-scene__seal" aria-hidden="true">
              <span>A&amp;A</span>
              <small>UAE · 10 YEARS</small>
            </div>
            <div className="authority-scene__edge" aria-hidden="true" />
          </div>
        </Inview>
      </div>
    </section>
  );
};
