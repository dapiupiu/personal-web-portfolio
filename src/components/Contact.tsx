'use client';

import { useState } from 'react';
import { Mail, Phone, Eye, EyeOff, Send, MapPin, CheckCircle2, Copy } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/SocialIcons';
import { PERSONAL_INFO } from '@/data/portfolioData';

export default function Contact() {
  const [showPhone, setShowPhone] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Mailto fallback trigger
    const mailtoSubject = encodeURIComponent(formData.subject || `Portfolio Contact from ${formData.name}`);
    const mailtoBody = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 relative bg-slate-50/50 dark:bg-slate-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left mb-14">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-teal-400">
            // 08. CONNECT
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-1">
            Get In Touch
          </h2>
          <p className="text-slate-400 text-base max-w-2xl mt-2">
            Interested in discussing Data Science internships, entry-level roles, or research collaborations? Feel free to reach out directly!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Details (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Email Card */}
            <div className="bg-slate-900/70 p-6 rounded-2xl border border-slate-800 glow-card space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="p-3 rounded-xl bg-teal-500/10 text-teal-400 border border-teal-500/20">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-400 font-semibold uppercase">
                      Direct Email
                    </span>
                    <h3 className="text-base font-bold text-white">
                      {PERSONAL_INFO.email}
                    </h3>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
                  title="Copy email address"
                >
                  {emailCopied ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="w-full inline-flex items-center justify-center space-x-2 py-2.5 px-4 rounded-xl bg-teal-600 hover:bg-teal-500 text-white text-xs font-semibold shadow-md transition-all"
              >
                <Mail className="w-4 h-4" />
                <span>Open Mail Client</span>
              </a>
            </div>

            {/* Phone Number Card (With Privacy Reveal Toggle) */}
            <div className="bg-slate-900/70 p-6 rounded-2xl border border-slate-800 glow-card space-y-3">
              <div className="flex items-center space-x-3">
                <div className="p-3 rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/20">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-400 font-semibold uppercase">
                    Phone Number
                  </span>
                  <div className="text-base font-bold text-white font-mono">
                    {showPhone ? PERSONAL_INFO.phone : '+62 852 6066 ••••'}
                  </div>
                </div>
              </div>

              <button
                onClick={() => setShowPhone(!showPhone)}
                className="w-full inline-flex items-center justify-center space-x-2 py-2 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700 transition-colors"
              >
                {showPhone ? (
                  <>
                    <EyeOff className="w-4 h-4 text-slate-400" />
                    <span>Hide Phone Number</span>
                  </>
                ) : (
                  <>
                    <Eye className="w-4 h-4 text-sky-400" />
                    <span>Click to Reveal Phone Number</span>
                  </>
                )}
              </button>
            </div>

            {/* Social Links & Location */}
            <div className="bg-slate-900/70 p-6 rounded-2xl border border-slate-800 space-y-4">
              <div className="flex items-center space-x-2 text-xs font-mono text-slate-400 uppercase">
                <MapPin className="w-3.5 h-3.5 text-teal-400" />
                <span>Based in {PERSONAL_INFO.location}</span>
              </div>

              <div className="pt-2 flex items-center space-x-3">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center space-x-2 py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold border border-slate-700 transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center space-x-2 py-2.5 px-4 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs font-semibold transition-colors"
                >
                  <LinkedinIcon className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form (7 cols) */}
          <div className="lg:col-span-7 bg-slate-900/80 p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-xl">
            <h3 className="text-xl font-bold text-white mb-2">
              Send a Direct Message
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              Fill out the form below to initiate an email to Kaka Davi Dharmawan.
            </p>

            {formSubmitted ? (
              <div className="p-6 rounded-xl bg-teal-500/10 border border-teal-500/30 text-teal-300 text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 mx-auto text-teal-400" />
                <h4 className="text-lg font-bold">Message Ready to Send!</h4>
                <p className="text-xs max-w-md mx-auto">
                  Your default email client has been opened with your message. If it did not open automatically, click the email link directly on the left.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="mt-2 text-xs font-semibold text-teal-400 underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Sarah Jenkins (Recruiter)"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-teal-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. sarah@techcompany.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-teal-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Data Scientist Internship Opportunity"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-teal-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Hello Kaka, I reviewed your EduPredict AI and NLP research work..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-teal-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center space-x-2 py-3 px-6 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-semibold text-sm shadow-md transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message via Email</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
