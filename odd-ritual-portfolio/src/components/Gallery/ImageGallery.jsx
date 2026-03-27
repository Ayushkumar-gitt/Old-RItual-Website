import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import SectionNumber from '../common/SectionNumber';
import { PLACEHOLDER_IMAGES } from '../../utils/constants';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ImageGallery = () => {
  return (
    <section 
      id="gallery" 
      className="relative bg-zinc-900 py-24"
    >
      <SectionNumber number={2} />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-heading text-white mb-4">Gallery</h2>
          <p className="text-white/60 text-sm tracking-widest uppercase">Swipe to explore</p>
        </motion.div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          breakpoints={{
            640: { 
              slidesPerView: 2,
              spaceBetween: 24 
            },
            1024: { 
              slidesPerView: 3,
              spaceBetween: 30 
            },
          }}
          className="gallery-swiper"
        >
          {PLACEHOLDER_IMAGES.gallery.map((image, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className="aspect-[4/5] overflow-hidden rounded-lg bg-zinc-800"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style>{`
        .gallery-swiper {
          width: 100%;
          padding-bottom: 50px;
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
