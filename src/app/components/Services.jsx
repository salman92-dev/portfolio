"use client";

import { motion } from "framer-motion";
import { services } from "../data/servicesData";

export default function Services() {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-5xl syne text-gray-900">
            Services I Provide
          </h2>
          <p className="mt-4 text-gray-600 funnel text-xl max-w-2xl mx-auto">
            I build modern, scalable, and user-focused web experiences from design to deployment.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                }}
                whileHover={{rotate:-3, scale:1.1}}
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow duration-300 max-md:sticky top-30"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#9f8be7] text-white mb-6">
                  <Icon size={24} />
                </div>

                <h3 className="text-2xl syne text-gray-900 mb-3">
                  {service.title}
                </h3>

                <p className="text-gray-600 funnel text-base md:text-lg  leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
