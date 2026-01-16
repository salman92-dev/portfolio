"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { BiUpArrow } from "react-icons/bi";
import Image from "next/image";

export default function ApproachSection() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const philosophies = [
    {
      title: "Perfection",
      description:
        "From pixel-perfect designs to flawless code, every aspect of our projects is crafted with care to ensure the highest standards of quality.",
      icon: (
        <motion.img
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 4, // speed (lower = faster)
          ease: "linear",
        }}
          src="/images/perfection.webp"
          alt="Perfection"
          className="w-16 h-16"
          width={40}
          height={40}
        />
      ),
    },
    {
      title: "Innovative",
      description:
        "We stay ahead of design trends, offering modern and visually impactful solutions that set your brand apart.",
      icon: (
        <motion.img
        animate={{ rotate: -360 }}
        transition={{
          repeat: Infinity,
          duration: 4, // speed (lower = faster)
          ease: "linear",
        }}
          src="/images/innovative.webp"
          alt="Innovative"
          className="w-16 h-16 rotate-[-15deg]"
          width={40}
          height={40}
        />
      ),
    },
    {
      title: "Expertise",
      description:
        "We are passionate about integrating the latest technologies and trends, including interactive animations and mobile-first strategies.",
      icon: (
        <motion.img
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 4, // speed (lower = faster)
          ease: "linear",
        }}
          src="/images/expertise.webp"
          alt="Expertise"
          className="w-16 h-16 rotate-[-15deg]"
          width={40}
          height={40}
        />
      ),
    },
    {
      title: "Full-Cycle services",
      description:
        "From web design to development, branding, SEO, and UX/UI, we provide a full range of services that cover all your digital needs.",
      icon: (
        <motion.img
        animate={{ rotate: -360 }}
        transition={{
          repeat: Infinity,
          duration: 4, // speed (lower = faster)
          ease: "linear",
        }}
          src="/images/cycle.webp"
          alt="Full-Cycle services"
          className="w-16 h-16 rotate-[-15deg]"
          width={40}
          height={40}
        />
      ),
    },
    {
      title: "Client Success",
      description:
        "Our clients consistently see improved engagement, conversion rates, and business growth.",
      icon: (
        <motion.img
          animate={{
            rotate: 360,
          }}
          transition={{
            rotate: {
              repeat: Infinity,
              duration: 5,
              ease: "linear",
            },
          }}
          src="/images/success.webp"
          alt="Client Success"
          className="w-16 h-16 rotate-[-15deg]"
          width={40}
          height={40}
        />
      ),
    },
  ];

  return (
    <section className="py-8 md:py-20 relative">
      <div className="2xl:container mx-auto md:px-10 lg:px-16 px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-16">
          <h2 className="text-5xl md:text-6xl font-bold syne leading-[130%] text-gray-900 mb-6 md:mb-0">
            Approach and <br /> Philosophy
          </h2>

          <ul className="text-gray-700 space-y-2 text-lg md:space-y-1 funnel md:text-left mt-2">
            <li>Design</li>
            <li>Development</li>
            <li>Mastership</li>
          </ul>

          <button className="cursor-pointer ml-0 md:ml-6 mt-8 md:mt-2 px-6 py-2 border-2 border-black funnel rounded-full flex items-center justify-center text-black text-xl hover:bg-black hover:text-white transition-colors"
           onClick={()=> window.location = "/contact"}
          >
            {`Let's`} Chat
          </button>
        </div>

        {/* Philosophy Items */}
        <div className="mt-12">
          {philosophies.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="flex flex-col md:flex-row md:items-center md:space-x-12 py-12 md:py-24 border-t-2 border-black cursor-pointer"
              animate={{ opacity: hoveredIndex === null || hoveredIndex === index ? 1 : 0.3 }}
            >
              {/* Icon */}
              <div className="flex-shrink-0 md:min-w-sm mb-6 md:mb-0">{item.icon}</div>

              {/* Text */}
              <div className="flex flex-col md:flex-row md:gap-12">
                <h3 className="text-3xl md:text-4xl font-bold syne text-black mb-2">
                  {item.title}
                </h3>
                <p className="text-black/80 tracking-[1px] text-xl funnel leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Divider */}
        <div className="border-t-2 border-black" />
      </div>
    </section>
  );
}
