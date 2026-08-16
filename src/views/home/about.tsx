"use client";

import { useState, type PointerEvent } from "react";
import type { CSSProperties } from "react";
import type { homeContent } from "@/data/mocks/home";

export interface AboutProps {
  about: (typeof homeContent)["about"];
}

type TiltStyle = CSSProperties & {
  "--media-rx": string;
  "--media-ry": string;
  "--media-x": string;
  "--media-y": string;
};

export const About = ({ about }: AboutProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [tilt, setTilt] = useState<TiltStyle>({
    "--media-rx": "0deg",
    "--media-ry": "0deg",
    "--media-x": "50%",
    "--media-y": "50%",
  });

  const handlePointerMove = (event: PointerEvent<HTMLElement>) => {
    if (isPlaying) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;

    setTilt({
      "--media-rx": `${(0.5 - y) * 5}deg`,
      "--media-ry": `${(x - 0.5) * 7}deg`,
      "--media-x": `${x * 100}%`,
      "--media-y": `${y * 100}%`,
    });
  };

  const resetTilt = () => {
    setTilt({
      "--media-rx": "0deg",
      "--media-ry": "0deg",
      "--media-x": "50%",
      "--media-y": "50%",
    });
  };

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="residency-story bg-background"
    >
      <div className="mx-auto max-w-shell px-5 py-16 sm:px-8 lg:py-24">
        <article
          className={`residency-story__scene ${isPlaying ? "is-playing" : ""}`}
          style={tilt}
          onPointerMove={handlePointerMove}
          onPointerLeave={resetTilt}
        >
          <div className="residency-story__shadow" aria-hidden="true" />
          <div className="residency-story__card">
            {!isPlaying ? (
              <>
                <div className="residency-story__image" aria-hidden="true" />
                <div className="residency-story__wash" aria-hidden="true" />
                <div className="residency-story__glow" aria-hidden="true" />
                <div className="residency-story__copy">
                  <p className="residency-story__eyebrow">{about.eyebrow}</p>
                  <h2 id="about-heading" className="mobile-section-heading">
                    A&amp;A ASSOCIATE:<br className="mobile-heading-break" /> The Fastest Route to<br className="mobile-heading-break" /> UAE Residency
                  </h2>
                  {about.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                <button
                  type="button"
                  className="residency-story__play"
                  onClick={() => setIsPlaying(true)}
                  aria-label={`Play video: ${about.videoTitle}`}
                >
                  <span className="residency-story__play-ring" aria-hidden="true" />
                  <span className="residency-story__play-icon" aria-hidden="true" />
                  <span className="residency-story__play-label">Watch the story</span>
                </button>
                <div className="residency-story__edge" aria-hidden="true" />
              </>
            ) : (
              <>
                <iframe
                  className="residency-story__video"
                  src={`https://www.youtube-nocookie.com/embed/${about.videoId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
                  title={about.videoTitle}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
                <button
                  type="button"
                  className="residency-story__close"
                  onClick={() => setIsPlaying(false)}
                  aria-label="Close video"
                >
                  Close video ×
                </button>
              </>
            )}
          </div>
        </article>
      </div>
    </section>
  );
};
