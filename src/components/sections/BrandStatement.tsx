import React from 'react';
import { Sparkles, Quote } from 'lucide-react';

export const BrandStatement: React.FC = () => {
  return (
    <section className="relative py-24 px-4 sm:px-6 max-w-6xl mx-auto overflow-hidden">
      <div className="glass-panel rounded-3xl p-8 sm:p-14 border border-white/10 relative text-center overflow-hidden shadow-2xl">
        {/* Glow backdrop */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-[#da0037]/15 to-[#00f2fe]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center">
          {/* Subtle Label */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6">
            <Sparkles className="w-3.5 h-3.5 text-[#da0037]" />
            <span className="text-xs font-mono tracking-widest text-white/70 uppercase">
              // CREATIVE PHILOSOPHY
            </span>
          </div>

          {/* Large Kinetic Typography */}
          <div className="flex flex-wrap justify-center gap-x-4 sm:gap-x-8 gap-y-2 font-heading font-black text-3xl sm:text-5xl md:text-6xl text-white tracking-tight uppercase mb-8">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/80">
              CREATE.
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#da0037] to-[#ff2a5f]">
              STRATEGIZE.
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f2fe] to-[#4facfe]">
              ELEVATE.
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white/90 to-white/50">
              IMPACT.
            </span>
          </div>

          {/* Authentic Statement from Old Portfolio */}
          <div className="max-w-2xl mx-auto relative mt-2">
            <Quote className="w-8 h-8 text-[#da0037]/30 absolute -top-4 -left-4 pointer-events-none" />
            <p className="text-base sm:text-xl font-sans font-light italic text-white/85 leading-relaxed">
              "Dreams are always growing up by hope. This is the last thing that I cannot get rid of just because I believe in myself and my abilities."
            </p>
            <span className="inline-block mt-4 text-xs font-mono tracking-widest text-[#00f2fe] uppercase">
              — Md IkTaj Khan
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
