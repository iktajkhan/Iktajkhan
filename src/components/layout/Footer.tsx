import React from 'react';
import { ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/5 py-12 px-4 sm:px-6 bg-[#050508] overflow-hidden">
      {/* Subtle bottom glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-[#da0037]/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        {/* Left: Brand Monogram & Title */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
            <img
              src={PERSONAL_INFO.images.favicon}
              alt="IK"
              className="w-4 h-4 object-contain"
            />
          </div>
          <div>
            <h4 className="font-heading font-bold text-sm text-white">
              {PERSONAL_INFO.name}
            </h4>
            <p className="text-[11px] text-white/50 font-sans">
              {PERSONAL_INFO.roleTitle}
            </p>
          </div>
        </div>

        {/* Middle: Navigation Anchors */}
        <div className="flex flex-wrap justify-center gap-6 text-xs font-mono uppercase tracking-wider text-white/60">
          <a href="#home" className="hover:text-white transition-colors">Home</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#experience" className="hover:text-white transition-colors">Experience</a>
          <a href="#skills" className="hover:text-white transition-colors">Skills</a>
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>

        {/* Right: Back to Top and Copyright */}
        <div className="flex items-center gap-4">
          <span className="text-xs text-white/40 font-mono">
            &copy; {new Date().getFullYear()} {PERSONAL_INFO.shortName}
          </span>

          <button
            onClick={scrollToTop}
            data-cursor="TOP"
            className="p-2.5 rounded-full glass-panel border border-white/10 hover:border-[#da0037] text-white/60 hover:text-white transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
