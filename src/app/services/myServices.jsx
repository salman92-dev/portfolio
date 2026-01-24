"use client";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const rowVariants = {
  hidden: {
    y: 40,
    opacity: 0,
    filter: "blur(6px)",
  },
  show: {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1], // smooth agency easing
    },
  },
};

const listVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const listItemVariants = {
  hidden: { opacity: 0, x: -6 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};


const services = [ { title: "Design", description: "We create visually compelling designs that enhance user experience. From UI/UX design to stunning websites, mobile apps, and print materials, we make sure your brand’s visuals resonate with your audience.", list: [ "UI/UX", "Web Design", "Applications", "Print Design", "Packaging", "Motion", "3D Modeling", ], }, { title: "Development", description: "We build high-performance websites and applications using modern technologies. Our solutions are designed to be scalable and functional for optimal performance.", list: [ "Frontend", "Interactions", "Backend", "E-commerce", "Mobile Apps", "Maintenance", "Support", ], }, { title: "Branding", description: "From logo design to comprehensive brand strategies, we ensure your business stands out with a unique visual identity and consistent messaging across all touchpoints.", list: [ "Brand Strategy", "Logo Design", "Guidelines", "Visual Identity", "Rebranding", ], }, { title: "Marketing", description: "We develop and execute tailored digital marketing strategies. From SEO and content marketing to social media and paid campaigns, we help you reach the right audience.", list: [ "Strategy", "Social Media", "SEO", "Optimization", "Email", "Campaigns", ], }, ];


const MyServices = () => {
  return (
    <section className="2xl:container mx-auto px-4 sm:px-6 md:px-12 mb-16 md:mb-24">
      <div className="max-w-8xl mx-auto">
        <motion.div
          className="grid grid-cols-1 border-t-2 border-black"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{y:70, opacity : 0, backdropFilter :"blur(5px)"}}
              whileInView={{y:0, opacity:1, backdropFilter :"blur(0)" }}
              transition={{
                duration:2
              }}
              viewport={{once:true}}
              className="
                border-b-2 border-black/80
                py-8 md:py-12
                flex flex-col gap-6
                lg:flex-row lg:justify-between lg:items-start
                transition-colors duration-300
              "
            >
              {/* Title */}
              <motion.h3
                className="
                  text-4xl sm:text-5xl md:text-6xl xl:text-7xl 2xl:text-8xl
                  text-black funnel font-semibold
                  w-full lg:w-[55%]
                "
                whileHover={{ x: 6 }}
                transition={{ duration: 0.3 }}
              >
                {service.title}
              </motion.h3>

              {/* Description */}
              <p
                className="
                  text-black text-lg funnel
                  w-full lg:w-[27%]
                "
              >
                {service.description}
              </p>

              {/* List */}
              <motion.ul
                className="
                  grid grid-cols-2 sm:grid-cols-3
                  lg:grid-cols-1
                  gap-y-2 gap-x-4
                  w-full lg:w-[10%]
                "
                variants={listVariants}
              >
                {service.list.map((item, i) => (
                  <motion.li
                    key={i}
                    variants={listItemVariants}
                    className="text-black funnel !list-disc flex items-center gap-2 text-base"
                  >
                    <span className="w-1.5 h-1.5 bg-black rounded-full" />
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MyServices;
