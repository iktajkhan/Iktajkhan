import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Send, CheckCircle, Copy, ExternalLink } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '../../data/portfolioData';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Commercial Video',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Trigger celebratory confetti
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.7 },
      colors: ['#da0037', '#00f2fe', '#ffffff'],
    });

    setIsSubmitted(true);

    // Open native mail client with pre-filled message
    const subject = encodeURIComponent(`[Portfolio Inquiry] ${formData.projectType} from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nProject Type: ${formData.projectType}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
  };

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(label);
    setTimeout(() => setCopiedField(null), 2500);
  };

  return (
    <section id="contact" className="relative py-28 px-4 sm:px-6 max-w-7xl mx-auto">
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#da0037]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-[#00f2fe]/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-20">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 mb-3">
          <span className="text-xs font-mono text-[#da0037] tracking-wider uppercase font-semibold">
            // 05 • START A CONVERSATION
          </span>
        </div>
        <h2 className="font-heading font-black text-4xl sm:text-6xl text-white tracking-tight">
          Let's Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#da0037] via-[#ff2a5f] to-[#00f2fe]">Something</span>
        </h2>
        <p className="mt-3 text-sm sm:text-base text-white/60 max-w-xl font-sans">
          Whether you need high-impact commercial video editing, 3D visual animation, or strategic university funnel growth, let's connect.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Column: Direct Verified Contact Channels */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <h3 className="font-heading font-bold text-2xl text-white">
              Direct Channels
            </h3>
            <p className="text-sm text-white/70 font-sans leading-relaxed">
              Reach out directly via email, phone, or verified social networks.
            </p>

            {/* Email Card */}
            <div className="glass-panel rounded-2xl p-4 border border-white/10 flex items-center justify-between group hover:border-[#da0037]/40 transition-colors">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-[#da0037]/15 border border-[#da0037]/30 flex items-center justify-center text-[#da0037]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase text-white/50 block">
                    Email Address
                  </span>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="font-mono text-sm text-white hover:text-[#da0037] transition-colors"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>
              <button
                onClick={() => copyToClipboard(PERSONAL_INFO.email, 'email')}
                className="p-2 text-white/40 hover:text-white transition-colors"
                title="Copy email address"
              >
                {copiedField === 'email' ? (
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Phone Card */}
            <div className="glass-panel rounded-2xl p-4 border border-white/10 flex items-center justify-between group hover:border-[#00f2fe]/40 transition-colors">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-[#00f2fe]/15 border border-[#00f2fe]/30 flex items-center justify-center text-[#00f2fe]">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase text-white/50 block">
                    Phone &amp; WhatsApp
                  </span>
                  <a
                    href={`tel:${PERSONAL_INFO.phoneClean}`}
                    className="font-mono text-sm text-white hover:text-[#00f2fe] transition-colors"
                  >
                    {PERSONAL_INFO.phone}
                  </a>
                </div>
              </div>
              <button
                onClick={() => copyToClipboard(PERSONAL_INFO.phone, 'phone')}
                className="p-2 text-white/40 hover:text-white transition-colors"
                title="Copy phone number"
              >
                {copiedField === 'phone' ? (
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>

          {/* Verified Social Media Row */}
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-white/50 block mb-3">
              // VERIFIED SOCIAL PROFILES
            </span>
            <div className="flex flex-wrap gap-3">
              {/* LinkedIn */}
              <a
                href={PERSONAL_INFO.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="LINKEDIN"
                className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl glass-panel border border-white/10 hover:border-blue-500/50 hover:bg-blue-500/10 transition-all text-xs font-heading font-semibold text-white group"
              >
                <img
                  src="/assets/images/linkedin.png"
                  alt="LinkedIn"
                  className="w-4 h-4 object-contain"
                />
                <span>LinkedIn</span>
                <ExternalLink className="w-3 h-3 text-white/40 group-hover:text-white" />
              </a>

              {/* Facebook */}
              <a
                href={PERSONAL_INFO.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="FACEBOOK"
                className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl glass-panel border border-white/10 hover:border-blue-600/50 hover:bg-blue-600/10 transition-all text-xs font-heading font-semibold text-white group"
              >
                <img
                  src="/assets/images/facebook.png"
                  alt="Facebook"
                  className="w-4 h-4 object-contain"
                />
                <span>Facebook</span>
                <ExternalLink className="w-3 h-3 text-white/40 group-hover:text-white" />
              </a>

              {/* GitHub */}
              <a
                href={PERSONAL_INFO.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="GITHUB"
                className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl glass-panel border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all text-xs font-heading font-semibold text-white group"
              >
                <img
                  src="/assets/images/github-white.png"
                  alt="GitHub"
                  className="w-4 h-4 object-contain"
                />
                <span>GitHub</span>
                <ExternalLink className="w-3 h-3 text-white/40 group-hover:text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Functional Message Dispatcher Form */}
        <div className="lg:col-span-7">
          <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-white/10 shadow-2xl relative">
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center mb-4">
                  <CheckCircle className="w-8 h-8 text-emerald-400" />
                </div>
                <h3 className="font-heading font-bold text-2xl text-white">
                  Message Prepared &amp; Dispatched!
                </h3>
                <p className="mt-2 text-sm text-white/70 font-sans max-w-md">
                  Thank you for reaching out. Your default email client has been triggered to send this inquiry directly to{' '}
                  <strong className="text-white">{PERSONAL_INFO.email}</strong>.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-6 px-6 py-2.5 rounded-full text-xs font-mono font-semibold uppercase tracking-wider text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase tracking-wider text-white/60">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-2xl bg-white/[0.03] border border-white/10 focus:border-[#da0037] focus:outline-none text-white text-sm transition-colors"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase tracking-wider text-white/60">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. sarah@company.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-2xl bg-white/[0.03] border border-white/10 focus:border-[#da0037] focus:outline-none text-white text-sm transition-colors"
                    />
                  </div>
                </div>

                {/* Project Type Dropdown */}
                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase tracking-wider text-white/60">
                    Project Type
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) =>
                      setFormData({ ...formData, projectType: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-2xl bg-[#0f1017] border border-white/10 focus:border-[#da0037] focus:outline-none text-white text-sm transition-colors"
                  >
                    <option value="Commercial Video">Commercial Video Editing</option>
                    <option value="3D Motion & Visuals">3D Motion &amp; Visuals (Blender)</option>
                    <option value="Graphic Design & Branding">Graphic Design &amp; Branding</option>
                    <option value="University Funnel Strategy">University Funnel &amp; Growth Strategy</option>
                    <option value="General Collaboration">General Collaboration</option>
                  </select>
                </div>

                {/* Message Textarea */}
                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase tracking-wider text-white/60">
                    Your Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell me about your goals, timeline, and vision..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-2xl bg-white/[0.03] border border-white/10 focus:border-[#da0037] focus:outline-none text-white text-sm transition-colors resize-none"
                  />
                </div>

                {/* Submit CTA */}
                <button
                  type="submit"
                  data-cursor="SUBMIT"
                  className="w-full py-4 rounded-2xl text-sm font-heading font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#da0037] to-[#b0002c] hover:from-[#ff1a4f] hover:to-[#da0037] shadow-xl shadow-[#da0037]/30 transition-all hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
