"use client";

import { Icon } from "@iconify/react/dist/iconify.js";
import { ContentLayout } from "~/components/layouts/content-layout";
import { Button } from "../button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="bg-primary text-white">
      <ContentLayout className="gap-0 pt-0">
        <div className="flex items-center justify-between py-6">
          <span className="text-sm font-normal">
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
      </ContentLayout>
    </div>
  );
};

export { Footer };
