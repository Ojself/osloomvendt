'use client';
import React from 'react';
import { motion } from 'framer-motion';

const RadialBackground = () => {
  return (
    <motion.div
      className='radial-background'
      animate={{
        '--pos1-x': ['94%', '98%', '94%'],
        '--pos1-y': ['88%', '92%', '88%'],
        '--pos2-x': ['27%', '23%', '27%'],
        '--pos2-y': ['73%', '77%', '73%'],
        '--pos3-x': ['38%', '42%', '38%'],
        '--pos3-y': ['19%', '15%', '19%'],
        '--pos4-x': ['65%', '61%', '65%'],
        '--pos4-y': ['23%', '27%', '23%'],
        '--pos5-x': ['7%', '11%', '7%'],
        '--pos5-y': ['90%', '94%', '90%'],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        ease: 'linear',
      }}
      style={{
        // Ensure initial CSS variables are set
        '--pos1-x': '94%',
        '--pos1-y': '88%',
        '--pos2-x': '27%',
        '--pos2-y': '73%',
        '--pos3-x': '38%',
        '--pos3-y': '19%',
        '--pos4-x': '65%',
        '--pos4-y': '23%',
        '--pos5-x': '7%',
        '--pos5-y': '90%',
      }}
    />
  );
};

export default RadialBackground;
