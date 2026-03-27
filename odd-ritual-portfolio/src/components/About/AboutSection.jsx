import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import SectionNumber from '../common/SectionNumber';
import AnimatedText from '../common/AnimatedText';
import { fadeInUp } from '../../utils/animations';

const AboutSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    
    // Animate cards on scroll
    const cards = section.querySelectorAll('.about-card');
    cards.forEach((card, index) => {
      gsap.from(card, {
        y: 100,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
        delay: index * 0.2,
      });
    });

    // Scale animation on scroll
    gsap.to(section, {
      scale: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        start: 'top bottom',
        end: 'top 20%',
        scrub: 1,
      },
    });
  }, []);

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="fullpage-section relative bg-zinc-900 flex items-center justify-center"
      style={{ scale: 0.95 }}
    >
      <SectionNumber number={1} />

      <div className="max-w-5xl px-6 md:px-12 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-8"
        >
          <motion.h2 
            className="text-heading text-white"
            variants={fadeInUp}
          >
            Born from Passion
          </motion.h2>

          <AnimatedText
            text="Rooted in a vision of authenticity and creativity expressed through what we wear. For us, it's about the good times, on and off the course, self-expression, and an appreciation for the cultural overlaps we get to experience along the way."
            className="text-body-large text-white/80 leading-relaxed"
            delay={0.3}
          />

          <motion.div 
            className="grid md:grid-cols-2 gap-8 mt-12"
            variants={fadeInUp}
          >
            <div className="about-card space-y-4 p-8 bg-zinc-800/50 rounded-xl backdrop-blur-sm border border-white/10">
              <h3 className="text-subheading text-white">Our Vision</h3>
              <p className="text-white/70">
                Creating a modern expression of golf culture that resonates with today's generation while honoring the game's rich heritage.
              </p>
            </div>
            <div className="about-card space-y-4 p-8 bg-zinc-800/50 rounded-xl backdrop-blur-sm border border-white/10">
              <h3 className="text-subheading text-white">Our Mission</h3>
              <p className="text-white/70">
                To bridge the gap between tradition and innovation, bringing style and authenticity to every aspect of the game.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
