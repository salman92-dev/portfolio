"use client";
import { useState, useEffect, useRef } from "react";
import ScrollReveal from "./ScrollrevealText";
const About = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const sectionHeight = rect.height;
      
      // Calculate how much of the section is visible
      const sectionTop = rect.top;
      const sectionBottom = rect.bottom;
      
      // Start revealing when section enters viewport, complete when it's centered
      const start = windowHeight * 0.7;
      const end = windowHeight / 2;
      
      if (sectionTop > start) {
        setScrollProgress(0);
      } else if (sectionTop <= end) {
        setScrollProgress(1);
      } else {
        const progress = (start - sectionTop) / (start - end);
        setScrollProgress(Math.max(0, Math.min(1, progress)));
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const words = "We craft digital experiences that inspire and engage your audience through innovative design and cutting-edge technology".split(" ");

  return (
    <section ref={sectionRef} id="about" className="2xl:container mx-auto px-6 md:px-12 lg:px-10 pb-12">
      <div className="">
        <h2 
          className="text-lg md:text-xl lg:text-xl text-[#9f8be7] mb-8 transition-all duration-300"
          style={{
            opacity: scrollProgress,
            transform: `translateY(${(1 - scrollProgress) * 20}px)`
          }}
        >
            About Me
        </h2>
        <p className="text-3xl md:text-6xl syne text-black max-w-5xl !leading-[120%]">
          {words.map((word, index) => {
            const isHighlighted = word === "inspire" || word === "engage";
            const wordProgress = Math.max(0, Math.min(1, (scrollProgress * words.length  - index) / 1));
            
            return (
              <span
                key={index}
                className={`inline-block transition-all duration-300 ${isHighlighted ? 'text-[#9f8be7]' : ''}`}
                style={{
                  opacity: wordProgress,
                  transform: `translateY(${(1 - wordProgress) * 30}px)`,
                  filter: `blur(${(1 - wordProgress) * 5}px)`
                }}
              >
                {word}&nbsp;
              </span>
            );
          })}
        </p>
        </div>
        <div className="flex flex-wrap max-md:gap-6 items-center justify-between mt-12">
            <div>
                <h2 className="text-black text-4xl md:text-6xl syne mb-2 text-center">50+</h2>
                <p className="text-black/70 text-center">Projects Completed</p>
            </div>
            <div>
                <h2 className="text-black text-4xl md:text-6xl syne mb-2 text-center">6+</h2>
                <p className="text-black/70 text-center">Core Technologies</p>
            </div>
            <div>
                <h2 className="text-black text-4xl md:text-6xl syne mb-2 text-center">20+</h2>
                <p className="text-black/70 text-center">UI Animations</p>
            </div>
            <div>
                <h2 className="text-black text-4xl md:text-6xl syne mb-2 text-center">100%</h2>
                <p className="text-black/70 text-center">Learning Driven</p>
            </div>
        </div>
    </section>
    );
};
export default About;