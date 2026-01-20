"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function FeaturesSection() {
  return (
    <section className="2xl:container mx-auto mb-16 md:mb-24  lg:mb-36 overflow-hidden">
      <div className="flex flex-col-reverse md:flex-row-reverse px-6 md:px-10 lg:px-16 items-center gap-12 max-md:gap-12">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full md:w-[40%]"
        >
          <h2 className="text-4xl md:text-6xl font-semibold text-black leading-tight syne">
            Top-notch features,
            <br /> build for you
          </h2>

          {/* Pills */}
          <div className="flex gap-4 mt-8 flex-wrap">
            {["Animations", "Plugins", "Services"].map((item, i) => (
              <motion.span
                key={i}
                whileHover={{ scale: 1.05 }}
                className="px-5 py-2 text-black rounded-full border border-black text-sm cursor-pointer"
              >
                {item}
              </motion.span>
            ))}
          </div>

          <p className="mt-8 text-base md:text-xl funnel text-black/60 max-w-xl leading-relaxed">
            Rayo template packed with smooth animations, modern design tools
            and clean code. {`It's`} a flexible, future-proof template {`that's`} easy
            to customize and a joy to use.
          </p>
        </motion.div>

        {/* RIGHT IMAGES */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative w-full md:w-[60%]"
        >
          {/* Tablet */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src="/images/features.png"
              alt="Tablet"
              width={800}
              height={600}
              className="rounded-2xl"
            />
          </motion.div>

         
        </motion.div>

      </div>
    </section>
  );
}

