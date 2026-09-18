import React from 'react';
import { CustomCursor } from './components/ui/CustomCursor';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { ImpactMetrics } from './components/sections/ImpactMetrics';
import { About } from './components/sections/About';
import { ExperienceTimeline } from './components/sections/ExperienceTimeline';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { BrandStatement } from './components/sections/BrandStatement';
import { GitHubShowcase } from './components/sections/GitHubShowcase';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/layout/Footer';

export const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-[#07070a] text-[#ededed] font-sans selection:bg-[#da0037] selection:text-white">
      {/* Desktop Custom Cursor */}
      <CustomCursor />

      {/* Floating Navigation Bar */}
      <Navbar />

      {/* Main Flow */}
      <main>
        <Hero />
        <ImpactMetrics />
        <About />
        <ExperienceTimeline />
        <Skills />
        <Projects />
        <BrandStatement />
        <GitHubShowcase />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
