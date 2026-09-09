import { motion, type Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import service1Img from "@/assets/service1.webp";
import service2Img from "@/assets/service2.webp";
import service3Img from "@/assets/service3.webp";

const SERVICES = [
  {
    id: "residential-sales",
    title: "Real Estate Done Right",
    description:
      "Nervous about your property adventure? Don't be. Whether you're getting ready to buy or sell your residence, looking at investment properties, or just curious about the markets, our team ensures you get the best experience possible!",
    image: service1Img,
  },
  {
    id: "luxury-estates",
    title: "Commercial & Residential",
    description:
      "Large or small, condo or mansion, we can find it and get at the price that's right. Fixer-uppers? Luxury? We can help with all of it! We live, work, and play in this community. Happy to help you find where to put you hard-earned dollars.",
    image: service2Img,
  },
  {
    id: "investment-consulting",
    title: "Rely on Expertise",
    description:
      "If you have questions about affordability, credit, and loan options, trust us to connect you with the right people to get the answers you need in a timely fashion. We make sure you feel confident and educated every step of the way.",
    image: service3Img,
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const Services = () => {
  return (
    <section className="bg-neutral-950 text-white py-20 md:py-28 w-full border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col gap-12 md:gap-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-white/10">
          <div className="flex flex-col gap-2">
            <span className="font-sans text-xs font-semibold tracking-[0.3em] uppercase text-primary">
              Capabilities
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-wider uppercase text-white">
              Our Services
            </h2>
          </div>
          <p className="text-neutral-400 text-sm max-w-md font-sans leading-relaxed">
            Decades of local expertise and personalized luxury service across Pahrump and surrounding areas.
          </p>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10"
        >
          {SERVICES.map((service) => (
            <motion.div key={service.id} variants={cardVariants} className="group flex flex-col cursor-pointer">
              {/* Aspect Ratio Preserved Image Frame */}
              <div className="relative w-full aspect-[16/10] rounded-lg overflow-hidden bg-neutral-900 mb-6 border border-white/10">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-neutral-950/20 group-hover:bg-transparent transition-colors duration-500" />
              </div>

              {/* Editorial Header Row */}
              <div className="flex items-baseline justify-between mb-3">
                <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-amber-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
              </div>

              {/* Title & Description */}
              <h3 className="font-serif text-xl sm:text-2xl font-normal text-white group-hover:text-amber-400 transition-colors duration-300 mb-2">
                {service.title}
              </h3>

              <p className="text-neutral-400 text-sm leading-relaxed font-sans font-light">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
