"use client";

import { Icon } from "@iconify/react/dist/iconify.js";
import { Button } from "../button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="bg-primary text-white lg:flex lg:justify-center">
      <div className="lg:w-[950px]">
        <div className="flex items-center justify-between px-6 py-6 lg:px-0">
          <span className="text-xs font-normal md:text-sm">
            Created by Naufal Firman © 2025
          </span>
          <Button
            size="icon"
            variant="link"
            className="hover:text-primary text-white hover:bg-white [&_svg:not([class*='size-'])]:size-6"
            onClick={scrollToTop}
          >
            <Icon icon="mage:arrow-up" width="24" height="24" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export { Footer };
