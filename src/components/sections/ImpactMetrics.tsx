import React from 'react';
import { motion } from 'framer-motion';
import { IMPACT_METRICS } from '../../data/portfolioData';

export const ImpactMetrics: React.FC = () => {
  return (
    <section className="relative z-10 py-10 px-4 max-w-6xl mx-auto -mt-6">
      <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/10 shadow-2xl relative overflow-hidden">
        {/* Subtle decorative glow */}
        <div className="absolute top-0 right-0 w-64 h-32 bg-[#da0037]/10 blur-3xl pointer-events-none" />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 divide-y md:divide-y-0 md:divide-x divide-white/5">
          {IMPACT_METRICS.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`flex flex-col items-center text-center ${
                index > 0 ? 'pt-4 md:pt-0 md:pl-6' : ''
              }`}
            >
              <span className="font-heading font-extrabold text-3xl sm:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-white via-[#ededed] to-[#da0037]">
                {metric.value}
              </span>
              <span className="mt-1 font-heading font-semibold text-sm sm:text-base text-white/90">
                {metric.label}
              </span>
              <span className="mt-0.5 text-xs text-white/50 font-sans max-w-[180px]">
                {metric.detail}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
