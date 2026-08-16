"use client";

import { useState, type CSSProperties, type PointerEvent } from "react";
import { Inview } from "@/components/animation/springs/in-view";
import type { homeContent } from "@/data/mocks/home";

export interface FaqProps { faq: (typeof homeContent)["faq"] }

type FaqStyle = CSSProperties & { "--faq-rx": string; "--faq-ry": string };
const rest: FaqStyle = { "--faq-rx": "0deg", "--faq-ry": "0deg" };

export const Faq = ({ faq }: FaqProps) => {
  const [open, setOpen] = useState(0);
  const [style, setStyle] = useState<FaqStyle>(rest);

  const move = (event: PointerEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    setStyle({ "--faq-rx": `${(0.5-y)*2.5}deg`, "--faq-ry": `${(x-0.5)*3.5}deg` });
  };

  return (
    <section className="faq-section" id="faq" aria-labelledby="faq-heading">
      <div className="mx-auto max-w-shell px-5 py-20 sm:px-8 lg:py-28">
        <Inview tag="div" mode="once" from={{opacity:0,transform:"translateY(34px)"}} to={{opacity:1,transform:"translateY(0px)"}} className="faq-scene" style={style} onPointerMove={move} onPointerLeave={()=>setStyle(rest)}>
          <div className="faq-scene__shadow" aria-hidden="true" />
          <div className="faq-panel">
            <header className="faq-header">
              <p>{faq.eyebrow}</p>
              <h2 id="faq-heading">{faq.heading}</h2>
              <span>{faq.intro}</span>
            </header>
            <div className="faq-list">
              {faq.items.map((item,index) => {
                const expanded = open === index;
                return (
                  <article className={`faq-item ${expanded ? "is-open" : ""}`} key={item.question}>
                    <button type="button" aria-expanded={expanded} aria-controls={`faq-answer-${index}`} onClick={()=>setOpen(expanded ? -1 : index)}>
                      <span>{item.question}</span><i aria-hidden="true" />
                    </button>
                    <div id={`faq-answer-${index}`} className="faq-answer" hidden={!expanded}><p>{item.answer}</p></div>
                  </article>
                );
              })}
            </div>
            <div className="faq-panel__edge" aria-hidden="true" />
          </div>
        </Inview>
      </div>
    </section>
  );
};
