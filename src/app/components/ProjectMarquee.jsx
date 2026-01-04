"use client";

import Marquee from "react-fast-marquee";
import Image from "next/image";

const projects = [
  {
    title: "E-commerce Platform",
    category: "Web App",
    image: "/projects/project-1.jpg",
  },
  {
    title: "SaaS Dashboard",
    category: "UI / UX",
    image: "/projects/project-2.jpg",
  },
  {
    title: "Landing Page",
    category: "Marketing",
    image: "/projects/project-3.jpg",
  },
  {
    title: "Mobile App",
    category: "React Native",
    image: "/projects/project-4.jpg",
  },
  {
    title: "Mobile App",
    category: "React Native",
    image: "/projects/project-4.jpg",
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
          <div className="relative overflow-hidden rounded-2xl bg-black">
            <Image
              src={project.image}
              alt={project.title}
              width={400}
              height={300}
              className="w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          {/* Text */}
          <div className="mt-4">
            <h3 className="text-lg font-semibold text-black">
              {project.title}
            </h3>
            <p className="text-sm text-black/50">
              {project.category}
            </p>
          </div>
        </div>
      ))}
    </Marquee>
  );
}
