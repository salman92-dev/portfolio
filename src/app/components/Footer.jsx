"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Footer() {
  return (
    <footer className="2xl:container mx-auto px-6 py-10 rounded-3xl">
        <motion.h3 className="text-center text-[15vw] 2xl:text-[15rem] syne text-black !leading-[100%] mb-8"
        initial={{ opacity: 0, scale: 0.8, backdropFilter: 'blur(15px)' }}
        whileInView={{ opacity: 1, scale: 1, backdropFilter: 'blur(0px)' }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        >
            rayostudio
        </motion.h3>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {/* LEFT */}
        <motion.div variants={item} className="bg-white rounded-3xl p-8">
          <ul className="space-y-4 text-3xl font-semibold">
            {["Home", "About us", "Works", "Services", "Insights", "Contact"].map(
              (link, i) => (
                <motion.li
                  key={i}
                  whileHover={{ x: 6 }}
                  className="text-black syne cursor-pointer flex items-center gap-3"
                >
                  {link}
                </motion.li>
              )
            )}
          </ul>

          <div className="flex max-sm:flex-col gap-6 text-sm mt-16 text-gray-500">
            <span className="hover:underline cursor-pointer">
              Privacy Policy →
            </span>
            <span className="hover:underline cursor-pointer">
              Terms & conditions →
            </span>
          </div>
        </motion.div>

        {/* CENTER */}
        <motion.div
          variants={item}
          className="rounded-3xl flex flex-col gap-6"
        >
          <ContactCard text="sa0587676@gmail.com" />
          <ContactCard text="+92 3241161920" />

          <div className="bg-white rounded-2xl p-6 mt-auto">
            <h3 className="text-2xl md:text-4xl text-black syne mb-18">
              Subscribe to our insights:
            </h3>

            <div className="flex items-center text-black border-b-2 focus:border-black border-gray-400">
              <input
                placeholder="Your Email"
                className="bg-transparent w-full py-2 outline-none"
              />
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ArrowUpRight />
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div variants={item} className="bg-white rounded-3xl p-8 relative">

          <h3 className="text-3xl syne text-black mb-6">Ecosystem</h3>
          <ul className="space-y-3 text-lg">
            {[
              "Dribbble",
              "Behance",
              "Instagram",
              "Github",
              "Codepen",
              "Figma Community",
            ].map((item, i) => (
              <motion.li
                key={i}
                whileHover={{ x: 6 }}
                className="cursor-pointer text-black"
              >
                {item}
              </motion.li>
            ))}
          </ul>

          <p className="max-md:mt-6 mt-12 text-sm text-gray-500">
            Salman © 2025
          </p>
        </motion.div>
      </motion.div>
    </footer>
  );
}

function ContactCard({ text }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white text-black rounded-2xl p-6 text-lg cursor-pointer"
    >
      ✦ {text}
    </motion.div>
  );
}
