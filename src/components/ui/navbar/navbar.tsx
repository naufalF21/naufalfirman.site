"use client";

import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "../avatar";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "../navigation-menu";

import { Button } from "../button";
import { useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { MobileNav } from "./mobile-nav";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 left-0 z-50 bg-white">
      <MobileNav isOpen={isOpen} handleCloseMenu={handleCloseMenu} />
      <div className="flex justify-center border-b px-6 py-3 lg:px-0">
        <div className="w-full lg:w-[950px]">
          <div className="flex items-center justify-between">
            {/* avatar */}
            <Link href="/">
              <Avatar className="outline-primary size-9 hover:outline-2">
                <AvatarImage
                  src="https://ckn96wqsiq.ufs.sh/f/VyAcii40YBsbK3kXRzPLuUogRrjaAS42MweWxqNH9FhtOCkT"
                  alt="My Profile"
                />
                <AvatarFallback>NF</AvatarFallback>
              </Avatar>
            </Link>
            {/* navigation menu */}
            <NavigationMenu>
              <NavigationMenuList className="hidden gap-6 lg:flex">
                {["home", "work", "about"].map((item) => (
                  <NavigationMenuItem key={item} className="capitalize">
                    <Link
                      href={`/${item === "home" ? "" : "#" + item}`}
                      legacyBehavior
                      passHref
                    >
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                      >
                        {item}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
            {/* resume button */}
            <Link href="https://ckn96wqsiq.ufs.sh/f/VyAcii40YBsbGlyhPGssHJKIaYh9P3VM2WFbCR6dgLE1XzDT">
              <Button className="hidden cursor-pointer lg:block">Resume</Button>
            </Link>
            <button className="lg:hidden" onClick={() => setIsOpen(true)}>
              <Icon icon="mage:dash-menu" width="30" height="30" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export { Navbar };
