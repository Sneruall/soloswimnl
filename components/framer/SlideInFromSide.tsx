import React from "react";
import { easeOut, motion } from "framer-motion";

function SlideInFromSide({
  children,
  duration = 0.8,
  delay = 0,
  initialX = "-300px",
}: {
  children: React.ReactNode;
  duration: number;
  delay: number;
  initialX: string;
}) {
  return (
    <motion.div
      initial={{ x: initialX, opacity: 0 }}
      // animate={{
      //   x: 0,
      //   transition: {
      //     duration: duration,
      //     ease: [0.3, 0.4, 0.5, 0.95],
      //     delay: delay,
      //   },
      // }}
      whileInView={{
        x: 0,
        opacity: 1,
        transition: {
          duration: duration,
          ease: [0.3, 0.4, 0.5, 0.95],
          delay: delay,
        },
      }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}

export default SlideInFromSide;
