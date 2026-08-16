import { Inview } from "@/components/animation/springs/in-view";
import type { Stat } from "@/data/mocks/home";

export interface StatCounterProps {
  stat: Stat;
  index: number;
}

export const StatCounter = ({ stat, index }: StatCounterProps) => {
  return (
    <Inview
      tag="li"
      mode="once"
      from={{ opacity: 0, transform: "translateY(20px)" }}
      to={{ opacity: 1, transform: "translateY(0px)" }}
      config={{ tension: 200, friction: 24 }}
      delayIn={index * 90}
    >
      <div className="authority-stat">
        <p className="authority-stat__value">
          {stat.prefix ?? ""}
          {stat.value.toLocaleString("en-US")}
          {stat.suffix}
        </p>
        <p className="authority-stat__label">{stat.label}</p>
      </div>
    </Inview>
  );
};
