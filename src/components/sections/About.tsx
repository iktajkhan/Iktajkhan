import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Film, Box, Target, Building2 } from 'lucide-react';
import { PERSONAL_INFO, PRIOR_ORGANIZATIONS } from '../../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="relative py-28 px-4 sm:px-6 max-w-7xl mx-auto overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute top-1/3 -left-48 w-96 h-96 bg-[#da0037]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#00f2fe]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 mb-3">
          <span className="text-xs font-mono text-[#da0037] tracking-wider uppercase font-semibold">
            // 01 • CINEMATIC STORY
          </span>
        </div>
        <h2 className="font-heading font-black text-4xl sm:text-6xl text-white tracking-tight">
          Who <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#da0037] to-[#ff2a5f]">I Am</span>
        </h2>
        <p className="mt-3 text-sm sm:text-base text-white/60 max-w-xl font-sans">
          Bridging the intersection of creative digital media, 3D visual effects, and enterprise business growth.
        </p>
      </div>

      {/* Main 2-Column Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Authentic Dual Studio Portraits with 3D Depth */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5 relative flex justify-center"
        >
          {/* Main Waist-Up Studio Portrait */}
          <div
            data-cursor="PORTRAIT"
            className="relative w-full max-w-md rounded-3xl overflow-hidden glass-panel border border-white/10 shadow-2xl group transition-transform duration-500 hover:scale-[1.02]"
          >
            <div className="relative aspect-[3/4] overflow-hidden bg-black">
              <img
                src={PERSONAL_INFO.images.aboutPortrait}
                alt="Md IkTaj Khan Professional Portrait"
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07070a] via-transparent to-transparent opacity-80" />
            </div>

            {/* Floating Role Pill on Image */}
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl glass-panel-glow backdrop-blur-xl border border-white/10">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-heading font-bold text-base text-white">
                    {PERSONAL_INFO.name}
                  </h3>
                  <p className="text-xs text-[#da0037] font-mono mt-0.5">
                    {PERSONAL_INFO.organization}
                  </p>
                  <p className="text-[11px] text-white/60 font-sans mt-0.5">
                    Sales Apprentice / Territory Officer
                  </p>
                </div>
                <div className="w-10 h-10 rounded-xl bg-[#da0037]/20 border border-[#da0037]/40 flex items-center justify-center shrink-0">
                  <Briefcase className="w-5 h-5 text-[#da0037]" />
                </div>
              </div>
            </div>
          </div>

          {/* Secondary Floating Robi Portrait Thumbnail Badge */}
          <div className="hidden sm:flex absolute -bottom-6 -right-6 w-32 h-36 rounded-2xl overflow-hidden glass-panel border-2 border-[#da0037]/60 shadow-2xl p-1 group-hover:rotate-2 transition-transform bg-[#0a0a12]">
            <img
              src={PERSONAL_INFO.images.robiPortrait}
              alt="Md IkTaj Khan Robi Axiata"
              className="w-full h-full object-cover rounded-xl object-top"
            />
          </div>
        </motion.div>

        {/* Right Column: Verified Narrative & Specialties */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 flex flex-col gap-6"
        >
          {/* Core Biography */}
          <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/10 space-y-4">
            <h3 className="font-heading font-bold text-2xl text-white flex items-center gap-2.5">
              <span className="w-3 h-3 rounded-full bg-[#da0037]" />
              Strategic Leadership &amp; Global Creative Vision
            </h3>
            <p className="text-sm sm:text-base text-white/85 leading-relaxed font-sans">
              I am a results-driven professional currently working as a{' '}
              <span className="text-[#da0037] font-semibold">
                Sales Apprentice / Territory Officer at Robi Axiata Limited
              </span>
              , while also actively working as a{' '}
              <strong className="text-white">Graphic Designer for Nike</strong> and a{' '}
              <strong className="text-white">Professional Video Editor in the international marketplace</strong>.
            </p>
            <p className="text-sm sm:text-base text-white/75 leading-relaxed font-sans">
              Previously, I spearheaded growth strategies as a Junior Executive in Business Development at{' '}
              <strong className="text-white">Creative IT Institute</strong>, following foundational experience with{' '}
              <strong className="text-white">CSR Axis</strong>,{' '}
              <strong className="text-white">Instant Job Hub Ltd.</strong>, and{' '}
              <strong className="text-white">bKash</strong>. My multidisciplinary strength unites on-ground commercial territory operations with global brand design, 3D motion graphics (<span className="text-[#00f2fe] font-semibold">Blender</span>), and international video post-production.
            </p>
          </div>

          {/* Specialties 4-Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {PERSONAL_INFO.specialties.map((spec, i) => {
              const icons = [Briefcase, Box, Film, Target];
              const IconComponent = icons[i % icons.length];
              return (
                <div
                  key={spec}
                  className="flex items-center gap-3.5 p-4 rounded-2xl glass-panel border border-white/5 hover:border-white/20 transition-all hover:bg-white/[0.04]"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#da0037]/10 border border-[#da0037]/30 flex items-center justify-center shrink-0">
                    <IconComponent className="w-5 h-5 text-[#da0037]" />
                  </div>
                  <span className="font-heading font-semibold text-sm text-white">
                    {spec}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Verified Prior Organizations Bar */}
          <div className="glass-panel rounded-2xl p-5 border border-white/5">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono text-white/50 uppercase tracking-wider">
                // ORGANIZATIONAL FOOTPRINT
              </span>
              <span className="text-[11px] font-mono text-[#00f2fe]">
                Current &amp; Former Portfolios
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5">
              {PRIOR_ORGANIZATIONS.map((org) => (
                <div
                  key={org.name}
                  className={`flex flex-col p-3 rounded-xl border transition-colors ${
                    org.current
                      ? 'bg-[#da0037]/10 border-[#da0037]/30'
                      : 'bg-white/[0.02] border-white/5'
                  }`}
                >
                  <div className="flex items-center justify-between gap-1">
                    <div className="flex items-center gap-1.5 min-w-0">
                      <Building2 className={`w-3.5 h-3.5 shrink-0 ${org.current ? 'text-[#da0037]' : 'text-[#00f2fe]'}`} />
                      <span className="font-heading font-bold text-xs text-white truncate">
                        {org.name}
                      </span>
                    </div>
                    {org.current && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00f2fe] shrink-0" />
                    )}
                  </div>
                  <span className="text-[10px] text-white/70 mt-1 truncate">
                    {org.role}
                  </span>
                  <span className="text-[9px] font-mono text-white/40 mt-0.5 truncate">
                    {org.badge}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
