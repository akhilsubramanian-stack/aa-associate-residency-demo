import Image from "next/image";
import { Inview } from "@/components/animation/springs/in-view";
import type { homeContent } from "@/data/mocks/home";

export interface AwardsProps {
  awards: (typeof homeContent)["awards"];
}

export const Awards = ({ awards }: AwardsProps) => {
  const sliderItems = [...awards.items, ...awards.items];

  return (
    <section className="awards-slider-section" aria-label="A&A Associate awards">
      <div className="mx-auto max-w-shell px-5 py-7 sm:px-8 lg:py-10">
        <Inview
          tag="div"
          mode="once"
          from={{ opacity: 0, transform: "translateY(16px)" }}
          to={{ opacity: 1, transform: "translateY(0px)" }}
        >
          <div className="awards-slider" aria-label="A&A Associate awards">
            <ul className="awards-slider__track">
              {sliderItems.map((award, index) => (
                <li
                  className="awards-slider__item"
                  key={`${award.name}-${index}`}
                  aria-hidden={index >= awards.items.length}
                >
                  <Image
                    src={award.image}
                    alt={index < awards.items.length ? `${award.name} logo` : ""}
                    width={285}
                    height={110}
                    sizes="(max-width: 640px) 180px, 230px"
                    quality={100}
                  />
                </li>
              ))}
            </ul>
          </div>
        </Inview>
      </div>
    </section>
  );
};
