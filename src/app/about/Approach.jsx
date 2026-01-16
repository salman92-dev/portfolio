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
        <Image
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
        <Image
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
        <Image
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
        <Image
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
        <Image
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
    <section className="py-20 bg-gray-50 relative">
      <div className="2xl:container mx-auto md:px-16 px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-16">
          <h2 className="text-5xl md:text-6xl font-bold syne leading-[130%] text-gray-900 mb-6 md:mb-0">
            Approach and <br /> philosophy
          </h2>

          <ul className="text-gray-700 space-y-2 text-lg md:text-base md:space-y-1 funnel md:text-left">
            <li>Design</li>
            <li>Development</li>
            <li>Mastership</li>
          </ul>

          <button className="ml-0 md:ml-6 mt-4 md:mt-0 px-6 py-2 border border-black rounded-full flex items-center justify-center text-black font-medium hover:bg-black hover:text-white transition-colors">
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
              <div className="flex-shrink-0 min-w-sm mb-4 md:mb-0">{item.icon}</div>

              {/* Text */}
              <div className="flex flex-col md:flex-row gap-12">
                <h3 className="text-2xl md:text-3xl font-bold syne text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Divider */}
        <div className="border-t-2 border-black" />
      </div>

      {/* Scroll-up button */}
      <button className="fixed bottom-6 right-6 bg-black text-white p-3 rounded-full shadow-lg hover:bg-gray-800 transition-colors">
        <BiUpArrow size={24} />
      </button>
    </section>
  );
}
