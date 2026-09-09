import profileImg from "@/assets/profile.webp";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";

const About = () => {
  return (
    <section className="bg-neutral-900 text-white py-20 px-6 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col lg:flex-row items-center justify-center gap-10 md:gap-16 max-w-5xl mx-auto min-h-[60vh]"
      >
        {/* Profile Image Column */}
        <div className="shrink-0">
          <div className="w-52 h-52 md:w-72 md:h-72 rounded-full overflow-hidden border-2 border-amber-200/90 p-0.5">
            <img
              src={profileImg}
              alt="Marci Metzger profile photo"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>

        {/* Content Details Column */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-4 max-w-xl">
          <h2 className="font-serif text-3xl md:text-5xl tracking-widest font-light uppercase text-neutral-100">
            Marci Metzger
          </h2>

          <h3 className="font-sans text-xs md:text-sm tracking-[0.25em] font-medium uppercase text-amber-200/90">
            Realtor for Nearly 3 Decades
          </h3>

          <p className="text-neutral-300 text-sm md:text-base leading-relaxed font-light">
            With nearly 3 decades of real estate expertise, I specialize in helping clients navigate the luxury market
            with confidence and ease. Whether you’re buying your dream property or selling a cherished home in Pahrump,
            my commitment is to deliver personalized service, deep local market insights, and seamless results from
            start to finish.
          </p>

          <a
            href="tel:2069196886"
            className="inline-flex items-center gap-2 font-sans text-sm md:text-base tracking-widest text-neutral-300 hover:text-amber-400 transition-colors duration-200 mt-2"
          >
            <Phone className="w-4 h-4 text-amber-500" />
            <span>206-919-6886</span>
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
