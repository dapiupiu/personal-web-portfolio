'use client';

import { ExternalLink, Sparkles, TrendingUp, Layers, BookOpen, AlertCircle } from 'lucide-react';
import { GithubIcon } from '@/components/SocialIcons';
import { PROJECTS_DATA, Project } from '@/data/portfolioData';

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative z-10 bg-slate-50/50 dark:bg-slate-900/40 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-teal-400">
              // 03. FEATURED PROJECTS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-1">
              Featured Data & ML Projects
            </h2>
            <p className="text-slate-400 text-base max-w-2xl mt-2">
              Hands-on predictive modeling pipelines, NLP weak supervision systems, and quantitative evaluation architectures.
            </p>
          </div>

          <div className="mt-4 md:mt-0 flex items-center space-x-2 text-xs font-mono text-teal-400 bg-teal-500/10 px-3 py-1.5 rounded-lg border border-teal-500/20">
            <Sparkles className="w-3.5 h-3.5 text-teal-400" />
            <span>Metric-Driven & Reproducible</span>
          </div>
        </div>

        {/* Projects Cards List */}
        <div className="space-y-10">
          {PROJECTS_DATA.map((project: Project, idx: number) => (
            <div
              key={project.id}
              className="bg-slate-950/70 rounded-3xl p-6 sm:p-8 border border-slate-800 glow-card transition-all relative overflow-hidden"
            >
              {/* Top Meta Bar */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-6 border-b border-slate-800">
                <div className="flex items-center space-x-3">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-teal-500/10 text-teal-400 border border-teal-500/20">
                    Project 0{idx + 1}
                  </span>
                  <span className="text-xs font-semibold text-slate-400">
                    {project.period}
                  </span>
                </div>

                <div className="flex items-center space-x-2">
                  {project.isAcademicPrototype && (
                    <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-300 text-xs font-semibold border border-amber-500/20">
                      <AlertCircle className="w-3.5 h-3.5 text-amber-400" />
                      <span>Academic Prototype</span>
                    </span>
                  )}
                  {project.publicationText && (
                    <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-full bg-sky-500/10 text-sky-300 text-xs font-semibold border border-sky-500/20">
                      <BookOpen className="w-3.5 h-3.5 text-sky-400" />
                      <span className="hidden sm:inline">First Author Peer-Reviewed</span>
                    </span>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                {/* Left Content Column (7 cols) */}
                <div className="lg:col-span-7 space-y-4">
                  <h3 className="text-2xl font-bold text-white leading-tight">
                    {project.title}
                  </h3>

                  <div className="inline-block px-3 py-1 rounded-md bg-slate-800 text-slate-200 text-xs font-semibold font-mono border border-slate-700/60">
                    Role: {project.role}
                  </div>

                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="pt-2 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md bg-slate-800/80 text-slate-300 text-xs font-mono font-medium border border-slate-700/60"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Links */}
                  <div className="pt-4 flex flex-wrap items-center gap-4">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold border border-slate-700 transition-colors"
                      >
                        <GithubIcon className="w-4 h-4" />
                        <span>GitHub Repository</span>
                      </a>
                    )}

                    {project.publicationUrl && (
                      <a
                        href={project.publicationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-sky-600/10 hover:bg-sky-600/20 text-sky-300 text-xs font-semibold border border-sky-500/30 transition-colors"
                      >
                        <BookOpen className="w-4 h-4 text-sky-500" />
                        <span>View Publication</span>
                        <ExternalLink className="w-3.5 h-3.5 ml-1" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Right Metrics Column (5 cols) */}
                <div className="lg:col-span-5 p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4">
                  <div className="flex items-center space-x-2 pb-3 border-b border-slate-800 text-teal-400 font-mono text-xs font-semibold">
                    <TrendingUp className="w-4 h-4" />
                    <span>Model Evaluation Metrics</span>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    {project.metrics.map((m) => (
                      <div
                        key={m.label}
                        className={`p-3.5 rounded-xl border ${m.highlight
                            ? 'bg-teal-950/40 border-teal-500/40 text-teal-300'
                            : 'bg-slate-900/50 border-slate-800 text-slate-300'
                          }`}
                      >
                        <div className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">
                          {m.label}
                        </div>
                        <div className="text-2xl font-extrabold tracking-tight mt-1 text-white">
                          {m.value}
                        </div>
                      </div>
                    ))}
                  </div>

                  {project.publicationText && (
                    <div className="p-3 rounded-lg bg-sky-950/30 border border-sky-800/50 text-xs text-sky-200">
                      <strong>Peer-Reviewed Journal:</strong> {project.publicationText}
                    </div>
                  )}

                  {project.isAcademicPrototype && (
                    <div className="p-3 rounded-lg bg-amber-950/30 border border-amber-800/50 text-xs text-amber-200 flex items-start space-x-2">
                      <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span>
                        <strong>Note:</strong> Designed and validated as a functional academic prototype for research and thesis defense.
                      </span>
                    </div>
                  )}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
