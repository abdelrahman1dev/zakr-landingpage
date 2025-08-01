"use client";

import React, { ReactNode, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface FadeInWhenInViewProps {
  children: ReactNode;
  direction?: "left" | "right" | "up" | "down";
  duration?: number;
  delay?: number;
  className?: string;
}

const FadeInWhenInView = ({
  children,
  direction = "up",
  duration = 0.8,
  delay = 0,
  className = "",
}: FadeInWhenInViewProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true});

  let x = 0;
  let y = 0;

  switch (direction) {
    case "left":
      x = -60;
      break;
    case "right":
      x = 60;
      break;
    case "up":
      y = 60;
      break;
    case "down":
      y = -60;
      break;
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x, y }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x, y }}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default FadeInWhenInView;
