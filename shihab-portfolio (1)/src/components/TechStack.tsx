import { motion } from 'motion/react';
import { Layers, Terminal, Sparkles, Database, Shield, Orbit } from 'lucide-react';

const TECH_ITEMS = [
  {
    name: 'React',
    category: 'Frontend',
    color: 'from-cyan-500/20 to-cyan-500/10 border-cyan-500/30 text-cyan-400',
    icon: (
      <svg className="w-8 h-8" viewBox="-10.5 -9.45 21 18.9" fill="currentColor">
        <circle cx="0" cy="0" r="2" />
        <ellipse rx="10" ry="4.5" fill="none" stroke="currentColor" strokeWidth="1" />
        <ellipse rx="10" ry="4.5" fill="none" stroke="currentColor" strokeWidth="1" transform="rotate(60)" />
        <ellipse rx="10" ry="4.5" fill="none" stroke="currentColor" strokeWidth="1" transform="rotate(120)" />
      </svg>
    ),
    description: 'Component architecture, Hooks, Custom State'
  },
  {
    name: 'Solidity',
    category: 'Blockchain',
    color: 'from-indigo-500/20 to-indigo-500/10 border-indigo-500/30 text-indigo-400',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L4 7v10l8 5 8-5V7l-8-5z" />
        <path d="M12 22V12" />
        <path d="M12 12L4 7" />
        <path d="M12 12l8-5" />
        <path d="M4 17l8-5 8 5" />
      </svg>
    ),
    description: 'Smart contracts, Gas optimizations, Audits'
  },
  {
    name: 'Web3.js',
    category: 'Blockchain',
    color: 'from-sky-500/20 to-sky-500/10 border-sky-500/30 text-sky-400',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        <path d="M2 12h20" />
      </svg>
    ),
    description: 'Blockchain Node interactions, RPC integration'
  },
  {
    name: 'Ethereum',
    category: 'Blockchain',
    color: 'from-purple-500/20 to-purple-500/10 border-purple-500/30 text-purple-400',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 1.6L5.3 12.7l6.7 4 6.7-4L12 1.6zm0 16.3l-6.7-4 6.7 9.5 6.7-9.5-6.7 4z" />
      </svg>
    ),
    description: 'EVM protocols, DeFi, ERC20 & ERC721'
  },
  {
    name: 'Node.js',
    category: 'Backend',
    color: 'from-green-500/20 to-green-500/10 border-green-500/30 text-green-400',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L4 6.5v11L12 22l8-4.5v-11L12 2z" />
        <path d="M12 2v20" />
        <path d="M12 12H4" />
        <path d="M20 12h-8" />
      </svg>
    ),
    description: 'Scalable APIs, Express integration, Node scripts'
  },
  {
    name: 'JavaScript',
    category: 'Frontend',
    color: 'from-yellow-500/20 to-yellow-500/10 border-yellow-500/30 text-yellow-400',
    icon: (
      <span className="text-xl font-extrabold font-mono">JS</span>
    ),
    description: 'ES6+, Asynchronous flow, Functional programming'
  },
  {
    name: 'CSS3',
    category: 'Frontend',
    color: 'from-blue-500/20 to-blue-500/10 border-blue-500/30 text-blue-400',
    icon: (
      <span className="text-xl font-extrabold font-mono">C3</span>
    ),
    description: 'Tailwind, Grid, Flexbox, Fluid layouts'
  },
  {
    name: 'HTML5',
    category: 'Frontend',
    color: 'from-red-500/20 to-red-500/10 border-red-500/30 text-red-400',
    icon: (
      <span className="text-xl font-extrabold font-mono">H5</span>
    ),
    description: 'Semantic tags, Accessibility, SEO structure'
  }
];

export default function TechStack() {
  return (
    <section id="tech" className="relative py-20 md:py-28 px-4 sm:px-6 bg-gray-950/60 grid-bg">
      <div className="absolute inset-0 bg-radial-gradient(ellipse_at_top,rgba(168,85,247,0.06),transparent_50%) pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 font-mono text-[10px] uppercase tracking-wider"
          >
            <Terminal size={12} />
            <span>02 . Tech Stack</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-3xl md:text-5xl font-extrabold tracking-tight text-white"
          >
            Powering the Modern Stack
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.15 }}
            className="mt-3 text-sm text-gray-400 max-w-xl font-sans"
          >
            An overview of the core technologies I build with daily to bring fast, responsive, and secure decentralized web applications to life.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.2 }}
            className="mt-4 w-12 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full"
          />
        </div>

        {/* Stack Badges Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TECH_ITEMS.map((tech, idx) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className={`p-6 rounded-3xl bg-gradient-to-br ${tech.color} border backdrop-blur-sm flex flex-col justify-between h-44 group transition-all duration-300 shadow-md hover:shadow-purple-500/5`}
            >
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-2xl bg-gray-900/60 border border-gray-800/40 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center w-12 h-12">
                  {tech.icon}
                </div>
                <span className="font-mono text-[9px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-gray-900/60 border border-gray-800/40 text-gray-400">
                  {tech.category}
                </span>
              </div>
              <div>
                <h3 className="text-md font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
                  {tech.name}
                </h3>
                <p className="text-xs text-gray-400 mt-1 font-sans">
                  {tech.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
