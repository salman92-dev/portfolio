"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { services } from "../data/servicesData";

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation
      gsap.from(headingRef.current, {
        opacity: 0,
        y: 50,
        duration: 0.5,
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%",
          end: "top 50%",
          scrub: 1,
        },
      });

      // Cards staggered animation with rotation and scale
      cardsRef.current.forEach((card, i) => {
        gsap.from(card, {
          opacity: 0,
          y: 100,
          rotateX: -15,
          scale: 0.9,
          duration: 0.5,
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            end: "top 60%",
            scrub: 1,
          },
        });

        // Parallax effect on scroll
        gsap.to(card, {
          y: -30,
          scrollTrigger: {
            trigger: card,
            start: "top bottom",
            end: "bottom top",
            scrub: 2,
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">

        {/* Heading */}
        <div ref={headingRef} className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl syne text-gray-900 font-bold">
            My Services
          </h2>
          <p className="mt-6 text-gray-600 funnel text-lg md:text-xl max-w-3xl mx-auto">
            I build modern, scalable, and user-focused web experiences from design to deployment.
          </p>
        </div>

        {/* Cards - Bento Grid Layout */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                ref={(el) => (cardsRef.current[index] = el)}
                className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-purple-200 overflow-hidden"
                style={{
                  transformStyle: "preserve-3d",
                  perspective: "1000px",
                }}
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
                
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

                {/* Decorative element */}
                <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br from-[#9f8be7]/10 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
              </div>
            );
          })}
        </div>

      </div>

      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-purple-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl" />
      </div>
    </section>
  );
}