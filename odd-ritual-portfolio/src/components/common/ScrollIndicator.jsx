import React from 'react';
import { motion } from 'framer-motion';

const ScrollIndicator = ({ text = 'Scroll' }) => {
  return (
    <motion.div
      className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 flex flex-col items-center gap-2"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.6 }}
    >
      <span className="text-white text-sm font-light tracking-widest uppercase opacity-70">
        {text}
      </span>
      <motion.div
        className="w-[1px] h-12 bg-white opacity-50"
        animate={{ scaleY: [1, 1.5, 1] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
      />
    </motion.div>
  );
};

export default ScrollIndicator;
