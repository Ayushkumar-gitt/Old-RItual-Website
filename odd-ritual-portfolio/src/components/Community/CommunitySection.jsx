import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { FaInstagram } from 'react-icons/fa';
import SectionNumber from '../common/SectionNumber';
import { fadeInUp } from '../../utils/animations';

const CommunitySection = () => {
  const sectionRef = useRef(null);
  const statsRef = useRef([]);

  useEffect(() => {
    const section = sectionRef.current;

    // Animate stat numbers counting up
    statsRef.current.forEach((stat) => {
      if (!stat) return;
      const target = stat.getAttribute('data-target');
      const suffix = stat.getAttribute('data-suffix') || '';
      
      gsap.fromTo(
        stat,
        { innerText: 0 },
        {
          innerText: target,
          duration: 2,
          ease: 'power2.out',
          snap: { innerText: 1 },
          scrollTrigger: {
            trigger: section,
            start: 'top 60%',
            toggleActions: 'play none none reverse',
          },
          onUpdate: function() {
            stat.innerText = Math.ceil(stat.innerText) + suffix;
          },
        }
      );
    });

    // Button pulse animation
    const button = section.querySelector('.community-button');
    gsap.to(button, {
      scale: 1.05,
      duration: 1,
      ease: 'power1.inOut',
      repeat: -1,
      yoyo: true,
      scrollTrigger: {
        trigger: section,
        start: 'top center',
        end: 'bottom center',
      },
    });
  }, []);

  return (
    <section 
      id="community" 
      ref={sectionRef}
      className="min-h-screen relative bg-zinc-800 flex items-center justify-center py-20"
    >
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
            className="community-button inline-flex items-center gap-4 px-12 py-6 bg-white text-black rounded-full text-xl font-semibold hover:bg-gray-100 transition-colors"
          >
            <FaInstagram className="text-3xl" />
            Follow Us
          </motion.a>

          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-3 gap-4 md:gap-8 pt-12"
          >
            <div className="text-center">
              <p 
                ref={(el) => (statsRef.current[0] = el)}
                data-target="10000"
                data-suffix="+"
                className="text-2xl md:text-4xl font-bold text-white mb-2"
              >
                0+
              </p>
              <p className="text-white/60 text-xs md:text-sm uppercase tracking-wide">Followers</p>
            </div>
            <div className="text-center">
              <p 
                ref={(el) => (statsRef.current[1] = el)}
                data-target="500"
                data-suffix="+"
                className="text-2xl md:text-4xl font-bold text-white mb-2"
              >
                0+
              </p>
              <p className="text-white/60 text-xs md:text-sm uppercase tracking-wide">Posts</p>
            </div>
            <div className="text-center">
              <p 
                ref={(el) => (statsRef.current[2] = el)}
                data-target="50"
                data-suffix="+"
                className="text-2xl md:text-4xl font-bold text-white mb-2"
              >
                0+
              </p>
              <p className="text-white/60 text-xs md:text-sm uppercase tracking-wide">Events</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CommunitySection;
