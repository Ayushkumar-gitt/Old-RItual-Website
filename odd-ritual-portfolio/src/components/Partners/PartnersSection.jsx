import React from 'react';
import { motion } from 'framer-motion';
import SectionNumber from '../common/SectionNumber';
import { PARTNERS_DATA } from '../../utils/constants';
import { fadeInUp, staggerContainer, staggerItem } from '../../utils/animations';

const PartnersSection = () => {
  return (
    <section id="partners" className="min-h-screen relative bg-zinc-900 flex items-center justify-center py-20">
      <SectionNumber number={4} />

      <div className="max-w-7xl px-6 md:px-12 w-full">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-heading text-white mb-4">Our Partners</h2>
          <p className="text-white/70 text-lg">
            Collaborating with like-minded brands to create something extraordinary
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {PARTNERS_DATA.map((partner, index) => (
            <motion.div
              key={partner.id}
              variants={staggerItem}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-zinc-800/50 p-8 rounded-xl border border-white/10 hover:border-white/30 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-semibold text-white">
                  {partner.name}
                </h3>
                <span className="text-white/40 text-sm">
                  {(index + 1).toString().padStart(2, '0')}
                </span>
              </div>
              <p className="text-white/70 leading-relaxed">
                {partner.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSection;
