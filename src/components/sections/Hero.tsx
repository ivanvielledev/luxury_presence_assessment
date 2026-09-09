import heroImg from "@/assets/hero.webp";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { Phone } from "lucide-react";
import { useRef } from "react";
import { Button } from "../ui/button";

const Hero = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] },
    },
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <motion.div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroImg})`,
          y: bgY,
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/45 z-10" />

      {/* Hero Content with Entrance & Scroll Parallax */}
      <motion.div
        style={{ y: textY, opacity }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-20 max-w-4xl text-center text-white p-6 md:p-12 flex flex-col items-center justify-center"
      >
        {/* Eyebrow Label */}
        <motion.p
          variants={itemVariants}
          className="font-sans text-xs md:text-sm font-semibold tracking-[0.25em] uppercase text-amber-200/90 mb-4 drop-shadow-sm"
        >
          Marci Metzger &bull; The Ridge Realty Group
        </motion.p>

        {/* Primary Headline */}
        <motion.h1
          variants={itemVariants}
          className="font-serif text-5xl sm:text-6xl md:text-8xl font-light tracking-wide uppercase leading-tight mb-6 drop-shadow-md"
        >
          Pahrump Realtor
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="font-sans text-base md:text-lg font-light text-neutral-200 max-w-xl mb-8 leading-relaxed"
        >
          Guiding you home with luxury service and local expertise in Pahrump.
        </motion.p>

        {/* Action Button */}
        <motion.div variants={itemVariants}>
          <Button
            size="lg"
            className="bg-amber-600 hover:bg-amber-700 text-white font-sans text-base font-medium tracking-wide px-8 py-6 rounded-md shadow-lg transition-all hover:scale-105 duration-200"
          >
            <Phone className="mr-2 h-5 w-5" />
            Call Now
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};
export default Hero;
