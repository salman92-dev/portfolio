"use client";

import Marquee from "react-fast-marquee";

export default function FastMarquee({
  items,
  speed = 80,
  direction = "left",
  pauseOnHover,
  gradient = false,
  className = "",
}) {
  return (
    <Marquee
      speed={speed}
      direction={direction}
      pauseOnHover={pauseOnHover}
      gradient={gradient}
      className={className}
    >
      {items.map((item, idx) => (
        <div key={idx} className="mx-8">
          {item}
        </div>
      ))}
    </Marquee>
  );
}
