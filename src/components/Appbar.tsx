import headerImg from "@/assets/header.webp";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import MenuDrawer from "./MenuDrawer";

const Appbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const { scrollY } = useScroll();

  // Framer Motion's built-in hook replaces raw scroll event listeners
  useMotionValueEvent(scrollY, "change", (current) => {
    const previous = scrollY.getPrevious() ?? 0;
    const diff = current - previous;

    if (current < 10) {
      setIsVisible(true);
    } else if (diff > 0) {
      // Scrolling down
      setIsVisible(false);
    } else if (diff < 0) {
      // Scrolling up
      setIsVisible(true);
    }
  });

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={isVisible ? "visible" : "hidden"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="sticky top-0 z-50 border-b border-border shadow-lg bg-background"
    >
      <div className="min-h-50 w-full max-w-7xl mx-auto flex items-center justify-center gap-x-8 md:gap-x-0 p-4">
        <div className="flex-1 flex justify-center items-center">
          <Link to="/">
            <img src={headerImg} alt="Header image for the website." className="object-cover size-auto" />
          </Link>
        </div>

        <MenuDrawer />
      </div>
    </motion.header>
  );
};

export default Appbar;
