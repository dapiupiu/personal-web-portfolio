'use client';

import { ShieldCheck, Trophy, Award, Sparkles, CheckCircle2 } from 'lucide-react';
import { CERTIFICATIONS_DATA, HONORS_DATA } from '@/data/portfolioData';

export default function CertificationsHonors() {
  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Left Column: Certifications */}
          <div>
            <div className="mb-8">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-teal-400">
                // 06. ACCREDITATIONS
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-1">
                Certifications & Competencies
              </h2>
            </div>

            <div className="space-y-4">
              {CERTIFICATIONS_DATA.map((cert, idx) => (
                <div
                  key={idx}
                  className="bg-slate-900/70 p-5 rounded-xl border border-slate-800 glow-card flex items-start space-x-4"
                >
                  <div className="p-3 rounded-xl bg-teal-500/10 text-teal-400 border border-teal-500/20 shrink-0">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-semibold text-slate-400">
                        {cert.year}
                      </span>
                      <span className="px-2.5 py-0.5 rounded text-[10px] font-mono bg-teal-500/10 text-teal-300 border border-teal-500/20 font-bold">
                        {cert.badge}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-white mt-1">
                      {cert.title}
                    </h3>
                    <p className="text-xs text-slate-400 mt-0.5">
                      {cert.issuer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Honors & Hackathons */}
          <div>
            <div className="mb-8">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-amber-400">
                // 07. AWARDS & HACKATHONS
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-1">
                Honors & Competition Wins
              </h2>
            </div>

            <div className="space-y-4">
              {HONORS_DATA.map((honor, idx) => (
                <div
                  key={idx}
                  className="bg-slate-900/60 p-5 rounded-xl border border-slate-800 border-l-4 border-l-amber-500 glow-card flex items-start space-x-4"
                >
                  <div className="p-3 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20 shrink-0">
                    <Trophy className="w-6 h-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-semibold text-slate-400">
                        {honor.year}
                      </span>
                      <span className="px-2.5 py-0.5 rounded text-[10px] font-mono bg-amber-500/10 text-amber-300 border border-amber-500/20 font-bold">
                        {honor.badge}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-white mt-1">
                      {honor.title}
                    </h3>
                    <p className="text-xs font-medium text-amber-300 mt-0.5">
                      {honor.event}
                    </p>
                    <p className="text-xs text-slate-400 mt-1.5">
                      {honor.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
