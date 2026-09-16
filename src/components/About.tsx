'use client';

import { GraduationCap, Award, BookCheck, ShieldCheck } from 'lucide-react';
import { PERSONAL_INFO } from '@/data/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-20 relative bg-slate-50/50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="mb-8">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-teal-400">
            // 01. ACADEMIC PROFILE
          </span>
          <h2 className="text-3xl font-extrabold text-white tracking-tight mt-1">
            About & Background
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main About Text Box (7 cols) - Editorial Left Accent Style */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 border-l-4 border-l-teal-500 shadow-xl flex flex-col justify-between">
            <div className="space-y-4 text-slate-300 leading-relaxed text-base sm:text-lg">
              <p>
                I am a final-year <strong className="text-white font-semibold">Computer Science undergraduate</strong> at {PERSONAL_INFO.university}, maintaining a <strong className="text-teal-400 font-semibold">GPA of {PERSONAL_INFO.gpa}</strong> with expected graduation in {PERSONAL_INFO.expectedGraduation}.
              </p>
              <p>
                My core interest lies in <strong className="text-slate-900 dark:text-white font-semibold">machine learning, statistical analysis, and feature engineering</strong>. Through capstone leadership and research initiatives, I build predictive modeling pipelines and automated NLP classification systems with rigorous data assessment and outlier handling.
              </p>
              <p>
                As a recipient of the merit- and leadership-based <strong className="text-amber-600 dark:text-amber-400 font-semibold">{PERSONAL_INFO.scholarship}</strong>, I actively balance academic rigor with community engagement, including field relief operations and structured monthly reporting.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center gap-3">
              <span className="px-3 py-1 rounded-md bg-teal-500/10 text-teal-700 dark:text-teal-300 font-mono text-xs font-semibold">
                Predictive Modeling
              </span>
              <span className="px-3 py-1 rounded-md bg-sky-500/10 text-sky-700 dark:text-sky-300 font-mono text-xs font-semibold">
                Statistical Analysis
              </span>
              <span className="px-3 py-1 rounded-md bg-amber-500/10 text-amber-700 dark:text-amber-300 font-mono text-xs font-semibold">
                CRISP-DM Framework
              </span>
              <span className="px-3 py-1 rounded-md bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 font-mono text-xs font-semibold">
                NLP Classification
              </span>
            </div>
          </div>

          {/* Key Quick Cards (5 cols) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            
            {/* Card 1: Education */}
            <div className="glass-panel p-5 rounded-xl border border-slate-200 dark:border-slate-800 flex items-start space-x-4">
              <div className="p-3 rounded-xl bg-teal-500/10 text-teal-600 dark:text-teal-400 shrink-0">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  Degree & Institution
                </h3>
                <p className="text-base font-bold text-slate-900 dark:text-white mt-0.5">
                  B.S. in Computer Science
                </p>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                  UIN Sumatera Utara • Expected Jul 2027
                </p>
                <div className="inline-block mt-2 px-2.5 py-0.5 rounded bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 text-xs font-mono font-bold">
                  GPA: 3.71 / 4.00
                </div>
              </div>
            </div>

            {/* Card 2: Scholarship */}
            <div className="glass-panel p-5 rounded-xl border border-slate-200 dark:border-slate-800 flex items-start space-x-4">
              <div className="p-3 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  Scholarship Honor
                </h3>
                <p className="text-base font-bold text-slate-900 dark:text-white mt-0.5">
                  Bright Scholarship Awardee
                </p>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                  Batch 9 • Dec 2024 – Present
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1.5 italic">
                  Merit & leadership program with monthly community projects
                </p>
              </div>
            </div>

            {/* Card 3: Research Contributions */}
            <div className="glass-panel p-5 rounded-xl border border-slate-200 dark:border-slate-800 flex items-start space-x-4">
              <div className="p-3 rounded-xl bg-sky-500/10 text-sky-600 dark:text-sky-400 shrink-0">
                <BookCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  Research Peer Review
                </h3>
                <p className="text-base font-bold text-slate-900 dark:text-white mt-0.5">
                  2 Published Papers (First Author)
                </p>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                  NLP Weak Supervision & SDLC Recruitment System
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
