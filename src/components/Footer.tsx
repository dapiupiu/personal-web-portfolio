'use client';

import { ArrowUp, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/SocialIcons';
import { PERSONAL_INFO } from '@/data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-slate-200 dark:border-slate-800 bg-slate-100/50 dark:bg-slate-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand & Tagline */}
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-teal-500 to-emerald-600 text-white font-black text-sm flex items-center justify-center shadow-md shadow-teal-500/20 tracking-tight">
              KD
            </div>
            <div>
              <span className="font-bold text-slate-900 dark:text-white text-base">
                Kaka Davi Dharmawan
              </span>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Data Scientist | Computer Science Undergraduate (UINSU)
              </p>
            </div>
          </div>

          {/* Copyright & Info */}
          <div className="text-center md:text-right text-xs text-slate-500 dark:text-slate-400 space-y-1">
            <p>© {new Date().getFullYear()} Kaka Davi Dharmawan. All rights reserved.</p>
            <p className="font-mono text-[11px] text-teal-600 dark:text-teal-400">
              Targeting Data Science Internships & Entry-Level Roles
            </p>
          </div>

          {/* Social Icons & Back to top */}
          <div className="flex items-center space-x-3">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-200/60 dark:bg-slate-800 hover:bg-teal-500/10 hover:text-teal-500 transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-200/60 dark:bg-slate-800 hover:bg-teal-500/10 hover:text-teal-500 transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-2 rounded-lg bg-slate-200/60 dark:bg-slate-800 hover:bg-teal-500/10 hover:text-teal-500 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-teal-600 hover:bg-teal-500 text-white shadow-md transition-colors"
              aria-label="Back to top"
              title="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
}
