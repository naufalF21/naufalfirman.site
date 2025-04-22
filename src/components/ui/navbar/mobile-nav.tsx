"use client";

import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";

const MobileNav = ({
  isOpen,
  handleCloseMenu,
}: {
  isOpen: boolean;
  handleCloseMenu: () => void;
}) => {
  const transition = {
    duration: 0.4,
    type: "tween",
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed top-0 z-50 h-full w-full bg-white"
          animate={{ y: 0 }}
          initial={{ y: "100%" }}
          exit={{ y: "100%" }}
          transition={transition}
        >
          <div className="flex h-full flex-col">
            <div className="z-30 flex justify-end px-6 py-4">
              <button onClick={handleCloseMenu} className="cursor-pointer">
                <Icon icon="mage:minus" width="30" height="30" />
              </button>
            </div>
            <ul className="-mt-12 flex h-full flex-col justify-center gap-6">
              {["home", "work", "about"].map((item) => (
                <li key={item} className="border-b px-6 pb-6">
                  <Link href={`/#${item}`}>
                    <button
                      onClick={handleCloseMenu}
                      className="text-4xl font-bold capitalize"
                    >
                      {item}
                    </button>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export { MobileNav };
