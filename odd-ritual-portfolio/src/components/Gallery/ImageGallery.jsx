import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import SectionNumber from '../common/SectionNumber';
import { PLACEHOLDER_IMAGES } from '../../utils/constants';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

const ImageGallery = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;

    // Title reveal animation
    gsap.from(title, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: section,
        start: 'top 70%',
        toggleActions: 'play none none reverse',
      },
    });

    // Background color transition
    gsap.to(section, {
      backgroundColor: '#000000',
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        start: 'top center',
        end: 'bottom center',
        scrub: 1,
      },
    });
  }, []);

  return (
    <section 
      id="gallery" 
      ref={sectionRef}
      className="fullpage-section relative bg-black flex items-center justify-center py-20"
    >
      <SectionNumber number={2} />

      <div className="w-full px-6 md:px-12">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center"
        >
          <h2 className="text-heading text-white mb-4">Gallery</h2>
          <p className="text-white/60 text-sm tracking-widest uppercase">Swipe to explore</p>
        </motion.div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          breakpoints={{
            640: { 
              slidesPerView: 2,
              effect: 'slide',
              spaceBetween: 30 
            },
            1024: { 
              slidesPerView: 3,
              effect: 'slide',
              spaceBetween: 30 
            },
          }}
          className="gallery-swiper"
        >
          {PLACEHOLDER_IMAGES.gallery.map((image, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className="aspect-[4/5] overflow-hidden rounded-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              >
                <img
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx>{`
        .gallery-swiper {
          width: 100%;
          padding-bottom: 60px;
        }
        
        .gallery-swiper .swiper-slide {
          width: 80%;
          max-width: 400px;
        }
        
        .gallery-swiper .swiper-pagination-bullet {
          background: white;
          opacity: 0.5;
        }
        
        .gallery-swiper .swiper-pagination-bullet-active {
          opacity: 1;
        }
        
        .gallery-swiper .swiper-button-next,
        .gallery-swiper .swiper-button-prev {
          color: white;
        }
      `}</style>
    </section>
  );
};

export default ImageGallery;
