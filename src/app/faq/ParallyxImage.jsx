"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import CircularText from "../components/circle-text";
import Image from "next/image";

const ParallaxBg = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <section className="relative w-full 2xl:container mx-auto px-4 sm:px-6 md:px-8 lg:px-20 pb-18">
        <div className="w-fit mx-auto md:absolute max-md:mb-28 -top-22 right-10  md:right-28 z-10 backdrop-blur-md md:bg-white/40 rounded-full border-2 border-white">
        <Image src="/images/wings.webp" alt="wings"  width={300} height={300} className="w-24 top-[27%] left-14 md:w-[50%] absolute z-100 md:top-[25%] md:left-[25%]" />
            <CircularText
            text=" ReactJS* NextJS* Tailwind* Framer*"
            onHover="speedUp"
            spinDuration={15}
            className="max-md:mx-auto max-sm:bg-black"
            />
        </div>
      <div
        ref={ref}
        className="relative h-[40vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] xl:h-[90vh] 2xl:h-screen overflow-hidden rounded-4xl"
      >
        {/* Background */}
        <motion.div
          style={{ 
            y,
            backgroundPosition: 'center',
            backgroundSize: '120% 150%',
          }}
          className="
            absolute -inset-8
            bg-[url('/images/vr-glasses.png')]
            will-change-transform
            bg-center
            bg-no-repeat
          "
        />

        {/* Optional: Overlay for better text readability if you add content */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
      </div>
    </section>
  );
};

export default ParallaxBg;