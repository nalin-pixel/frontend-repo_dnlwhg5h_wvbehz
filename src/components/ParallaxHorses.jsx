import React from 'react';
import { motion, useTransform, useSpring } from 'framer-motion';

// Premium parallax horses overlay using subtle emoji silhouettes
// pointer-events none so it never blocks 3D canvas
export default function ParallaxHorses({ progress = 0 }) {
  const smooth = useSpring(progress, { stiffness: 120, damping: 20, mass: 0.6 });

  const xSlow = useTransform(smooth, [0, 1], ['0%', '20%']);
  const xMed = useTransform(smooth, [0, 1], ['0%', '35%']);
  const xFast = useTransform(smooth, [0, 1], ['0%', '55%']);

  return (
    <div className="pointer-events-none fixed inset-0 z-20 overflow-hidden">
      <motion.div
        aria-hidden
        style={{ x: xSlow }}
        className="absolute top-[15%] left-[-10%] text-7xl md:text-8xl lg:text-9xl opacity-[0.06] select-none"
      >
        🐎
      </motion.div>
      <motion.div
        aria-hidden
        style={{ x: xMed }}
        className="absolute bottom-[20%] left-[-5%] text-6xl md:text-7xl lg:text-8xl opacity-[0.05] rotate-12 select-none"
      >
        🐎
      </motion.div>
      <motion.div
        aria-hidden
        style={{ x: xFast }}
        className="absolute top-[55%] left-[-20%] text-8xl md:text-9xl lg:text-[10rem] opacity-[0.04] -rotate-6 select-none"
      >
        🐎
      </motion.div>
    </div>
  );
}
