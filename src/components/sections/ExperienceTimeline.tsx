import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Calendar,
  Building,
  X,
  ExternalLink,
  Award,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Maximize2,
  Trophy,
  Play,
  Pause
} from 'lucide-react';
import { CAREER_MILESTONES, PERSONAL_INFO } from '../../data/portfolioData';

const CATEGORIES = ['All', 'Robi Axiata', 'Global Creative', 'Creative IT & Prior'] as const;

interface SpotlightSlide {
  id: string;
  milestoneId: string;
  badge: string;
  title: string;
  subtitle: string;
  organization: string;
  description: string;
  image: string;
  tags: string[];
}

const SPOTLIGHT_SLIDES: SpotlightSlide[] = [
  {
    id: 'spotlight-young-talent',
    milestoneId: 'milestone-robi-young-talent',
    badge: 'Award Winner • Q1 2026',
    title: 'Young Talent Award (Northern Cluster)',
    subtitle: 'Robi Star Trophy • Rangpur Region Honor',
    organization: 'Robi Axiata Limited',
    description: 'Awarded the prestigious Robi Young Talent Award crest in Northern Cluster for outstanding commercial agility, territory retail network growth, and high-velocity field execution.',
    image: PERSONAL_INFO.images.robi2,
    tags: ['Young Talent Award', 'Robi Star Crest', 'Northern Cluster', 'Rangpur Region', 'Territory Officer']
  },
  {
    id: 'spotlight-cluster-meet',
    milestoneId: 'milestone-robi-cluster-meet',
    badge: 'Cluster Meet Q2\'26',
    title: 'Cluster Meet Q2\'26 Stage Celebration',
    subtitle: 'Red Carpet Stage • Northern Cluster',
    organization: 'Robi Axiata Limited',
    description: 'Celebrated on the red carpet stage at the high-velocity Cluster Meet Q2\'26 alongside regional cluster champions and top sales management, celebrating milestones in territory subscriber growth and telecom services.',
    image: PERSONAL_INFO.images.robi3,
    tags: ['Cluster Meet Q2\'26', 'Red Carpet Stage', 'Sales Leadership', 'Commercial Milestones']
  },
  {
    id: 'spotlight-warriors-stage',
    milestoneId: 'milestone-robi-warriors-stage',
    badge: 'Leadership Crest • 2026',
    title: 'Northern Warriors Stage Recognition',
    subtitle: 'MD. IKTAJ KHAN • Executive Stage Honor',
    organization: 'Robi Axiata Limited',
    description: 'Recognized on the grand stage with executive leadership as an honored member of Northern Warriors for exemplary on-ground dedication, commercial agility, and distribution excellence.',
    image: PERSONAL_INFO.images.robi1,
    tags: ['Northern Warriors', 'Stage Recognition', 'Award Crest', 'Fast & Fearless']
  },
  {
    id: 'spotlight-cluster-team',
    milestoneId: 'milestone-robi-cluster-team',
    badge: 'Grand Convocation • 2026',
    title: 'Northern Cluster Grand Team Meet',
    subtitle: 'Entire Regional Operations Force',
    organization: 'Robi Axiata Limited',
    description: 'Gathered with the entire regional operations force, cluster territory officers, and commercial directors at the Robi Northern Cluster Grand Meet, representing unified commercial momentum and collective excellence.',
    image: PERSONAL_INFO.images.robi4,
    tags: ['Northern Cluster', 'Grand Team Meet', 'Territory Officers', 'Unified Force']
  },
  {
    id: 'spotlight-summit-2026',
    milestoneId: 'milestone-robi-summit',
    badge: 'Apex Summit • 2026',
    title: 'Red Velocity Young Apex Summit 2026',
    subtitle: 'Fast & Fearless Commercial Acceleration',
    organization: 'Robi Axiata Limited & Airtel',
    description: 'Celebrating fearless execution and high-velocity teamwork at the prestigious Red Velocity Young Apex Summit 2026 alongside Robi Axiata and Airtel leadership, championing commercial momentum and countrywide outreach.',
    image: PERSONAL_INFO.images.robiSummit,
    tags: ['Red Velocity', 'Young Apex Summit', 'Robi & Airtel', 'Territory Leadership']
  },
  {
    id: 'spotlight-official-role',
    milestoneId: 'milestone-robi-role',
    badge: 'Current Appointment',
    title: 'Sales Apprentice / Territory Officer',
    subtitle: 'Commercial Strategy & Territory Operations',
    organization: 'Robi Axiata Limited',
    description: 'Spearheading on-ground territory operations, distribution synergies, retailer network growth, and high-impact digital telecom campaigns as a Sales Apprentice / Territory Officer at Robi Axiata Limited.',
    image: PERSONAL_INFO.images.robiPortrait,
    tags: ['Sales Apprentice', 'Territory Officer', 'Commercial Strategy', 'Telecom Operations']
  }
];

