import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './components/Navigation/Navbar';
import HeroSection from './components/Hero/HeroSection';
import AboutSection from './components/About/AboutSection';
import ImageGallery from './components/Gallery/ImageGallery';
import CommunitySection from './components/Community/CommunitySection';
import PartnersSection from './components/Partners/PartnersSection';
import Footer from './components/Footer/Footer';
import useSmoothScroll from './hooks/useSmoothScroll';

gsap.registerPlugin(ScrollTrigger);

function App() {
  // Initialize smooth scroll
  useSmoothScroll();

  useEffect(() => {
    // Add fade-in animations for sections
    const sections = document.querySelectorAll('.fullpage-section');
    
    sections.forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'top 20%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="app">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ImageGallery />
        <CommunitySection />
        <PartnersSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
