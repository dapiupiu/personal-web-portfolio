'use client';

import { MapPin, Mail, FileText, ArrowRight, BookOpen, Award, BarChart3, Database } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/SocialIcons';
import { PERSONAL_INFO } from '@/data/portfolioData';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] pt-28 pb-16 flex items-center justify-center bg-grid-pattern overflow-hidden">
      {/* Background Decorative Glow Elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-teal-500/10 dark:bg-teal-500/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-sky-500/10 dark:bg-sky-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Content Column (8 cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Location & Availability Badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/60 text-xs font-medium text-slate-300 backdrop-blur-md shadow-sm">
              <MapPin className="w-3.5 h-3.5 text-teal-400" />
              <span>{PERSONAL_INFO.location}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
              <span className="text-teal-400 font-semibold">Open for Internships & Entry-Level Roles</span>
            </div>

            {/* Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              {PERSONAL_INFO.name}
            </h1>

            {/* Tagline */}
            <div className="inline-block px-3 py-1.5 rounded-md bg-teal-500/10 border border-teal-500/20 text-teal-300 font-mono text-sm sm:text-base font-semibold">
              {PERSONAL_INFO.roleTagline}
            </div>

            {/* One-line subhead */}
            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl leading-relaxed font-normal">
              {PERSONAL_INFO.subhead}
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href={PERSONAL_INFO.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-semibold shadow-lg shadow-teal-600/20 hover:shadow-teal-500/30 transition-all transform hover:-translate-y-0.5"
              >
                <FileText className="w-4 h-4" />
                <span>Download CV (PDF)</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 dark:hover:bg-slate-700 text-white font-semibold border border-slate-700/50 shadow-md transition-all transform hover:-translate-y-0.5"
              >
                <span>Contact Me</span>
                <ArrowRight className="w-4 h-4 text-teal-400" />
              </a>
            </div>

            {/* Social & Contact Links */}
            <div className="pt-4 flex items-center space-x-4 text-slate-600 dark:text-slate-400">
              <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">Connect:</span>
              <div className="flex items-center space-x-3">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800/80 hover:bg-teal-500/10 hover:text-teal-600 dark:hover:text-teal-400 border border-slate-200 dark:border-slate-700/60 transition-colors"
                  aria-label="GitHub Profile"
                  title="GitHub: dapiupiu"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800/80 hover:bg-teal-500/10 hover:text-teal-600 dark:hover:text-teal-400 border border-slate-200 dark:border-slate-700/60 transition-colors"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn: kakadavidharmawan"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800/80 hover:bg-teal-500/10 hover:text-teal-600 dark:hover:text-teal-400 border border-slate-200 dark:border-slate-700/60 transition-colors"
                  aria-label="Send Email"
                  title={`Email: ${PERSONAL_INFO.email}`}
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column (5 cols): Visual Quick Metrics Card */}
          <div className="lg:col-span-5">
            <div className="relative p-6 sm:p-8 rounded-2xl glass-panel glow-card border border-slate-200 dark:border-slate-800 shadow-xl space-y-6">
              
              <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-emerald-500" />
                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-widest font-semibold">
                    Data Science Profile Summary
                  </span>
                </div>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-teal-500/10 text-teal-600 dark:text-teal-400 border border-teal-500/20">
                  UINSU CS 2027
                </span>
              </div>

              {/* Stat Grid */}
              <div className="grid grid-cols-2 gap-4">
                
                {/* Stat 1: Publications */}
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800">
                  <div className="flex items-center space-x-2 text-teal-600 dark:text-teal-400 mb-1">
                    <BookOpen className="w-4 h-4" />
                    <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">Research</span>
                  </div>
                  <div className="text-2xl font-extrabold text-slate-900 dark:text-white">2 Papers</div>
                  <div className="text-[11px] text-teal-600 dark:text-teal-400 font-medium mt-0.5">First Author (2025, 2026)</div>
                </div>

                {/* Stat 2: GPA */}
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800">
                  <div className="flex items-center space-x-2 text-amber-600 dark:text-amber-400 mb-1">
                    <Award className="w-4 h-4" />
                    <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">Academic Standing</span>
                  </div>
                  <div className="text-2xl font-extrabold text-slate-900 dark:text-white">3.71 / 4.00</div>
                  <div className="text-[11px] text-amber-600 dark:text-amber-400 font-medium mt-0.5">Bright Scholarship Awardee</div>
                </div>

                {/* Stat 3: Model Accuracy Metric */}
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800">
                  <div className="flex items-center space-x-2 text-sky-600 dark:text-sky-400 mb-1">
                    <BarChart3 className="w-4 h-4" />
                    <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">EduPredict AI</span>
                  </div>
                  <div className="text-2xl font-extrabold text-slate-900 dark:text-white">91.23%</div>
                  <div className="text-[11px] text-sky-600 dark:text-sky-400 font-medium mt-0.5">Accuracy (TensorFlow)</div>
                </div>

                {/* Stat 4: Data Processing */}
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800">
                  <div className="flex items-center space-x-2 text-indigo-600 dark:text-indigo-400 mb-1">
                    <Database className="w-4 h-4" />
                    <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">Data Scope</span>
                  </div>
                  <div className="text-2xl font-extrabold text-slate-900 dark:text-white">6,600+</div>
                  <div className="text-[11px] text-indigo-600 dark:text-indigo-400 font-medium mt-0.5">Records Cleaned & Modeled</div>
                </div>

              </div>

              {/* Code Snippet Pill */}
              <div className="p-3 rounded-lg bg-slate-900 text-slate-300 font-mono text-xs border border-slate-800 space-y-1">
                <div className="text-slate-500">// Primary Focus & Methodology</div>
                <div className="text-teal-400">
                  import <span className="text-white">MachineLearning, NLP, CRISP_DM</span>
                </div>
                <div className="text-slate-400">
                  status = <span className="text-amber-300">&quot;Ready for Data Science Internship & Entry-Level Roles&quot;</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
