"use client";

import { motion } from "framer-motion";
import { services } from "../data/servicesData";

export default function Services() {
  // Framer Motion variants
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section
      id="services"
      className="2xl:container mx-auto relative px-6 md:px-10 lg:px-16 mb-12 md:mb-24 lg:mb-36"
    >
      <div className="relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <motion.h2 className="text-4xl md:text-6xl syne text-gray-900 font-bold"
          initial={{y:30,opacity:0}}
          whileInView={{y:0,opacity:1}}
          viewport={{once:true}}
          transition={{
            duration:0.4,
            ease:"linear"
          }}
          >
            My Services
          </motion.h2>
          <p className="mt-6 text-black/80 funnel text-lg md:text-xl max-w-3xl mx-auto">
            I build modern, scalable, and user-focused web experiences from design to deployment.
          </p>
        </motion.div>

        {/* Cards - Bento Grid Layout with stagger */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr"
        >
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={index}
                variants={item}
                className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-purple-200 max-sm:sticky top-20"
              >

                {/* Content */}
                <div className="relative z-10">
                  <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-gradient-to-br from-[#9f8be7] to-[#b59ff0] text-white mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                    <Icon size={28} />
                  </div>

                  <h3 className="text-2xl md:text-3xl syne text-gray-900 mb-4 font-semibold group-hover:text-[#9f8be7] transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 funnel text-base md:text-lg leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
