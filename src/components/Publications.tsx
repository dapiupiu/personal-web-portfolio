'use client';

import { useState } from 'react';
import { BookOpen, ExternalLink, Copy, Check, Award, FileText } from 'lucide-react';
import { PUBLICATIONS_DATA, Publication } from '@/data/portfolioData';

export default function Publications() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copyCitation = (pub: Publication) => {
    const citationText = `${pub.authors} "${pub.title}." ${pub.journal} (${pub.year}).`;
    navigator.clipboard.writeText(citationText);
    setCopiedId(pub.id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  return (
    <section id="publications" className="py-20 relative bg-slate-50/50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-sky-400">
              // 05. RESEARCH & PUBLICATIONS
            </span>
            <h2 className="text-3xl font-extrabold text-white tracking-tight mt-1">
              Peer-Reviewed Publications
            </h2>
            <p className="text-slate-400 text-base max-w-2xl mt-2">
              Academic research contributions published as First Author in peer-reviewed national computer science and engineering journals.
            </p>
          </div>

          <div className="mt-4 md:mt-0 inline-flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-sky-500/10 text-sky-300 text-xs font-mono font-semibold border border-sky-500/20">
            <Award className="w-4 h-4 text-sky-400" />
            <span>2 Papers • First Author</span>
          </div>
        </div>

        {/* Publication Cards Grid - Editorial Academic Citation Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PUBLICATIONS_DATA.map((pub: Publication) => (
            <div
              key={pub.id}
              className="p-6 sm:p-8 rounded-2xl bg-slate-900/70 border border-slate-800 border-l-4 border-l-sky-500 glow-card flex flex-col justify-between"
            >
              <div className="space-y-4">
                
                {/* Header Badge */}
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-sky-500/10 text-sky-300 border border-sky-500/20">
                    First Author
                  </span>
                  <span className="text-xs font-mono font-semibold text-slate-400">
                    {pub.year}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white leading-snug">
                  {pub.title}
                </h3>

                {/* Journal Info Box */}
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 font-mono text-xs text-slate-300">
                  <div className="font-semibold text-sky-400">{pub.journal}</div>
                  <div className="text-slate-400 mt-1">{pub.authors}</div>
                </div>

                {/* Abstract */}
                <p className="text-sm text-slate-300 leading-relaxed">
                  {pub.abstract}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {pub.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-800 text-slate-400"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="pt-6 mt-6 border-t border-slate-800 flex items-center justify-between">
                <a
                  href={pub.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-xs font-semibold text-sky-400 hover:text-sky-300 transition-colors"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>View Publication</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <button
                  onClick={() => copyCitation(pub)}
                  className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium border border-slate-700 transition-colors"
                  title="Copy formatted citation"
                >
                  {copiedId === pub.id ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400 font-semibold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Citation</span>
                    </>
                  )}
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
