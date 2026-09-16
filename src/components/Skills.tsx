'use client';

import { Code, BrainCircuit, Library, Wrench, CheckCircle2 } from 'lucide-react';
import { SKILLS_DATA, SkillCategory } from '@/data/portfolioData';

const iconMap: Record<string, React.ElementType> = {
  Code,
  BrainCircuit,
  Library,
  Wrench
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-left mb-12">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-teal-400">
            // 02. COMPETENCIES
          </span>
          <h2 className="text-3xl font-extrabold text-white tracking-tight mt-1">
            Technical Skills & Tools
          </h2>
          <p className="text-slate-400 text-base max-w-2xl mt-2">
            Core competencies across programming, machine learning frameworks, data engineering tools, and analytical methodologies.
          </p>
        </div>

        {/* 4 Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILLS_DATA.map((cat: SkillCategory) => {
            const IconComponent = iconMap[cat.iconName] || Code;
            return (
              <div
                key={cat.category}
                className="bg-slate-900/70 p-6 rounded-2xl border border-slate-800 hover:border-slate-700 glow-card flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center space-x-3 pb-4 mb-4 border-b border-slate-800">
                    <div className="p-2.5 rounded-xl bg-teal-500/10 text-teal-400 border border-teal-500/20">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-white">
                      {cat.category}
                    </h3>
                  </div>

                  {/* Skill Badges List */}
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
                      <div
                        key={skill}
                        className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700/60 text-xs font-semibold text-slate-200 hover:border-teal-500/40 hover:text-teal-300 transition-colors"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-800 text-[11px] font-mono text-slate-400 flex justify-between">
                  <span>{cat.skills.length} core items</span>
                  <span className="text-teal-400 font-semibold">{cat.category}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
