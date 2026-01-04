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
        <span key={idx} className="mx-6">
          <span dangerouslySetInnerHTML={{ __html: item }} />
        </span>
      ))}
    </Marquee>
  );
}
