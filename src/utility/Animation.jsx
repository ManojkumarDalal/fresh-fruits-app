export const FadeUp = (delay) => {
    return {
        hidden: {
            opacity: 0,
            y: 100,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                delay: delay,
            },
        },
    };
};

export const FadeLeft = (delay = 0) => ({
    hidden: {
      opacity: 0,
      x: -100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: delay,
      },
    },
  });
  

  export const FadeRight = (delay = 0) => ({
    hidden: {
      opacity: 0,
      x: 100, // Start from the right
    },
    visible: {
      opacity: 1,
      x: 0, // End at the original position
      transition: {
        duration: 0.5,
        delay: delay,
      },
    },
  });
  