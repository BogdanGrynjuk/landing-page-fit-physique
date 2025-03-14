export const fadeIn = (direction: string, delay: number) => {
  return {
    show: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        type: 'tween',
        duration: 1.2,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },

    hidden: {
      opacity: 0,
      y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
      x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
      transition: {
        type: 'tween',
        duration: 1.4,
        delay: delay,
        ease: [0.25, 0.6, 0.3, 0.8],
      },
    },
  };
};

export const staggerFadeIn = (delay: number = 0) => {
  return {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
        delay: delay,
        ease: 'linear',
      },
    },
  };
};

export const scale = (delay: number) => {
  return {
    hidden: { opacity: 0, scale: 0.7 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.5,
        delay: delay,
        ease: [0.25, 0.6, 0.3, 0.8],
      },
    },
  };
};

export const expandWidth = {
  hidden: {
    width: 0,
  },
  show: {
    width: '20%',
    transition: {
      type: 'tween',
      delay: 0.5,
      duration: 0.3,
      ease: 'easeInOut',
    },
  },
};

export const rotateY = {
  hidden: {
    rotateY: 90,
  },
  show: {
    rotateY: 0,
    transition: {
      type: 'tween',
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
};
