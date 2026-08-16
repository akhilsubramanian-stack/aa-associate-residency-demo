import Image from "next/image";
import { Inview } from "@/components/animation/springs/in-view";
import type { homeContent } from "@/data/mocks/home";

export interface AgenciesProps {
  agencies: (typeof homeContent)["agencies"];
}

export const Agencies = ({ agencies }: AgenciesProps) => {
  const sliderItems = [...agencies.items, ...agencies.items];

  return (
    <section className="agencies-section" aria-labelledby="agencies-heading">
      <div className="mx-auto max-w-shell px-5 py-20 sm:px-8 lg:py-24">
        <Inview
          tag="header"
          mode="once"
          from={{ opacity: 0, transform: "translateY(22px)" }}
          to={{ opacity: 1, transform: "translateY(0px)" }}
          className="agencies-header"
        >
          <h2 id="agencies-heading" className="mobile-section-heading">We work closely with all <br className="mobile-heading-break" />Government Agencies</h2>
          <p>{agencies.intro}</p>
        </Inview>

        <div className="agencies-slider" aria-label="Government agency partners">
          <ul className="agencies-slider__track">
            {sliderItems.map((agency, index) => (
              <li
                className="agencies-slider__item"
                key={`${agency.name}-${index}`}
                aria-hidden={index >= agencies.items.length}
              >
                <Image
                  src={agency.image}
                  alt={index < agencies.items.length ? `${agency.name} logo` : ""}
                  width={200}
                  height={100}
                  sizes="(max-width: 640px) 160px, 200px"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
