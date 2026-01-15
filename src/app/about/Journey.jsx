"use client";
import { motion } from "framer-motion";

const Journey = () => {
  return (
    <section className="container mx-auto px-6 max-w-6xl py-20">
      
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="syne text-3xl md:text-4xl mb-10 text-black"
      >
        My Journey
      </motion.h2>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="space-y-8 max-w-3xl funnel text-lg text-gray-700"
      >
        <p>
          I started my journey focusing on frontend fundamentals and gradually
          moved into modern frameworks like Next.js, building real-world projects
          for businesses and startups.
        </p>

        <p>
          Over time, I specialized in translating Figma designs into clean,
          production-ready code with a strong focus on performance and UX.
        </p>
      </motion.div>

    </section>
  );
};

export default Journey;
