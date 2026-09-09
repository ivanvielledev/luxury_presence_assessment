import { useState } from "react";
import { Drawer, DrawerTrigger, DrawerClose, DrawerContent } from "./ui/drawer";
import { Button } from "./ui/button";
import { MenuIcon, X, ArrowRight, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const ROOT_MENU = [
  { id: "home", title: "Home", path: "/" },
  { id: "listings", title: "Listings", path: "#" },
  { id: "lets-move", title: "Let's Move", path: "#" },
  { id: "about-us", title: "About Us", path: "#" },
];

const MenuDrawer = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen} swipeDirection="right">
      <DrawerTrigger
        render={
          <Button
            variant="ghost"
            size="icon-lg"
            className="cursor-pointer text-neutral-800 hover:text-amber-800 transition-colors"
            aria-label="Open Navigation Menu"
          >
            <MenuIcon className="size-6 md:size-8" />
          </Button>
        }
      />

      <DrawerContent
        style={{ borderRadius: 0 }}
        className="w-full sm:max-w-sm lg:max-w-md bg-[#FAF8F5] border-l border-neutral-200/80 p-6 sm:p-8 flex flex-col justify-between h-full shadow-2xl"
      >
        <div className="flex flex-col gap-10">
          {/* Header Bar */}
          <div className="flex items-center justify-between pb-6 border-b border-neutral-200">
            <div className="flex flex-col">
              <span className="font-serif text-lg font-light tracking-wider text-neutral-900">MARCI METZGER</span>
              <span className="text-[10px] font-semibold tracking-[0.25em] text-amber-800 uppercase">Real Estate</span>
            </div>

            <DrawerClose
              render={
                <Button
                  variant="ghost"
                  size="icon-lg"
                  className="cursor-pointer text-neutral-600 hover:text-neutral-900 hover:bg-neutral-200/50 rounded-full transition-colors"
                  aria-label="Close Navigation Menu"
                >
                  <X className="size-6" />
                </Button>
              }
            />
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col gap-6 pt-2">
            {ROOT_MENU.map((menu) => (
              <Link
                key={menu.id}
                to={menu.path}
                onClick={() => setIsOpen(false)}
                className="group flex items-center justify-between py-2 text-2xl font-serif text-neutral-800 hover:text-amber-800 transition-colors duration-300"
              >
                <span className="tracking-wide font-light">{menu.title}</span>
                <ArrowRight className="w-5 h-5 text-amber-800 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
              </Link>
            ))}
          </nav>
        </div>

        {/* Footer Contact Info */}
        <div className="flex flex-col gap-6 pt-8 border-t border-neutral-200">
          <div className="flex flex-col gap-3 text-xs text-neutral-600">
            <a href="tel:7750000000" className="flex items-center gap-3 hover:text-amber-800 transition-colors">
              <div className="w-8 h-8 rounded-full bg-white border border-neutral-200 flex items-center justify-center text-amber-800 shrink-0">
                <Phone className="w-3.5 h-3.5" />
              </div>
              <span className="font-medium tracking-wider">(775) 000-0000</span>
            </a>

            <a
              href="mailto:marci@metzgerhomes.com"
              className="flex items-center gap-3 hover:text-amber-800 transition-colors"
            >
              <div className="w-8 h-8 rounded-full bg-white border border-neutral-200 flex items-center justify-center text-amber-800 shrink-0">
                <Mail className="w-3.5 h-3.5" />
              </div>
              <span className="font-medium tracking-wider">marci@metzgerhomes.com</span>
            </a>
          </div>

          <p className="text-[10px] uppercase tracking-widest text-neutral-400">Pahrump, NV • Nye County</p>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default MenuDrawer;
