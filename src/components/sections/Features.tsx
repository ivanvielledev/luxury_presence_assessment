import { motion, type Variants } from "framer-motion";
import featureImg1 from "@/assets/feature1.webp";
import featureImg2 from "@/assets/feature2.webp";
import featureImg3 from "@/assets/feature3.webp";

const FEATURES_LIST = [
  {
    id: "feature1",
    image: featureImg1,
    title: "Top Residential Sales Last 5 Years",
    description:
      "We helped nearly 90 clients in 2021, and closed 28.5 million in sales! Our team works hard everyday to grow and learn, so that we may continue to excel in our market. Our clients deserve our best, & we want to make sure our best is better every year.",
  },
  {
    id: "feature2",
    image: featureImg2,
    title: "Don't Just List it...",
    description:
      "Get it SOLD! We exhaust every avenue to ensure our listings are at the fingertips of every possible buyer, getting you top dollar for your home.",
  },
  {
    id: "feature3",
    image: featureImg3,
    title: "Guide to Buyers",
    description:
      "Nobody knows the market like we do. Enjoy having a pro at your service. Market analysis, upgrades lists, contractors on speed dial, & more!",
  },
];

const rowVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.215, 0.61, 0.355, 1],
    },
  },
};

const Features = () => {
  return (
    <section className="bg-background py-12 lg:py-16 px-4 sm:px-6 w-full overflow-hidden">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-8 lg:gap-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-2 text-center"
        >
          <span className="font-sans text-xs font-semibold tracking-[0.3em] uppercase text-primary">
            Proven Results
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-light tracking-widest uppercase">Get It Sold</h2>
          <div className="w-12 h-0.5 bg-amber-600/60 mt-1" />
        </motion.div>

        {/* Feature List */}
        <div className="w-full flex flex-col gap-8">
          {FEATURES_LIST.map((feature, index) => (
            <motion.div
              key={feature.id}
              variants={rowVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="w-full"
            >
              {/* Responsive Container */}
              <motion.div
                initial="rest"
                whileHover="hover"
                animate="rest"
                className="relative w-full h-auto lg:h-105 min-h-[360px] overflow-hidden rounded-lg cursor-pointer group shadow-xl bg-neutral-900 flex flex-col justify-end lg:block"
              >
                {/* Background Image */}
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="absolute inset-0 w-full h-full object-cover object-center contrast-[1.02]"
                  style={{ imageRendering: "-webkit-optimize-contrast" }}
                />

                {/* Always-visible Dark Overlay Gradient on non-lg screens */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent lg:hidden" />

                {/* Badge Indicator on lg screens (Fades on hover) */}
                <div className="hidden lg:block absolute bottom-4 left-4 z-10 bg-black/60 backdrop-blur-md px-4 py-2 rounded border border-white/10 group-hover:opacity-0 transition-opacity duration-300">
                  <h3 className="font-serif text-base lg:text-lg text-white font-light">{feature.title}</h3>
                </div>

                {/* Static text content for mobile and tablet (< lg) */}
                <div className="relative z-10 p-6 flex flex-col justify-end text-left lg:hidden text-white">
                  <span className="font-sans text-xs font-semibold tracking-[0.25em] text-amber-400 uppercase mb-1">
                    0{index + 1}
                  </span>
                  <h3 className="font-serif text-xl font-light tracking-wide mb-2">{feature.title}</h3>
                  <p className="font-sans text-xs text-neutral-200 leading-relaxed font-light">{feature.description}</p>
                </div>

                {/* Slide Overlay - Enabled strictly on `lg` screens */}
                <motion.div
                  variants={{
                    rest: { x: "100%" },
                    hover: { x: "0%" },
                  }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="hidden lg:flex absolute inset-y-0 right-0 w-1/2 bg-neutral-950/90 backdrop-blur-md p-8 flex-col justify-center items-start text-left z-20"
                >
                  <h3 className="font-serif text-xl lg:text-2xl font-light tracking-wide text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="font-sans text-xs lg:text-sm text-neutral-300 leading-relaxed font-light">
                    {feature.description}
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
