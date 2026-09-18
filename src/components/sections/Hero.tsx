import React from 'react';
import { motion } from 'framer-motion';
import { Play, Mail, FileText } from 'lucide-react';
import { HeroScene } from '../3d/HeroScene';
import { PERSONAL_INFO } from '../../data/portfolioData';

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex flex-col justify-center items-center px-4 sm:px-6 pt-20 pb-12 overflow-hidden"
    >
      {/* 3D WebGL Canvas Layer */}
      <HeroScene />

      {/* Cinematic Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#da0037]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/3 w-[420px] h-[420px] bg-[#00f2fe]/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Main Content Hierarchy */}
      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center">
        {/* Step 1: Small Professional Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full glass-panel border border-white/10 mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-[#da0037] animate-ping" />
          <span className="text-xs sm:text-sm font-mono tracking-widest text-white/80 uppercase">
            {PERSONAL_INFO.organization} • {PERSONAL_INFO.department}
          </span>
        </motion.div>

        {/* Step 2: Large Animated Name */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mb-4"
        >
          <h1 className="font-heading font-black text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight leading-none text-white">
            <span className="text-white drop-shadow-[0_0_35px_rgba(255,255,255,0.2)]">Md IkTaj</span>{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#da0037] via-[#ff2a5f] to-[#00f2fe]">
              Khan
            </span>
          </h1>
        </motion.div>

        {/* Step 3: Verified Professional Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-6 max-w-2xl"
        >
          <p className="text-lg sm:text-2xl font-heading font-semibold tracking-wide text-[#ededed] flex flex-wrap items-center justify-center gap-2">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#da0037] to-[#ff4d6d]">Sales Apprentice / Territory Officer</span>
            <span className="text-white/40">•</span>
            <span className="text-white">Nike Graphic Designer</span>
            <span className="text-white/40">•</span>
            <span className="text-[#00f2fe]">International Video Editor</span>
          </p>
          <p className="mt-3 text-sm sm:text-base text-white/70 font-sans max-w-2xl mx-auto leading-relaxed">
            {PERSONAL_INFO.headline}
          </p>
        </motion.div>

        {/* Step 4: Action CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-4 mt-2"
        >
          {/* Primary CTA */}
          <a
            href="#projects"
            data-cursor="EXPLORE"
            className="group relative inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-semibold tracking-wider uppercase text-white bg-gradient-to-r from-[#da0037] to-[#b0002c] hover:from-[#ff1a4f] hover:to-[#da0037] shadow-xl shadow-[#da0037]/30 transition-all hover:scale-105 active:scale-95"
          >
            <Play className="w-4 h-4 fill-white text-white group-hover:translate-x-0.5 transition-transform" />
            <span>View My Work</span>
          </a>

          {/* Secondary CTA */}
          <a
            href="#contact"
            data-cursor="CONNECT"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full text-sm font-semibold tracking-wider uppercase text-white/90 hover:text-white glass-panel hover:border-white/30 transition-all hover:scale-105 active:scale-95"
          >
            <Mail className="w-4 h-4 text-[#00f2fe]" />
            <span>Let's Connect</span>
          </a>

          {/* Resume Download */}
          <a
            href={PERSONAL_INFO.socialLinks.resume}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="RESUME"
            className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full text-sm font-semibold tracking-wider uppercase text-white/70 hover:text-white glass-panel hover:border-white/20 transition-all hover:scale-105 active:scale-95"
          >
            <FileText className="w-4 h-4 text-[#da0037]" />
            <span>Resume</span>
          </a>
        </motion.div>
      </div>

      {/* Step 5: Floating Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="text-[10px] font-mono tracking-widest text-white/40 uppercase">
          SCROLL TO EXPLORE
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1"
        >
          <div className="w-1.5 h-2 rounded-full bg-[#da0037]" />
        </motion.div>
      </motion.div>
    </section>
  );
};
