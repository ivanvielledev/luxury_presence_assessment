import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Features from "@/components/sections/Features";
import Hero from "@/components/sections/Hero";
import Map from "@/components/sections/Map";
import Search from "@/components/sections/Search";
import Services from "@/components/sections/Services";
import Showcase from "@/components/sections/Showcase";
import Socials from "@/components/sections/Socials";
import Trust from "@/components/sections/Trust";

const Home = () => {
  return (
    <div className="flex-1 flex flex-col">
      <Hero />
      <About />
      <Features />
      <Search />
      <Trust />
      <Showcase />
      <Services />
      <Socials />
      <Contact />
      <Map />
    </div>
  );
};

export default Home;
