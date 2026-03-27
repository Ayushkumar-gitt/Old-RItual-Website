import React from 'react';
import { motion } from 'framer-motion';
import { FaInstagram } from 'react-icons/fa';
import SectionNumber from '../common/SectionNumber';
import { fadeInUp } from '../../utils/animations';

const CommunitySection = () => {
  return (
    <section id="community" className="fullpage-section relative bg-zinc-800 flex items-center justify-center">
      <SectionNumber number={3} />

      <div className="max-w-4xl px-6 md:px-12 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          className="space-y-12"
        >
          <motion.div variants={fadeInUp}>
            <h2 className="text-heading text-white mb-6">
              Join the Community
            </h2>
            <p className="text-body-large text-white/70">
              Follow us on Instagram to join the journey and be part of something special
            </p>
          </motion.div>

          <motion.a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-4 px-12 py-6 bg-white text-black rounded-full text-xl font-semibold hover:bg-gray-100 transition-colors"
          >
            <FaInstagram className="text-3xl" />
            Follow Us
          </motion.a>

          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-3 gap-8 pt-12"
          >
            <div className="text-center">
              <p className="text-4xl font-bold text-white mb-2">10K+</p>
              <p className="text-white/60 text-sm uppercase tracking-wide">Followers</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-white mb-2">500+</p>
              <p className="text-white/60 text-sm uppercase tracking-wide">Posts</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-white mb-2">50+</p>
              <p className="text-white/60 text-sm uppercase tracking-wide">Events</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CommunitySection;
