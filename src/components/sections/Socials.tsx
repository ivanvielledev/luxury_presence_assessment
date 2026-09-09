import { FaFacebook, FaInstagram, FaLinkedin, FaYelp } from "react-icons/fa";

const SOCIAL_LINKS = [
  {
    id: "facebook",
    icon: <FaFacebook className="size-8 sm:size-12 md:size-16" />,
    destination: "https://facebook.com",
  },
  {
    id: "instagram",
    icon: <FaInstagram className="size-8 sm:size-12 md:size-16" />,
    destination: "https://instagram.com",
  },
  {
    id: "linkedin",
    icon: <FaLinkedin className="size-8 sm:size-12 md:size-16" />,
    destination: "https://linkedin.com",
  },
  { id: "yelp", icon: <FaYelp className="size-8 sm:size-12 md:size-16" />, destination: "https://yelp.com" },
];

const Socials = () => {
  return (
    <section className="bg-background py-12 md:py-20 w-full border-t border-b border-border">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-center">
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 md:gap-14">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.id}
              href={link.destination}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-primary transition-colors duration-300 transform hover:scale-105"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Socials;
