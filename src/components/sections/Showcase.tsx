import type { PanInfo } from "framer-motion";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

import car1Img from "@/assets/car1.webp";
import car2Img from "@/assets/car2.webp";
import car3Img from "@/assets/car3.webp";
import car4Img from "@/assets/car4.webp";
import car5Img from "@/assets/car5.webp";
import car6Img from "@/assets/car6.webp";

const SHOWCASE_ITEMS = [
  { id: "slide-1", image: car1Img, title: "Modern Luxury Villa", location: "Pahrump, NV", price: "$1,250,000" },
  { id: "slide-2", image: car2Img, title: "Scenic Mountain Estate", location: "Mountain Views", price: "$2,100,000" },
  { id: "slide-3", image: car3Img, title: "Exclusive Desert Residence", location: "Desert Oasis", price: "$980,000" },
  {
    id: "slide-4",
    image: car4Img,
    title: "Custom Architectural Home",
    location: "Gated Community",
    price: "$1,650,000",
  },
  { id: "slide-5", image: car5Img, title: "Pahrump Valley Retreat", location: "Pahrump Valley", price: "$850,000" },
  { id: "slide-6", image: car6Img, title: "High-End Resort Living", location: "Prime Location", price: "$1,890,000" },
];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
    scale: 0.95,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? "100%" : "-100%",
    opacity: 0,
    scale: 0.95,
  }),
};

const Showcase = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  const currentIndex = ((page % SHOWCASE_ITEMS.length) + SHOWCASE_ITEMS.length) % SHOWCASE_ITEMS.length;

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    const swipeThreshold = 50;
    if (info.offset.x < -swipeThreshold) {
      paginate(1);
    } else if (info.offset.x > swipeThreshold) {
      paginate(-1);
    }
  };

  return (
    <section className="bg-background  py-16 md:py-24 w-full overflow-hidden relative select-none">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 sm:w-125 h-80 sm:h-75 bg-amber-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 flex flex-col gap-8 md:gap-10">
        {/* Header & Controls */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-1.5"
          >
            <span className="font-sans text-xs font-semibold tracking-[0.3em] uppercase text-primary">
              Featured Properties
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl font-light tracking-widest uppercase text-black">
              Property Showcase
            </h2>
          </motion.div>

          {/* Nav Controls + Helper Indicator */}
          <div className="flex flex-col items-start sm:items-end gap-2">
            <div className="flex items-center gap-3">
              <button
                onClick={() => paginate(-1)}
                aria-label="Previous Slide"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/15 bg-white/5 backdrop-blur-md flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 active:scale-95"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => paginate(1)}
                aria-label="Next Slide"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/15 bg-white/5 backdrop-blur-md flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 active:scale-95"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Instruction Banner */}
            <div className="flex items-center gap-1.5 text-[11px] font-medium tracking-wider uppercase text-neutral-400">
              <span>Use arrows or drag to navigate</span>
            </div>
          </div>
        </div>

        {/* Swipeable Display Card */}
        <div className="relative w-full h-105 sm:h-125 md:h-145 rounded-2xl overflow-hidden bg-neutral-900 border border-white/10 shadow-2xl touch-pan-y cursor-grab active:cursor-grabbing">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={page}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.25 },
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={handleDragEnd}
              className="absolute inset-0 w-full h-full group"
            >
              {/* Image */}
              <img
                src={SHOWCASE_ITEMS[currentIndex].image}
                alt={SHOWCASE_ITEMS[currentIndex].title}
                draggable={false}
                className="w-full h-full object-cover object-center pointer-events-none"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-neutral-950 via-neutral-950/20 to-transparent opacity-90 pointer-events-none" />

              {/* Minimal Luxury Price Tag */}
              <div className="absolute top-5 right-5 sm:top-6 sm:right-6 bg-neutral-950/70 backdrop-blur-md border border-white/15 px-4 py-2 rounded-sm pointer-events-none flex items-center gap-2">
                <span className="text-[10px] font-semibold tracking-widest text-neutral-400 uppercase">OFFERED AT</span>
                <span className="font-serif text-sm sm:text-base tracking-wider text-amber-400 font-normal">
                  {SHOWCASE_ITEMS[currentIndex].price}
                </span>
              </div>

              {/* Bottom Card Content */}
              <div className="absolute bottom-0 inset-x-0 p-6 md:p-10 flex flex-col gap-2 pointer-events-none">
                <span className="text-amber-500 text-xs font-medium tracking-widest uppercase">
                  {SHOWCASE_ITEMS[currentIndex].location}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-light text-white leading-tight">
                  {SHOWCASE_ITEMS[currentIndex].title}
                </h3>

                <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-white/80 group-hover:text-amber-400 transition-colors duration-300 mt-2">
                  <span>View Details</span>
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dynamic Progress Bar */}
        <div className="w-full bg-white/10 h-1 rounded-full overflow-hidden mt-2">
          <motion.div
            className="h-full bg-primary"
            animate={{ width: `${((currentIndex + 1) / SHOWCASE_ITEMS.length) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>
    </section>
  );
};

export default Showcase;
