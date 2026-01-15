"use client";
import { motion } from "framer-motion";
import { useMemo } from "react";

export default function FadeText({
  text,
  className = "",
  highlightWords = ["Next.js", "Figma"],
}) {
  const words = useMemo(() => text.split(" "), [text]);

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.07,
      },
    },
  };

  const child = {
    hidden: { opacity: 0, y: 6 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className={className}
    >
      {words.map((word, idx) => {
        const isHighlighted = highlightWords.includes(word);

        return (
          <motion.span
            key={idx}
            variants={child}
            className={
              isHighlighted
                ? "font-semibold text-gray-900"
                : "text-inherit"
            }
          >
            {word}{" "}
          </motion.span>
        );
      })}
    </motion.div>
  );
}
