import React from 'react';
import { motion } from 'framer-motion';

const SectionNumber = ({ number }) => {
  return (
    <motion.div
      className="section-number text-white absolute top-8 right-8 md:top-12 md:right-12"
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 0.6, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {number.toString().padStart(2, '0')}
    </motion.div>
  );
};

export default SectionNumber;
