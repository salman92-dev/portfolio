"use client";
import { useMemo, useRef } from "react";
import { useScroll } from "framer-motion";
import FadeWord from "./FadeWord";

export default function FadeText2({
  text,
  className = "",
  highlightWords = ["Next.js", "Figma"],
}) {
  const words = useMemo(() => text.split(" "), [text]);
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 85%", "end 40%"],
  });

  return (
    <div ref={ref} className={className}>
      {words.map((word, idx) => (
        <FadeWord
          key={idx}
          word={word}
          index={idx}
          total={words.length}
          scrollYProgress={scrollYProgress}
          highlightWords={highlightWords}
        />
      ))}
    </div>
  );
}
