import { FaFacebook, FaInstagram, FaLinkedin, FaYelp } from "react-icons/fa";
import { Link } from "react-router-dom";

const SOCIAL_LINKS = [
  { id: "facebook", icon: <FaFacebook className="text-white size-5" />, destination: "facebook.com" },
  { id: "instagram", icon: <FaInstagram className="text-white size-5" />, destination: "instagram.com" },
  { id: "linkedin", icon: <FaLinkedin className="text-white size-5" />, destination: "linkedin.com" },
  { id: "yelp", icon: <FaYelp className="text-white size-5" />, destination: "yelp.com" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="z-50 bg-foreground border-t border-muted-foreground">
      <div className="min-h-65 w-full max-w-7xl mx-auto flex flex-col items-center justify-center p-4 gap-8">
        {/* Socials */}
        <div className="flex items-center gap-x-4 px-4 py-1.5">
          {SOCIAL_LINKS.map((link) => (
            <Link key={link.id} to={link.destination}>
              {link.icon}
            </Link>
          ))}
        </div>

        <p className="text-[10.5px] sm:text-sm text-muted-foreground tracking-wider font-mono">
          COPYRIGHT &copy; {currentYear} MARCI METZGER - ALL RIGHTS RESERVED
        </p>

        <div className="h-0.5 bg-muted-foreground w-full max-w-20" />
      </div>
    </footer>
  );
};

export default Footer;
