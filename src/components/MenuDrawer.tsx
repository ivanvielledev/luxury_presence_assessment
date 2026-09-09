import { useState } from "react";
import { Drawer, DrawerTrigger, DrawerClose, DrawerContent } from "./ui/drawer";
import { Button } from "./ui/button";
import { MenuIcon, X } from "lucide-react";

const MenuDrawer = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen} swipeDirection="right">
      <DrawerTrigger
        render={
          <Button variant="ghost" size="icon-lg" className="cursor-pointer">
            <MenuIcon className="size-6 md:size-8" />
          </Button>
        }
      />

      <DrawerContent style={{ borderRadius: 0 }} className="w-full sm:max-w-sm lg:max-w-md p-4">
        <div className="text-right">
          <DrawerClose
            render={
              <Button variant="ghost" size="icon-lg" className="cursor-pointer">
                <X className="size-6 md:size-8" />
              </Button>
            }
          />
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default MenuDrawer;
