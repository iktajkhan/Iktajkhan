import React from 'react';
import { GitBranch, Code2, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

export const GitHubShowcase: React.FC = () => {
  return (
    <section className="relative py-20 px-4 sm:px-6 max-w-6xl mx-auto">
      <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-white/10 relative overflow-hidden shadow-2xl">
        {/* Glow */}
        <div className="absolute -bottom-10 right-0 w-80 h-80 bg-[#00f2fe]/10 blur-3xl pointer-events-none" />

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 mb-3">
              <Code2 className="w-3.5 h-3.5 text-[#00f2fe]" />
              <span className="text-xs font-mono text-[#00f2fe] tracking-wider uppercase font-semibold">
                // OPEN SOURCE & REPOSITORY
              </span>
            </div>
            <h3 className="font-heading font-black text-2xl sm:text-4xl text-white tracking-tight">
              Verified GitHub Repository
            </h3>
            <p className="mt-3 text-sm text-white/70 font-sans leading-relaxed">
              Explore the complete codebase and project history of this portfolio on GitHub, maintained by{' '}
              <span className="text-white font-semibold">{PERSONAL_INFO.shortName}</span>.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <a
                href={PERSONAL_INFO.socialLinks.repo}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="GITHUB"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-xs font-mono font-semibold uppercase tracking-wider text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all hover:scale-105"
              >
                <img
                  src="/assets/images/github-white.png"
                  alt="GitHub"
                  className="w-4 h-4 object-contain"
                />
                <span>View Repository</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href={PERSONAL_INFO.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-mono text-white/60 hover:text-white transition-colors"
              >
                <span>github.com/iktajkhan</span>
              </a>
            </div>
          </div>

          {/* Clean Repo Feature Card */}
          <div className="w-full md:w-80 glass-panel-glow rounded-2xl p-5 border border-white/10">
            <div className="flex items-center justify-between text-xs text-white/50 font-mono mb-2">
              <span className="flex items-center gap-1.5">
                <GitBranch className="w-3.5 h-3.5 text-[#da0037]" /> main
              </span>
              <span className="text-[#00f2fe]">public</span>
            </div>
            <h4 className="font-heading font-bold text-lg text-white">
              iktajkhan / Iktajkhan
            </h4>
            <p className="text-xs text-white/60 mt-1.5 font-sans">
              Personal portfolio codebase, media assets, project showcases, and career milestone tracking.
            </p>
            <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-white/50">
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-[#00f2fe]" /> TypeScript / Vite
              </span>
              <span>v2.0</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
