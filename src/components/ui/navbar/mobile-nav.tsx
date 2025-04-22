"use client";

import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { mobileNavAnimation } from "./_animations";

const MobileNav = ({
  isOpen,
  handleCloseMenu,
}: {
  isOpen: boolean;
  handleCloseMenu: () => void;
}) => {
  const { transition, containerVariants, itemVariants } = mobileNavAnimation;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed top-0 z-50 h-full w-full bg-white"
          variants={mobileNavAnimation.menuVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={transition.menu}
        >
          <div className="flex h-full flex-col">
            <div className="z-30 flex justify-end px-6 py-4">
              <button onClick={handleCloseMenu} className="cursor-pointer">
                <Icon icon="mage:minus" width="30" height="30" />
              </button>
            </div>
            <motion.ul
              className="-mt-12 flex h-full flex-col justify-center gap-6"
              variants={containerVariants}
              initial="hidden"
              animate="show"
              exit="exit"
            >
              {["home", "work", "about"].map((item) => (
                <motion.li
                  key={item}
                  className="border-b px-6 pb-6"
                  variants={itemVariants}
                  transition={transition.openItem}
                  whileHover={itemVariants.hover}
                >
                  <Link href={`/#${item}`}>
                    <button
                      onClick={handleCloseMenu}
                      className="cursor-pointer text-4xl font-bold capitalize"
                    >
                      {item}
                    </button>
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export { MobileNav };
