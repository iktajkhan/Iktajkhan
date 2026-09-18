import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, ExternalLink } from 'lucide-react';
import { PROJECTS, ProjectItem } from '../../data/portfolioData';

export const Projects: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<ProjectItem | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const categories = ['All', 'Commercial Video', 'Motion & 3D', 'Brand Campaign'];

  const filteredProjects = activeFilter === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="relative py-28 px-4 sm:px-6 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 mb-3">
          <span className="text-xs font-mono text-[#00f2fe] tracking-wider uppercase font-semibold">
            // 04 • CINEMATIC REEL & WORK
          </span>
        </div>
        <h2 className="font-heading font-black text-4xl sm:text-6xl text-white tracking-tight">
          Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f2fe] via-[#4facfe] to-[#da0037]">Projects</span>
        </h2>
        <p className="mt-3 text-sm sm:text-base text-white/60 max-w-xl font-sans">
          Commercial edits, promotional campaigns, 3D animations, and native video productions.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-14">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-200 ${
              activeFilter === cat
                ? 'bg-[#00f2fe] text-black shadow-lg shadow-[#00f2fe]/30 font-bold'
                : 'glass-panel text-white/60 hover:text-white hover:border-white/20'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Showcase Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => {
          const isFeatured = project.featured;
          return (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={`glass-panel rounded-3xl overflow-hidden border border-white/10 hover:border-[#da0037]/50 transition-all duration-500 group flex flex-col justify-between ${
                isFeatured ? 'md:col-span-2 lg:col-span-2' : ''
              }`}
            >
              {/* Media Preview Box */}
              <div
                onClick={() => setSelectedVideo(project)}
                data-cursor="PLAY"
                className="relative aspect-video w-full bg-black/60 overflow-hidden cursor-pointer group/media"
              >
                {/* Thumbnail: YouTube HQ thumbnail or Video poster */}
                {project.youtubeId ? (
                  <img
                    src={`https://img.youtube.com/vi/${project.youtubeId}/maxresdefault.jpg`}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover/media:scale-105"
                    loading="lazy"
                    onError={(e) => {
                      // Fallback to hqdefault if maxresdefault doesn't exist
                      (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${project.youtubeId}/hqdefault.jpg`;
                    }}
                  />
                ) : project.videoSrc ? (
                  <div className="w-full h-full relative">
                    <video
                      src={project.videoSrc}
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover"
                      onMouseEnter={(e) => (e.target as HTMLVideoElement).play()}
                      onMouseLeave={(e) => (e.target as HTMLVideoElement).pause()}
                    />
                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-[10px] font-mono text-white/80 border border-white/10">
                      Hover to Preview
                    </div>
                  </div>
                ) : null}

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#07070a] via-black/20 to-transparent" />

                {/* Central Glowing Play Trigger Button */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-14 h-14 rounded-full bg-[#da0037]/90 text-white flex items-center justify-center shadow-[0_0_25px_rgba(218,0,55,0.8)] transform group-hover/media:scale-110 transition-transform">
                    <Play className="w-6 h-6 fill-white ml-0.5" />
                  </div>
                </div>

                {/* Top Corner Project Number Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full glass-panel text-xs font-mono text-white/70 border border-white/10">
                  #{project.number} • {project.category}
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-6 sm:p-7 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="font-heading font-bold text-xl sm:text-2xl text-white group-hover:text-[#da0037] transition-colors">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm text-white/70 font-sans leading-relaxed">
                    {project.description}
                  </p>

                  {/* Optional Quote from Old Version */}
                  {project.quote && (
                    <blockquote className="mt-3 pl-3 border-l-2 border-[#00f2fe] italic text-xs text-white/60 font-sans">
                      "{project.quote}"
                    </blockquote>
                  )}
                </div>

                {/* Tech Chips */}
                <div className="mt-6 pt-4 border-t border-white/5 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 rounded-full bg-white/[0.04] text-[10px] font-mono text-white/60 border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => setSelectedVideo(project)}
                    className="inline-flex items-center gap-1 text-xs font-mono text-[#da0037] hover:text-[#ff1a4f] font-semibold transition-colors"
                  >
                    <span>Watch Reel</span>
                    <ExternalLink className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Cinema Modal Viewer */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-8"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl glass-panel rounded-3xl overflow-hidden border border-white/20 shadow-2xl p-4 sm:p-6"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-white/10 hover:bg-[#da0037] text-white transition-colors"
                aria-label="Close Cinema Player"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Video Player Container */}
              <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-black shadow-2xl">
                {selectedVideo.youtubeId ? (
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${selectedVideo.youtubeId}?autoplay=1&rel=0`}
                    title={selectedVideo.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                ) : selectedVideo.videoSrc ? (
                  <video
                    src={selectedVideo.videoSrc}
                    controls
                    autoPlay
                    playsInline
                    className="w-full h-full object-contain"
                  />
                ) : null}
              </div>

              {/* Project Meta Information */}
              <div className="mt-5">
                <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[#da0037]">
                  <span>#{selectedVideo.number}</span>
                  <span>•</span>
                  <span>{selectedVideo.category}</span>
                </div>
                <h3 className="font-heading font-bold text-2xl sm:text-3xl text-white mt-1">
                  {selectedVideo.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-white/70 font-sans leading-relaxed">
                  {selectedVideo.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {selectedVideo.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full bg-white/5 text-xs font-mono text-white/70 border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
