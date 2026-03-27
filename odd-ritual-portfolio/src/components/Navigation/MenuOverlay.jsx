import React from 'react';
import { motion } from 'framer-motion';
import { NAV_ITEMS } from '../../utils/constants';
import { menuOverlayVariants, menuItemVariants } from '../../utils/animations';

const MenuOverlay = ({ closeMenu }) => {
  const handleNavClick = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    closeMenu();
  };

  return (
    <motion.div
      className="fixed inset-0 bg-black z-40 flex items-center justify-center"
      variants={menuOverlayVariants}
      initial="closed"
      animate="open"
      exit="closed"
    >
      <nav className="flex flex-col items-center gap-8">
        {NAV_ITEMS.map((item, index) => (
          <motion.button
            key={item.label}
            custom={index}
            variants={menuItemVariants}
            initial="closed"
            animate="open"
            onClick={() => handleNavClick(item.href)}
            className="text-white text-4xl md:text-6xl font-bold tracking-tight hover:text-gray-300 transition-colors"
            whileHover={{ scale: 1.05, x: 20 }}
            whileTap={{ scale: 0.95 }}
          >
            {item.label}
          </motion.button>
        ))}
      </nav>

      <motion.div
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <p className="text-white text-sm opacity-50">© 2025 Odd Ritual</p>
      </motion.div>
    </motion.div>
  );
};

export default MenuOverlay;
