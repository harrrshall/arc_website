'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import ParticleEffect from '@/components/ParticleEffect';
import HeroSection from '@/components/hero-section';
import DemoSection from '@/components/demo_section';

export default function Home() {
  const { scrollY } = useScroll();
  const contentRef = useRef<HTMLDivElement>(null);

  // Scroll animations
  const contentOpacity = useTransform(scrollY, [200, 400], [0, 1]);

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Background Effects */}
      <div className="fixed inset-0">
        <ParticleEffect />
      </div>

      {/* Hero Section */}
      <HeroSection />

      {/* Main Content */}
      <motion.main
        ref={contentRef}
        style={{ opacity: contentOpacity }}
        className="relative mt-0"
      >
        {/* Demo Section */}
        <DemoSection />
      </motion.main>
    </div>
  );
}