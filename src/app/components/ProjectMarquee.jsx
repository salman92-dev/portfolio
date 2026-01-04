"use client";

import Marquee from "react-fast-marquee";
import Image from "next/image";

const projects = [
  {
    title: "E-commerce Platform",
    category: "Web App",
    image: "/images/ecommerce.png",
  },
  {
    title: "SaaS Dashboard",
    category: "UI / UX",
    image: "/images/saas.png",
  },
  {
    title: "E-commerce Platform",
    category: "Web App",
    image: "/images/ecommerce.png",
  },
  {
    title: "Landing Page",
    category: "Marketing",
    image: "/images/landing-page.png",
  },
  {
    title: "SaaS Dashboard",
    category: "UI / UX",
    image: "/images/saas.png",
  },
];

export default function ProjectMarquee() {
  return (
    <Marquee
      speed={150}
      direction={"left"}
      pauseOnHover={true}
      gradient={false}
      className="!w-full"
    >
      {projects.map((project, idx) => (
        <div
          key={idx}
          className="mt-12 mx-4 w-[300px] group cursor-pointer"
        >
          {/* Card */}
          <div className="relative overflow-hidden rounded-2xl">
            <Image
              src={project.image}
              alt={project.title}
              width={400}
              height={300}
              className="w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Overlay */}
            {/* <div className="absolute inset-0 bg-/4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" /> */}
          </div>
        </div>
      ))}
    </Marquee>
  );
}
