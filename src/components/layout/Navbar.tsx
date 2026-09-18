import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Sparkles, Volume2, VolumeX } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { toggleSound, isSoundEnabled, playClick } from '../../utils/sound';

const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [soundOn, setSoundOn] = useState(() => isSoundEnabled());

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Section spy
      const sections = NAV_LINKS.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 flex justify-center px-4 py-4 transition-all duration-300">
        <motion.nav
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className={`flex items-center justify-between transition-all duration-300 ${
            isScrolled
              ? 'w-full max-w-5xl py-2 px-5 glass-panel-glow rounded-full shadow-2xl backdrop-blur-xl'
              : 'w-full max-w-6xl py-3 px-6 glass-panel rounded-2xl'
          }`}
        >
          {/* Brand Monogram */}
          <a
            href="#home"
            className="flex items-center gap-2.5 group"
            data-cursor="HOME"
          >
            <div className="relative w-8 h-8 rounded-lg overflow-hidden flex items-center justify-center bg-white/5 border border-white/10 group-hover:border-[#da0037] transition-colors">
              <img
                src={PERSONAL_INFO.images.favicon}
                alt="IK Logo"
                className="w-5 h-5 object-contain transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-[#da0037]/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-sm tracking-wider text-white">
                {PERSONAL_INFO.shortName}
              </span>
              <span className="text-[10px] text-white/50 tracking-widest uppercase font-mono">
                Portfolio
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1.5 p-1 bg-white/[0.03] rounded-full border border-white/[0.05]">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  data-cursor={link.name.toUpperCase()}
                  className={`relative px-4 py-1.5 rounded-full text-xs font-medium tracking-wide transition-colors ${
                    isActive
                      ? 'text-white'
                      : 'text-white/60 hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-[#da0037]/30 to-[#00f2fe]/20 border border-[#da0037]/50"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </a>
              );
            })}
          </div>

          {/* Right CTA & Sound Toggle */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => {
                const next = toggleSound();
                setSoundOn(next);
              }}
              data-cursor={soundOn ? 'MUTE' : 'SOUND'}
              aria-label={soundOn ? 'Mute ambient sound' : 'Enable ambient sound'}
              className={`p-2 rounded-full border transition-all ${
                soundOn
                  ? 'bg-[#da0037]/20 border-[#da0037]/50 text-[#da0037]'
                  : 'bg-white/5 border-white/10 text-white/50 hover:text-white hover:border-white/20'
              }`}
              title={soundOn ? 'Sound On (Click to Mute)' : 'Sound Off (Click to Enable)'}
            >
              {soundOn ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
            </button>

            <a
              href="#contact"
              data-cursor="CONNECT"
              onClick={() => playClick()}
              className="relative inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase text-white bg-gradient-to-r from-[#da0037] to-[#b0002c] hover:from-[#ff1a4f] hover:to-[#da0037] transition-all shadow-lg shadow-[#da0037]/25 hover:shadow-[#da0037]/40 hover:scale-105 active:scale-95"
            >
              <Sparkles className="w-3.5 h-3.5 text-white/80" />
              <span>Let's Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={() => {
                const next = toggleSound();
                setSoundOn(next);
              }}
              className={`p-2 rounded-lg border transition-all ${
                soundOn
                  ? 'bg-[#da0037]/20 border-[#da0037]/50 text-[#da0037]'
                  : 'bg-white/5 border-white/10 text-white/50'
              }`}
              aria-label="Toggle sound"
            >
              {soundOn ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-white/80 hover:text-white bg-white/5 border border-white/10"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </motion.nav>
      </header>

      {/* Fullscreen Mobile Overlay Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            animate={{ opacity: 1, backdropFilter: 'blur(24px)' }}
            exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-30 bg-[#07070a]/95 flex flex-col justify-center items-center px-6 md:hidden"
          >
            <div className="flex flex-col items-center gap-6 w-full max-w-xs">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.05 * i, duration: 0.3 }}
                  className="w-full text-center py-3 text-xl font-heading font-semibold text-white/80 hover:text-white border-b border-white/5 tracking-wider"
                >
                  {link.name}
                </motion.a>
              ))}

              <motion.a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.35, duration: 0.3 }}
                className="w-full text-center py-3.5 mt-4 rounded-xl text-sm font-semibold tracking-wider uppercase text-white bg-gradient-to-r from-[#da0037] to-[#b0002c] shadow-lg shadow-[#da0037]/30"
              >
                Let's Talk
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
