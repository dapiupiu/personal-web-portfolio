'use client';

import { Briefcase, Calendar, MapPin, CheckCircle, Award, BookOpen } from 'lucide-react';
import { EXPERIENCE_DATA, ExperienceItem } from '@/data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-left mb-14">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-teal-400">
            // 04. CAREER TIMELINE
          </span>
          <h2 className="text-3xl font-extrabold text-white tracking-tight mt-1">
            Experience & Academic Timeline
          </h2>
          <p className="text-slate-400 text-base max-w-2xl mt-2">
            Key roles across intensive data science cohorts, university laboratory instruction, and scholarship leadership.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-teal-500/30 ml-4 sm:ml-8 space-y-12 pl-6 sm:pl-10">
          {EXPERIENCE_DATA.map((item: ExperienceItem, idx: number) => {
            const isScholarship = item.type === 'scholarship';
            return (
              <div key={item.id} className="relative group">
                
                {/* Timeline Node Icon */}
                <div
                  className={`absolute -left-[31px] sm:-left-[47px] top-1.5 w-10 h-10 rounded-full border-4 border-slate-950 flex items-center justify-center transition-transform group-hover:scale-110 ${
                    isScholarship
                      ? 'bg-amber-500 text-white shadow-lg shadow-amber-500/20'
                      : 'bg-teal-600 text-white shadow-lg shadow-teal-500/20'
                  }`}
                >
                  {isScholarship ? (
                    <Award className="w-4 h-4" />
                  ) : (
                    <Briefcase className="w-4 h-4" />
                  )}
                </div>

                {/* Timeline Card */}
                <div className="bg-slate-900/60 p-6 sm:p-8 rounded-2xl border border-slate-800 glow-card">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 mb-4 border-b border-slate-800 gap-2">
                    <div>
                      <span className="text-xs font-mono font-semibold text-teal-400 uppercase tracking-widest">
                        {item.company}
                      </span>
                      <h3 className="text-xl font-bold text-white mt-0.5">
                        {item.role}
                      </h3>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 text-xs font-medium text-slate-400">
                      <span className="flex items-center space-x-1 px-2.5 py-1 rounded-md bg-slate-800">
                        <Calendar className="w-3.5 h-3.5 text-teal-400" />
                        <span>{item.period}</span>
                      </span>
                      <span className="flex items-center space-x-1 px-2.5 py-1 rounded-md bg-slate-800">
                        <MapPin className="w-3.5 h-3.5 text-teal-400" />
                        <span>{item.location}</span>
                      </span>
                    </div>
                  </div>

                  {/* Bullet Points */}
                  <ul className="space-y-3 text-sm sm:text-base text-slate-300">
                    {item.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start space-x-3">
                        <CheckCircle className="w-4 h-4 text-teal-400 shrink-0 mt-1" />
                        <span className="leading-relaxed">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
