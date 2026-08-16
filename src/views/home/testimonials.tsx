"use client";

import { useState, type CSSProperties, type PointerEvent } from "react";
import { Inview } from "@/components/animation/springs/in-view";
import type { homeContent } from "@/data/mocks/home";

export interface TestimonialsProps {
  testimonials: (typeof homeContent)["testimonials"];
}

type VideoStyle = CSSProperties & {
  "--video-rx": string;
  "--video-ry": string;
  "--video-x": string;
  "--video-y": string;
};

const restingStyle: VideoStyle = {
  "--video-rx": "0deg",
  "--video-ry": "0deg",
  "--video-x": "50%",
  "--video-y": "50%",
};

export const Testimonials = ({ testimonials }: TestimonialsProps) => {
  const [playing, setPlaying] = useState<string | null>(null);
  const [styles, setStyles] = useState<Record<string, VideoStyle>>({});

  const handleMove = (id: string, event: PointerEvent<HTMLElement>) => {
    if (playing === id) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    setStyles((current) => ({
      ...current,
      [id]: {
        "--video-rx": `${(0.5 - y) * 5}deg`,
        "--video-ry": `${(x - 0.5) * 7}deg`,
        "--video-x": `${x * 100}%`,
        "--video-y": `${y * 100}%`,
      },
    }));
  };

  return (
    <section className="client-stories" aria-labelledby="client-stories-heading">
      <div className="mx-auto max-w-shell px-5 py-20 sm:px-8 lg:py-28">
        <Inview
          tag="header"
          mode="once"
          from={{ opacity: 0, transform: "translateY(24px)" }}
          to={{ opacity: 1, transform: "translateY(0px)" }}
          className="client-stories__header"
        >
          <p>{testimonials.eyebrow}</p>
          <h2 id="client-stories-heading" className="mobile-section-heading">The Entrepreneur&rsquo;s First <br className="mobile-heading-break" />Choice for Business Setup</h2>
          <span>{testimonials.intro}</span>
        </Inview>

        <div className="client-stories__grid">
          {testimonials.items.map((item, index) => (
            <Inview
              tag="article"
              mode="once"
              from={{ opacity: 0, transform: "translateY(36px)" }}
              to={{ opacity: 1, transform: "translateY(0px)" }}
              delayIn={index * 120}
              className={`client-video ${playing === item.videoId ? "is-playing" : ""}`}
              style={styles[item.videoId] ?? restingStyle}
              onPointerMove={(event) => handleMove(item.videoId, event)}
              onPointerLeave={() => setStyles((current) => ({ ...current, [item.videoId]: restingStyle }))}
            >
              <div className="client-video__shadow" aria-hidden="true" />
              <div className="client-video__screen">
                {playing === item.videoId ? (
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${item.videoId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
                    title={`${item.name} client testimonial`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                ) : (
                  <button
                    type="button"
                    className="client-video__preview"
                    style={{ backgroundImage: `url(https://i.ytimg.com/vi/${item.videoId}/maxresdefault.jpg)` }}
                    onClick={() => setPlaying(item.videoId)}
                    aria-label={`Play ${item.name}'s client testimonial`}
                  >
                    <span className="client-video__wash" aria-hidden="true" />
                    <span className="client-video__play" aria-hidden="true"><i /></span>
                    <span className="client-video__watch">Watch their story</span>
                  </button>
                )}
                <div className="client-video__edge" aria-hidden="true" />
              </div>
              <div className="client-video__caption">
                <div>
                  <strong>{item.name}</strong>
                  <span>{item.country}</span>
                </div>
                <small>{item.flag} Client story</small>
              </div>
            </Inview>
          ))}
        </div>
      </div>
    </section>
  );
};
