"use client";
import { motion, useTransform } from "framer-motion";

export default function FadeWord({
  word,
  index,
  total,
  scrollYProgress,
  highlightWords,
}) {
const maxWindow = 0.85;
const start = (index / total) * maxWindow;
const end = start + (1 - maxWindow);


  const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1]);
  const y = useTransform(scrollYProgress, [start, end], [12, 0]);

  const isHighlighted = highlightWords.includes(word);

  return (
    <motion.span
      style={{ opacity, y }}
      className={
        isHighlighted
          ? "font-semibold text-gray-900"
          : "text-inherit"
      }
    >
      {word}{" "}
    </motion.span>
  );
}
