"use client";

import Marquee from "react-fast-marquee";
import Image from "next/image";
import { motion } from "framer-motion";

const tech = [
  { alt: "HTML5", src: "/images/html.png" },
  { alt: "CSS3", src: "/images/css.png" },
  { alt: "JavaScript", src: "/images/js.webp" },
  { alt: "Tailwind", src: "/images/tailwind.jpg" },
  { alt: "React JS", src: "/images/react.png" },
  { alt: "Next JS", src: "/images/next.png" },
  { alt: "Framer", src: "/images/framer.png" },
  { alt: "Git", src: "/images/git.png" },
  { alt: "HTML5", src: "/images/html.png" },
  { alt: "CSS3", src: "/images/css.png" },
  { alt: "JavaScript", src: "/images/js.webp" },
  { alt: "Tailwind", src: "/images/tailwind.jpg" },
  { alt: "React JS", src: "/images/react.png" },
  { alt: "Next JS", src: "/images/next.png" },
  { alt: "Framer", src: "/images/framer.png" },
  { alt: "Git", src: "/images/git.png" },
];

const TechStack = () => {
  return (
    <section className="py-6 md:py-12">
      <Marquee
        speed={90}
        gradient={false}
        className="!w-full py-6 overflow-hidden"
      >
        {tech.map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.15, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="w-40 h-40 shadow-md mx-4 bg-white p-8 rounded-3xl flex flex-col gap-2  items-center justify-center"
          >
            <Image
              src={item.src}
              alt={item.alt}
              width={48}
              height={48}
              className="transition-opacity w-16"
            />
          <h5 className="funnel text-lg text-black text-center">{item.alt}</h5>
          </motion.div>
        ))}
      </Marquee>
    </section>
  );
};

export default TechStack;
