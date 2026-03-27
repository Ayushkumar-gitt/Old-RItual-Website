import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import ScrollIndicator from '../common/ScrollIndicator';
import LazyImage from '../common/LazyImage';
import { fadeInUp } from '../../utils/animations';
import { PLACEHOLDER_IMAGES } from '../../utils/constants';

const HeroSection = () => {
  const heroRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;
    const image = imageRef.current;

    if (!image) return;

    // Parallax effect on hero image
    gsap.to(image, {
      yPercent: 30,
      ease: 'none',
      scrollTrigger: {
        trigger: hero,
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
      },
    });

    // Title animation
    const title = hero.querySelector('h1');
    if (title) {
      gsap.from(title, {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
        delay: 0.5,
      });
    }

    // Subtitle animation
    const subtitle = hero.querySelector('p');
    if (subtitle) {
      gsap.from(subtitle, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 0.8,
      });
    }
  }, []);

  return (
    <section id="home" ref={heroRef} className="fullpage-section relative flex items-center justify-center">
      {/* Background Image with Parallax */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div ref={imageRef} className="w-full h-[120%]" style={{ transform: 'translateY(-10%)' }}>
          <LazyImage
            src={PLACEHOLDER_IMAGES.hero}
            alt="Hero"
            className="w-full h-full"
          />
        </div>
        <div className="image-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 md:px-12 max-w-6xl">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          <h1 className="text-display text-white">
            Modern
            <br />
            Golf Culture
          </h1>
          
          <p className="text-body-large text-white/80 max-w-2xl mx-auto">
            A contemporary expression of heritage, style, and the game we love
          </p>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <ScrollIndicator />
    </section>
  );
};

export default HeroSection;
