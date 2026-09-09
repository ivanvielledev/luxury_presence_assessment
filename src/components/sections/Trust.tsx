import ridgeLogo from "@/assets/ridgeLogo.webp";
import equalLogo from "@/assets/equalLogo.webp";
import realtorLogo from "@/assets/realtorLogo.webp";
import pahrumpLogo from "@/assets/pahrumpLogo.webp";

const LOGOS = [
  { id: "ridge", name: "The Ridge Logo", logo: ridgeLogo },
  { id: "equal", name: "Equal Housing Opportunity Logo", logo: equalLogo },
  { id: "realtor", name: "Realtor Logo", logo: realtorLogo },
  { id: "pahrump", name: "Pahrump Valley Logo", logo: pahrumpLogo },
];

const Trust = () => {
  return (
    <section className="bg-white py-12 md:py-16 border-t border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Tagline */}
        <p className="text-center font-sans text-xs font-semibold tracking-[0.25em] text-neutral-400 uppercase mb-8 md:mb-10">
          Trusted Industry Partners & Affiliations
        </p>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 items-center justify-items-center">
          {LOGOS.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-center p-2 transition-transform duration-300 hover:scale-105 cursor-pointer"
            >
              <img
                src={item.logo}
                alt={item.name}
                className="h-12 md:h-16 w-auto object-contain mix-blend-multiply opacity-80 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trust;
