import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Briefcase, ExternalLink, Github, Filter } from 'lucide-react';
import { PROJECTS } from '../data';
import { Project } from '../types';

export default function Projects() {
  const [filter, setFilter] = useState<'All' | 'Web3' | 'SaaS' | 'Frontend'>('All');

  const filteredProjects = PROJECTS.filter((p) => {
    if (filter === 'All') return true;
    return p.category === filter;
  });

  return (
    <section id="projects" className="relative py-20 md:py-28 px-4 sm:px-6 bg-gray-950 overflow-hidden">
      {/* Visual background decor */}
      <div className="absolute top-1/2 left-0 w-96 h-96 rounded-full bg-cyan-950/10 blur-3xl pointer-events-none animate-glow-2" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 font-mono text-[10px] uppercase tracking-wider"
          >
            <Briefcase size={12} />
            <span>03 . Projects</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-3xl md:text-5xl font-extrabold tracking-tight text-white"
          >
            Featured Engineering Work
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.2 }}
            className="mt-4 w-12 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full"
          />
        </div>

        {/* Categories Filtering Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 bg-gray-900/30 p-1.5 rounded-2xl border border-gray-800/40 backdrop-blur-sm max-w-md mx-auto">
          {(['All', 'Web3', 'SaaS', 'Frontend'] as const).map((cat) => {
            const is_active = filter === cat;
            return (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`relative px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all duration-300 cursor-pointer ${
                  is_active ? 'text-white' : 'text-gray-400 hover:text-gray-200'
                }`}
              >
                {is_active && (
                  <motion.span
                    layoutId="activeFilter"
                    className="absolute inset-0 bg-purple-500/20 border border-purple-500/30 rounded-xl"
                    transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                  />
                )}
                {cat}
              </button>
            );
          })}
        </div>

        {/* Projects Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={project.id}
                className="group relative flex flex-col justify-between h-full bg-gray-900/20 border border-gray-800/60 rounded-3xl overflow-hidden backdrop-blur-md hover:border-purple-500/30 shadow-lg transition-all duration-300"
              >
                {/* Project Image Frame */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent opacity-60 z-10" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <span className="absolute top-4 right-4 z-20 px-2.5 py-1 text-[10px] font-mono font-bold tracking-wider rounded-full bg-gray-950/80 text-purple-400 border border-purple-500/20 backdrop-blur-md">
                    {project.category}
                  </span>
                </div>

                {/* Project Info */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-xs md:text-sm text-gray-400 leading-relaxed font-sans line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  {/* Badges and tags */}
                  <div className="mt-6">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded font-mono text-[9px] font-semibold tracking-wider bg-gray-950/60 border border-gray-800/80 text-gray-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action Links */}
                    <div className="mt-6 pt-4 border-t border-gray-800/40 flex items-center gap-4">
                      <a
                        href={project.liveUrl}
                        className="flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-xl text-xs font-bold bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/20 text-purple-400 hover:text-purple-300 hover:scale-[1.02] transition-all duration-300"
                      >
                        <ExternalLink size={14} />
                        <span>Live Demo</span>
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-xl text-xs font-bold bg-gray-900 hover:bg-gray-800 border border-gray-800 hover:border-gray-700 text-gray-300 hover:text-white hover:scale-[1.02] transition-all duration-300"
                      >
                        <Github size={14} />
                        <span>GitHub</span>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
