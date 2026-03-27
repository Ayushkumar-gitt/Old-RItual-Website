import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './components/Navigation/Navbar';
import HeroSection from './components/Hero/HeroSection';
import AboutSection from './components/About/AboutSection';
import FeaturedSection from './components/Featured/FeaturedSection';
import ImageGallery from './components/Gallery/ImageGallery';
import CommunitySection from './components/Community/CommunitySection';
import PartnersSection from './components/Partners/PartnersSection';
import Footer from './components/Footer/Footer';
import LoadingScreen from './components/common/LoadingScreen';
import useSmoothScroll from './hooks/useSmoothScroll';

gsap.registerPlugin(ScrollTrigger);

function App() {
  // Initialize smooth scroll
  useSmoothScroll();

  useEffect(() => {
    // Reduced motion check
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (!prefersReducedMotion) {
      // Add subtle fade-in animations for sections
      const sections = document.querySelectorAll('.min-h-screen');
      
      sections.forEach((section) => {
        gsap.fromTo(
          section,
          { opacity: 0.8, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 85%',
              end: 'top 40%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <>
      <LoadingScreen />
      <div className="app">
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <FeaturedSection />
          <ImageGallery />
          <CommunitySection />
          <PartnersSection />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
