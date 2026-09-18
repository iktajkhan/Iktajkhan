import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Layers } from 'lucide-react';
import { SkillConstellationScene } from '../3d/SkillConstellationScene';
import { SKILL_NODES } from '../../data/portfolioData';

const CATEGORIES = [
  'All',
  'Video & Motion',
  '3D & Visual',
  'Design & Branding',
  'Strategy & Growth',
  'Tech & Web'
] as const;

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredSkills = selectedCategory === 'All'
    ? SKILL_NODES
    : SKILL_NODES.filter((s) => s.category === selectedCategory);

  return (
    <section id="skills" className="relative py-28 px-4 sm:px-6 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 mb-3">
          <span className="text-xs font-mono text-[#da0037] tracking-wider uppercase font-semibold">
            // 03 • CAPABILITIES & TOOLSET
          </span>
        </div>
        <h2 className="font-heading font-black text-4xl sm:text-6xl text-white tracking-tight">
          Technology <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#da0037] via-[#ff2a5f] to-[#00f2fe]">Constellation</span>
        </h2>
        <p className="mt-3 text-sm sm:text-base text-white/60 max-w-xl font-sans">
          Curated creative software, 3D suites, and institutional growth methodologies.
        </p>
      </div>

      {/* 3D Interactive WebGL Constellation */}
      <div className="mb-14">
        <SkillConstellationScene />
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-200 ${
              selectedCategory === cat
                ? 'bg-[#da0037] text-white shadow-lg shadow-[#da0037]/30 border-transparent font-bold'
                : 'glass-panel text-white/60 hover:text-white hover:border-white/20'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Skill Grid Cards */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {filteredSkills.map((skill, index) => (
          <motion.div
            layout
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="glass-panel rounded-3xl p-6 border border-white/10 hover:border-white/25 transition-all duration-300 group hover:scale-[1.01]"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3.5">
                {/* Custom Icon Badge if available, else fallback */}
                {skill.icon ? (
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 p-2 flex items-center justify-center shrink-0 group-hover:border-[#da0037]/50 transition-colors">
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                ) : (
                  <div className="w-12 h-12 rounded-2xl bg-[#00f2fe]/10 border border-[#00f2fe]/30 flex items-center justify-center shrink-0">
                    <Layers className="w-6 h-6 text-[#00f2fe]" />
                  </div>
                )}
                <div>
                  <h3 className="font-heading font-bold text-base text-white group-hover:text-[#da0037] transition-colors">
                    {skill.name}
                  </h3>
                  <span className="text-[11px] font-mono text-white/50 tracking-wider uppercase">
                    {skill.category}
                  </span>
                </div>
              </div>

              {/* Numerical Level */}
              <span className="text-xs font-mono font-bold text-white/60 group-hover:text-white">
                {skill.level}%
              </span>
            </div>

            {/* Description */}
            <p className="mt-4 text-xs text-white/70 font-sans leading-relaxed">
              {skill.description}
            </p>

            {/* Glowing Proficiency Track */}
            <div className="mt-4 w-full h-2 rounded-full bg-white/5 overflow-hidden p-0.5 border border-white/5">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: 'easeOut' }}
                className="h-full rounded-full bg-gradient-to-r from-[#da0037] to-[#00f2fe] shadow-[0_0_10px_rgba(218,0,55,0.6)]"
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
