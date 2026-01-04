"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const ParallaxImg = () => {
  const ref = useRef(null);

  // Track scroll relative to this section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Control parallax strength here
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <section
      ref={ref}
      className="relative h-[70vh] overflow-hidden"
    >
      <motion.img
        src="/images/texh.jpg"
        alt="Parallax Image"
        style={{ y }}
        className="absolute inset-0 h-[120%] w-full object-cover"
      />

      {/* Optional overlay */}
      <div className="absolute inset-0 bg-black/10" />
    </section>
  );
};

export default ParallaxImg;
