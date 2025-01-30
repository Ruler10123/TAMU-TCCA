'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Petal = ({ delay, initialX, initialY }: { delay: number; initialX: number; initialY: number }) => {
  const pathVariants = {
    initial: {
      x: initialX,
      y: initialY,
      rotate: 0,
      opacity: 0,
      scale: 0.8,
    },
    animate: {
      x: [initialX, initialX + 100, initialX - 50, initialX + 150],
      y: [initialY, initialY - 150, initialY - 300, initialY - 450],
      rotate: [0, 45, 90, 180],
      opacity: [0, 0.7, 0.5, 0],
      scale: [0.8, 1, 0.9, 0.7],
      transition: {
        duration: 12,
        delay,
        repeat: Infinity,
        ease: [0.43, 0.13, 0.23, 0.96],
      }
    }
  };

  return (
    <motion.div
      className="absolute"
      variants={pathVariants}
      initial="initial"
      animate="animate"
    >
      <svg width="30" height="15" viewBox="0 0 40 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M20 0C13 0 8 8 8 15C8 18 10 20 13 20C16 20 18 18 18 15C18 12 16 10 13 10C10 10 8 12 8 15C8 8 13 0 20 0Z"
          fill="#059669"
          fillOpacity="0.4"
        />
      </svg>
    </motion.div>
  );
};

const LotusPetals = () => {
  const [petals, setPetals] = useState<{ id: number; delay: number; x: number; y: number }[]>([]);

  useEffect(() => {
    const newPetals = Array.from({ length: 75 }, (_, i) => ({
      id: i,
      delay: Math.random() * 4,
      x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
      y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight + 200 : 800),
    }));
    setPetals(newPetals);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {petals.map((petal) => (
        <Petal
          key={petal.id}
          delay={petal.delay}
          initialX={petal.x}
          initialY={petal.y}
        />
      ))}
    </div>
  );
};

export default LotusPetals; 