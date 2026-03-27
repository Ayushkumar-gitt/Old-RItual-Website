import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { fadeInUp } from '../../utils/animations';

gsap.registerPlugin(ScrollTrigger);

const FeaturedSection = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  const featuredItems = [
    {
      id: 1,
      title: 'Heritage Collection',
      description: 'Classic designs reimagined for the modern golfer',
      image: 'https://picsum.photos/id/1040/600/800',
    },
    {
      id: 2,
      title: 'Performance Line',
      description: 'Where style meets functionality on the course',
      image: 'https://picsum.photos/id/1041/600/800',
    },
    {
      id: 3,
      title: 'Urban Golf',
      description: 'From the fairway to the city streets',
      image: 'https://picsum.photos/id/1042/600/800',
    },
  ];

  useEffect(() => {
    // Simple hover effects only - no scroll animations that hide content
    cardsRef.current.forEach((card) => {
      if (!card) return;

      const image = card.querySelector('.featured-image');
      const overlay = card.querySelector('.featured-overlay');

      card.addEventListener('mouseenter', () => {
        gsap.to(image, { scale: 1.1, duration: 0.6, ease: 'power2.out' });
        gsap.to(overlay, { opacity: 1, duration: 0.3 });
      });

      card.addEventListener('mouseleave', () => {
        gsap.to(image, { scale: 1, duration: 0.6, ease: 'power2.out' });
        gsap.to(overlay, { opacity: 0, duration: 0.3 });
      });
    });
  }, []);

  return (
    <section 
      id="featured" 
      ref={sectionRef}
      className="relative bg-zinc-950 py-24"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-heading text-white mb-4">Featured Collections</h2>
          <p className="text-white/70 text-lg">
            Curated selections that define our style
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {featuredItems.map((item, index) => (
            <motion.div
              key={item.id}
              ref={(el) => (cardsRef.current[index] = el)}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative overflow-hidden rounded-xl cursor-pointer"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="featured-image w-full h-full object-cover transition-transform duration-500"
                />
                <div className="featured-overlay absolute inset-0 bg-black/50 opacity-0 flex items-end p-4 md:p-6 transition-opacity duration-300">
                  <div className="text-left">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-white/80 text-xs md:text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;