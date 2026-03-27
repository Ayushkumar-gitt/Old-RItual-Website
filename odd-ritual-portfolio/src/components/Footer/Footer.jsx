import React from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="relative bg-black text-white py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-3xl font-bold mb-4">ODD RITUAL</h3>
            <p className="text-white/60 leading-relaxed">
              A modern expression of heritage, style, and the game we love.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 uppercase tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-white/60 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-white/60 hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-white/60 hover:text-white transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#community" className="text-white/60 hover:text-white transition-colors">
                  Community
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4 uppercase tracking-wide">
              Stay Connected
            </h4>
            <div className="flex gap-4 mb-6">
              <motion.a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <FaInstagram className="text-xl" />
              </motion.a>
              <motion.a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <FaTwitter className="text-xl" />
              </motion.a>
              <motion.a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <FaFacebook className="text-xl" />
              </motion.a>
            </div>
            <p className="text-white/60 text-sm">
              Follow us for updates and behind-the-scenes content
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            © 2025 Odd Ritual Golf Club. All rights reserved.
          </p>
          <p className="text-white/40 text-sm">
            Built with React, Framer Motion & GSAP
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
