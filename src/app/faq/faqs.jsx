"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "What services do you offer?",
    a: "I build modern, fast, and responsive websites using Next.js, Tailwind CSS, and animations. I also convert Figma designs into clean production code.",
  },
  {
    q: "How long does a project take?",
    a: "Most projects take between 1–3 weeks depending on complexity, features, and feedback cycles.",
  },
  {
    q: "Do you work with businesses of all sizes?",
    a: "Yes, I work with startups, small businesses, and growing companies worldwide.",
  },
  {
    q: "Can you redesign my existing website?",
    a: "Absolutely. We specialize in website redesigns to improve user experience, modernize your brand, and optimize performance.",
  },
  {
    q: "Do you provide ongoing support and maintenance?",
    a: "Yes! I offer ongoing website maintenance and performance monitoring.",
  },
  {
    q: "How do we get started?",
    a: "Getting started is easy! Simply reach out via the contact form.",
  },
];

export default function FAQ() {
  const [active, setActive] = useState(null);
  const [hovered, setHovered] = useState(null);

  return (
    <section className="mx-auto py-4 md:py-10">
      <div className="border-t-2 border-black">
        {faqs.map((item, i) => {
          const isOpen = active === i;
          const isDimmed = hovered !== null && hovered !== i;

          return (
            <motion.div
              key={i}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              animate={{ opacity: isDimmed ? 0.3 : 1 }}
              transition={{ duration: 0.2 }}
              className="border-b-2 border-black"
            >
              {/* Question */}
              <button
                onClick={() => setActive(isOpen ? null : i)}
                className="w-full flex items-start justify-between py-10 text-left cursor-pointer"
              >
                <span className="text-2xl md:text-3xl font-semibold text-black syne">
                  {item.q}
                </span>

                <motion.span
                  animate={{ rotate: isOpen ? 225 : 0 }}
                  transition={{ duration: 0.25 }}
                  className="text-4xl font-light text-black"
                >
                  <Plus size={24}/>
                </motion.span>
              </button>

              {/* Answer */}
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="pb-8 text-xl funnel text-gray-700">
                      {item.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
