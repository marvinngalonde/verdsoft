'use client';

import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import OurExpertise from '@/components/OurExpertise';
import OurApproach from '@/components/OurApproach';
import FeaturedProjects from '@/components/FeaturedProjects';
import ClientVoices from '@/components/ClientVoices';
import Footer from '@/components/Footer';

export default function Home() {
  // CSS Variables for this specific design
  const theme = {
    navyDark: '#081018',
    accent: '#C67C4E',
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection theme={theme} />
      <OurExpertise />
      <OurApproach />
      <FeaturedProjects />
      <ClientVoices />
      <Footer />
    </div>
  );
}