export const ExperienceTimeline: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalIndex, setActiveModalIndex] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);

  const filteredMilestones = selectedCategory === 'All'
    ? CAREER_MILESTONES
    : CAREER_MILESTONES.filter((item) => item.category === selectedCategory);

  const activeItem = activeModalIndex !== null ? filteredMilestones[activeModalIndex] : null;

  // Autoplay spotlight slides
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SPOTLIGHT_SLIDES.length);
    }, 5500);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : SPOTLIGHT_SLIDES.length - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % SPOTLIGHT_SLIDES.length);
  };

  const openMilestoneModal = (milestoneId: string) => {
    let list = filteredMilestones;
    let idx = list.findIndex((m) => m.id === milestoneId);
    if (idx === -1) {
      setSelectedCategory('All');
      list = CAREER_MILESTONES;
      idx = list.findIndex((m) => m.id === milestoneId);
    }
    if (idx !== -1) {
      setActiveModalIndex(idx);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeModalIndex !== null) {
      setActiveModalIndex((prev) => (prev! > 0 ? prev! - 1 : filteredMilestones.length - 1));
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeModalIndex !== null) {
      setActiveModalIndex((prev) => (prev! < filteredMilestones.length - 1 ? prev! + 1 : 0));
    }
  };

  // Keyboard navigation for modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeModalIndex === null) return;
      if (e.key === 'Escape') setActiveModalIndex(null);
      if (e.key === 'ArrowLeft') {
        setActiveModalIndex((prev) => (prev! > 0 ? prev! - 1 : filteredMilestones.length - 1));
      }
      if (e.key === 'ArrowRight') {
        setActiveModalIndex((prev) => (prev! < filteredMilestones.length - 1 ? prev! + 1 : 0));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeModalIndex, filteredMilestones.length]);

  return (
    <section id="experience" className="relative py-28 px-4 sm:px-6 max-w-7xl mx-auto overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 -right-48 w-96 h-96 bg-[#da0037]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 -left-48 w-96 h-96 bg-[#00f2fe]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 mb-4 backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5 text-[#da0037]" />
          <span className="text-xs font-mono text-[#00f2fe] tracking-wider uppercase font-semibold">
            // 02 • CAREER TRAJECTORY & LEADERSHIP
          </span>
        </div>
        <h2 className="font-heading font-black text-4xl sm:text-6xl text-white tracking-tight">
          Career <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#da0037] via-[#ff2a5f] to-[#00f2fe]">Milestones</span>
        </h2>
        <p className="mt-3 text-sm sm:text-base text-white/70 max-w-2xl font-sans leading-relaxed">
          From driving territory operations at <strong className="text-white">Robi Axiata Limited</strong> and designing for <strong className="text-white">Nike</strong> to pioneering university funnels and empowering hundreds of creative students.
        </p>
      </div>

      {/* FEATURED SPOTLIGHT: Interactive Multi-Slide Robi Axiata Milestone Showcase */}
      <div 
        className="mb-20"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        <div className="relative rounded-3xl p-1 bg-gradient-to-r from-[#da0037]/50 via-[#ff2a5f]/25 to-[#00f2fe]/50 shadow-2xl">
          <div className="glass-panel rounded-[22px] p-6 sm:p-10 border border-white/10 relative overflow-hidden bg-[#0a0a12]/95">
            {/* Top Control Header */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
              <div className="flex items-center gap-2.5">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#da0037] opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-[#da0037]" />
                </span>
                <span className="text-xs font-mono tracking-widest text-[#00f2fe] uppercase font-bold">
                  ACTIVE MILESTONE SPOTLIGHT • ROBI AXIATA LIMITED
                </span>
              </div>

              {/* Slider Controls & Counter */}
              <div className="flex items-center gap-3">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#da0037]/15 border border-[#da0037]/30 text-xs font-mono text-[#ff4d6d]">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Robi Axiata Limited</span>
                </div>

                <div className="flex items-center gap-1.5 pl-2 border-l border-white/10">
                  <button
                    onClick={handlePrevSlide}
                    data-cursor="PREV"
                    className="p-2 rounded-full glass-panel border border-white/10 hover:border-[#da0037] text-white/70 hover:text-white transition-colors"
                    aria-label="Previous milestone slide"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>

                  <span className="text-xs font-mono text-white/60 px-1 min-w-[42px] text-center">
                    0{currentSlide + 1} / 0{SPOTLIGHT_SLIDES.length}
                  </span>

                  <button
                    onClick={handleNextSlide}
                    data-cursor="NEXT"
                    className="p-2 rounded-full glass-panel border border-white/10 hover:border-[#da0037] text-white/70 hover:text-white transition-colors"
                    aria-label="Next milestone slide"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                    className="p-2 rounded-full glass-panel border border-white/10 hover:border-[#00f2fe] text-white/50 hover:text-white transition-colors ml-1"
                    title={isAutoPlaying ? 'Pause autoplay' : 'Resume autoplay'}
                    aria-label={isAutoPlaying ? 'Pause autoplay' : 'Resume autoplay'}
                  >
                    {isAutoPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>
            </div>

            {/* Active Slide Display */}
            {(() => {
              const activeSpotlight = SPOTLIGHT_SLIDES[currentSlide];
              return (
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeSpotlight.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.35 }}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
                  >
                    {/* Slide Photo Frame with Zoom Cursor & Enlarge */}
                    <div className="lg:col-span-6 xl:col-span-7 flex flex-col">
                      <div
                        onClick={() => openMilestoneModal(activeSpotlight.milestoneId)}
                        data-cursor="EXPAND"
                        className="group relative rounded-2xl overflow-hidden border border-white/15 bg-black/80 shadow-2xl cursor-pointer aspect-video sm:aspect-[16/10] max-h-[440px] flex items-center justify-center"
                      >
                        <img
                          src={activeSpotlight.image}
                          alt={activeSpotlight.title}
                          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                        {/* Floating Top Badge */}
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold uppercase bg-[#da0037] text-white shadow-lg shadow-[#da0037]/50 flex items-center gap-1.5">
                            <Trophy className="w-3 h-3" />
                            {activeSpotlight.badge}
                          </span>
                        </div>

                        {/* Hover Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-[2px]">
                          <span className="px-4 py-2 rounded-full text-xs font-mono font-semibold bg-[#da0037] text-white flex items-center gap-2 shadow-xl">
                            <Maximize2 className="w-3.5 h-3.5" /> Enlarge Fullscreen Photo
                          </span>
                        </div>

                        {/* Bottom Tag Bar on Image */}
                        <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                          <span className="text-xs font-mono text-white/90 truncate font-medium">
                            {activeSpotlight.subtitle}
                          </span>
                          <span className="text-[11px] font-mono text-[#00f2fe] uppercase tracking-wider flex items-center gap-1 shrink-0 ml-2">
                            <ExternalLink className="w-3 h-3" /> Inspect
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Slide Information & Actions */}
                    <div className="lg:col-span-6 xl:col-span-5 flex flex-col justify-between h-full">
                      <div>
                        <div className="flex items-center gap-2 text-xs font-mono text-white/50 mb-2">
                          <Building className="w-3.5 h-3.5 text-[#da0037]" />
                          <span>{activeSpotlight.organization}</span>
                        </div>

                        <h3 className="font-heading font-black text-2xl sm:text-3xl text-white tracking-tight leading-snug">
                          {activeSpotlight.title}
                        </h3>

                        <p className="text-sm font-mono text-[#00f2fe] mt-1 font-semibold">
                          {activeSpotlight.subtitle}
                        </p>

                        <p className="mt-4 text-sm text-white/80 font-sans leading-relaxed">
                          {activeSpotlight.description}
                        </p>
                      </div>

                      {/* Tag Badges */}
                      <div className="mt-6 pt-4 border-t border-white/10">
                        <div className="flex flex-wrap gap-2 mb-5">
                          {activeSpotlight.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2.5 py-1 rounded-lg glass-panel text-[11px] font-mono text-white/80 border border-white/5"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>

                        <div className="flex flex-wrap items-center gap-3">
                          <button
                            onClick={() => openMilestoneModal(activeSpotlight.milestoneId)}
                            className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#da0037] to-[#ff2a5f] text-white text-xs font-mono font-bold hover:shadow-lg hover:shadow-[#da0037]/40 transition-all flex items-center gap-2"
                          >
                            <Maximize2 className="w-3.5 h-3.5" /> View in Lightbox
                          </button>
                          <button
                            onClick={handleNextSlide}
                            className="px-4 py-2 rounded-xl glass-panel border border-white/10 hover:border-white/30 text-white/75 hover:text-white text-xs font-mono transition-colors flex items-center gap-1.5"
                          >
                            Next Slide <ChevronRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              );
            })()}

            {/* Interactive Thumbnail Carousel Strip */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <div className="flex items-center justify-between gap-3 mb-3">
                <span className="text-[11px] font-mono text-white/50 uppercase tracking-wider flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-[#da0037]" /> Click Any Milestone to View Slide:
                </span>
                <span className="text-[11px] font-mono text-white/40">
                  {SPOTLIGHT_SLIDES.length} Featured Robi Axiata Moments
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
                {SPOTLIGHT_SLIDES.map((slide, idx) => (
                  <button
                    key={slide.id}
                    onClick={() => setCurrentSlide(idx)}
                    className={`relative rounded-xl overflow-hidden border p-1 transition-all duration-300 text-left group ${
                      currentSlide === idx
                        ? 'border-[#da0037] bg-[#da0037]/20 shadow-lg shadow-[#da0037]/30 scale-[1.03] ring-1 ring-[#da0037]'
                        : 'border-white/10 bg-white/5 hover:border-white/30 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <div className="aspect-[16/10] rounded-lg overflow-hidden relative">
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                      />
                      {currentSlide === idx && (
                        <div className="absolute inset-0 bg-[#da0037]/20 border border-[#da0037]" />
                      )}
                    </div>
                    <div className="mt-1.5 px-0.5">
                      <p className="text-[10px] font-mono font-bold text-white truncate">
                        {slide.title}
                      </p>
                      <p className="text-[9px] font-mono text-[#00f2fe] truncate">
                        {slide.badge.split('•')[0].trim()}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2.5 mb-14">
        {CATEGORIES.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-5 py-2.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-300 ${
              selectedCategory === category
                ? 'bg-gradient-to-r from-[#da0037] to-[#ff2a5f] text-white shadow-lg shadow-[#da0037]/40 border-transparent font-bold scale-105'
                : 'glass-panel text-white/65 hover:text-white hover:border-white/20 border-white/5'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Chronological Timeline Track */}
      <div className="relative">
        {/* Central glowing futuristic spine */}
        <div className="absolute top-0 bottom-0 left-4 md:left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-[#da0037] via-[#00f2fe] to-[#da0037] opacity-60 shadow-[0_0_15px_rgba(218,0,55,0.7)]" />

        <div className="space-y-12 sm:space-y-16">
          {filteredMilestones.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className={`relative flex flex-col md:flex-row items-start md:items-center ${
                  isEven ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Central Milestone Pin / Node */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-[#090910] border-2 border-[#da0037] shadow-[0_0_18px_rgba(218,0,55,0.8)] z-20 flex flex-col items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-[10px] font-mono font-black text-white leading-tight">
                    {item.date.year.includes('-') ? 'NOW' : item.date.year.slice(-2)}
                  </span>
                  <span className="text-[7px] font-mono text-[#00f2fe] uppercase leading-none font-bold">
                    {item.date.month.slice(0, 3)}
                  </span>
                </div>

                {/* Content Card (Half-width) */}
                <div
                  className={`w-full md:w-1/2 pl-12 md:pl-0 ${
                    isEven ? 'md:pr-12' : 'md:pl-12'
                  }`}
                >
                  <div className="glass-panel rounded-3xl p-6 sm:p-7 border border-white/10 hover:border-[#da0037]/50 transition-all duration-300 shadow-xl group hover:scale-[1.015] bg-[#0c0c16]/80 relative overflow-hidden">
                    {/* Top ambient accent on card */}
                    <div className="absolute -top-16 -right-16 w-32 h-32 bg-[#da0037]/10 rounded-full blur-2xl group-hover:bg-[#00f2fe]/15 transition-colors pointer-events-none" />

                    {/* Header Row: Highlight Badge & Date */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3 relative z-10">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#da0037]/15 text-[#ff4d6d] text-xs font-mono font-semibold border border-[#da0037]/30">
                        <Award className="w-3 h-3" />
                        {item.highlightTag}
                      </span>
                      <div className="flex items-center gap-1.5 text-xs text-white/50 font-mono">
                        <Calendar className="w-3.5 h-3.5 text-[#00f2fe]" />
                        <span>
                          {item.date.day} {item.date.month} {item.date.year}
                        </span>
                      </div>
                    </div>

                    {/* Milestone Title */}
                    <h3 className="font-heading font-bold text-xl sm:text-2xl text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-[#00f2fe] transition-all">
                      {item.title}
                    </h3>

                    {/* Organization Pill */}
                    <div className="flex items-center gap-1.5 mt-1.5 text-xs font-sans text-[#00f2fe]">
                      <Building className="w-3.5 h-3.5" />
                      <span className="font-medium">{item.organization}</span>
                    </div>

                    {/* Interactive Image Preview with Zoom */}
                    <div
                      onClick={() => setActiveModalIndex(index)}
                      data-cursor="INSPECT"
                      className="relative mt-4 aspect-[16/10] rounded-2xl overflow-hidden bg-black/60 border border-white/10 cursor-pointer group/img shadow-md"
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover object-center transition-transform duration-500 group-hover/img:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="text-xs font-mono font-semibold tracking-wider text-white uppercase bg-[#da0037]/90 px-3.5 py-1.5 rounded-full backdrop-blur-sm flex items-center gap-2 shadow-lg">
                          <ExternalLink className="w-3.5 h-3.5" /> View Photo
                        </span>
                      </div>
                    </div>

                    {/* Description Text */}
                    <p className="mt-4 text-xs sm:text-sm text-white/75 font-sans leading-relaxed">
                      {item.description}
                    </p>

                    {/* Tags */}
                    {item.tags && item.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-white/5">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/5 text-white/60 border border-white/5"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Photo Modal with Next / Prev Controls */}
      <AnimatePresence>
        {activeItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex items-center justify-center p-3 sm:p-6"
            onClick={() => setActiveModalIndex(null)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full glass-panel rounded-3xl overflow-hidden border border-white/20 shadow-2xl p-4 sm:p-7 bg-[#0b0b14]"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveModalIndex(null)}
                className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Prev / Next Buttons */}
              <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-black/60 hover:bg-white/20 text-white transition-colors border border-white/10"
                aria-label="Previous photo"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-black/60 hover:bg-white/20 text-white transition-colors border border-white/10"
                aria-label="Next photo"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Main Photo Canvas */}
              <div className="rounded-2xl overflow-hidden max-h-[62vh] bg-black/80 flex items-center justify-center border border-white/10">
                <img
                  src={activeItem.image}
                  alt={activeItem.title}
                  className="w-full h-full max-h-[62vh] object-contain"
                />
              </div>

              {/* Captions & Metadata */}
              <div className="mt-5">
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-[#ff4d6d]">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-white">
                      {activeItem.date.day} {activeItem.date.month} {activeItem.date.year}
                    </span>
                    <span>•</span>
                    <span className="text-[#00f2fe]">{activeItem.organization}</span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-white/10 text-white/70">
                    {activeModalIndex! + 1} of {filteredMilestones.length}
                  </span>
                </div>
                <h3 className="font-heading font-bold text-xl sm:text-2xl text-white mt-1.5">
                  {activeItem.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-white/80 font-sans leading-relaxed">
                  {activeItem.description}
                </p>

                {activeItem.tags && (
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {activeItem.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-white/60"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
