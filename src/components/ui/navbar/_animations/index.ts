export const mobileNavAnimation = {
  transition: {
    menu: {
      duration: 0.2,
      type: "tween",
    },
    openItem: {
      duration: 0.4,
      type: "spring",
      bounce: 0.4,
    },
  },

  menuVariants: {
    initial: { y: "100%" },
    animate: { y: 0 },
    exit: {
      y: "100%",
      transition: {
        delay: 0.6,
        duration: 0.2,
      },
    },
  },

  containerVariants: {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.4,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.1,
        staggerDirection: -1,
      },
    },
  },

  itemVariants: {
    hidden: { x: 1000, opacity: 0 },
    show: { x: 0, opacity: 1 },
    exit: { x: 1000, opacity: 0 },
    hover: {
      scale: 1.05,
      x: 20,
      transition: {
        duration: 0.2,
        type: "spring",
        stiffness: 400,
      },
    },
  },
};
