const positions = ["center", "leftPrev", "left", "right", "rightNext"],
  imageVariants = {
    center: { x: "0%", scale: 1, zIndex: 3 },
    leftPrev: { x: "-60%", scale: 0.8, zIndex: 2 },
    left: { x: "-100%", scale: 0.7, zIndex: 1 },
    right: { x: "100%", scale: 0.7, zIndex: 1 },
    rightNext: { x: "60%", scale: 0.8, zIndex: 2 },
  },
  imageVariants780 = {
    center: { x: "0%", scale: 1, zIndex: 3 },
    leftPrev: { x: "0%", scale: 1, zIndex: 2 },
    left: { x: "0%", scale: 1, zIndex: 1 },
    right: { x: "0%", scale: 1, zIndex: 1 },
    rightNext: { x: "0%", scale: 1, zIndex: 2 },
  },
  imageVariants1280 = {
    center: { x: "0%", scale: 1, zIndex: 3 },
    leftPrev: { x: "-60%", scale: 0.5, zIndex: 1 },
    left: { x: "-40%", scale: 0.7, zIndex: 2 },
    right: { x: "40%", scale: 0.7, zIndex: 2 },
    rightNext: { x: "60%", scale: 0.5, zIndex: 1 },
  };

export { positions, imageVariants, imageVariants780, imageVariants1280 };
