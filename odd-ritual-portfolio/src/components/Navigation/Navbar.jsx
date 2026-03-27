import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import MenuOverlay from './MenuOverlay';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 w-full z-50 px-6 md:px-12 py-6 mix-blend-difference"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.6, 0.05, 0.01, 0.9] }}
      >
        <div className="flex items-center justify-between">
          <motion.div
            className="text-white text-xl md:text-2xl font-bold tracking-tight"
            whileHover={{ scale: 1.05 }}
          >
            ODD RITUAL
          </motion.div>

          <motion.button
            onClick={toggleMenu}
            className="text-white text-3xl focus:outline-none z-50"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {isOpen ? <HiX /> : <HiMenuAlt4 />}
          </motion.button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && <MenuOverlay closeMenu={toggleMenu} />}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
