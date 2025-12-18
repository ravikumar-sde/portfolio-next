"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

const initialProps = {
  pathLength: 0,
  opacity: 0,
} as const;

const animateProps = {
  pathLength: 1,
  opacity: 1,
} as const;

type Props = React.ComponentProps<typeof motion.svg> & {
  speed?: number;
  onAnimationComplete?: () => void;
};

function IAmEffect({
  className,
  speed = 1,
  onAnimationComplete,
  ...props
}: Props) {
  const calc = (x: number) => x * speed;

  return (
    <motion.svg
      className={cn("h-10 md:h-12", className)}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 280 200"
      fill="none"
      stroke="currentColor"
      strokeWidth="12"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      {...(props)}
    >
      <title>I am</title>

      {/* I - vertical line */}
      <motion.path
        d="M40 60 L40 140"
        style={{ strokeLinecap: "round" }}
        initial={initialProps}
        animate={animateProps}
        transition={{
          duration: calc(0.4),
          ease: "easeInOut",
          opacity: { duration: 0.2 },
        }}
      />

      {/* a - circle part */}
      <motion.path
        d="M100 100 C100 85 110 75 125 75 C140 75 150 85 150 100 C150 115 140 125 125 125 C110 125 100 115 100 100"
        style={{ strokeLinecap: "round" }}
        initial={initialProps}
        animate={animateProps}
        transition={{
          duration: calc(0.6),
          ease: "easeInOut",
          delay: calc(0.4),
          opacity: { duration: 0.3, delay: calc(0.4) },
        }}
      />

      {/* a - vertical line */}
      <motion.path
        d="M150 75 L150 140"
        style={{ strokeLinecap: "round" }}
        initial={initialProps}
        animate={animateProps}
        transition={{
          duration: calc(0.4),
          ease: "easeInOut",
          delay: calc(1.0),
          opacity: { duration: 0.2, delay: calc(1.0) },
        }}
      />

      {/* m - first vertical */}
      <motion.path
        d="M190 125 L190 75"
        style={{ strokeLinecap: "round" }}
        initial={initialProps}
        animate={animateProps}
        transition={{
          duration: calc(0.3),
          ease: "easeInOut",
          delay: calc(1.4),
          opacity: { duration: 0.15, delay: calc(1.4) },
        }}
      />

      {/* m - first hump */}
      <motion.path
        d="M190 75 C190 85 195 90 205 90 C210 90 210 85 210 80 L210 125"
        style={{ strokeLinecap: "round" }}
        initial={initialProps}
        animate={animateProps}
        transition={{
          duration: calc(0.4),
          ease: "easeInOut",
          delay: calc(1.7),
          opacity: { duration: 0.2, delay: calc(1.7) },
        }}
      />

      {/* m - second hump */}
      <motion.path
        d="M210 80 C210 85 215 90 225 90 C230 90 230 85 230 80 L230 125"
        style={{ strokeLinecap: "round" }}
        initial={initialProps}
        animate={animateProps}
        transition={{
          duration: calc(0.4),
          ease: "easeInOut",
          delay: calc(2.1),
          opacity: { duration: 0.2, delay: calc(2.1) },
        }}
        onAnimationComplete={onAnimationComplete}
      />
    </motion.svg>
  );
}

export { IAmEffect };

