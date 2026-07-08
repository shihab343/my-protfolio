import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, Code, ShieldCheck, Cpu, Terminal, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

export default function Hero() {
  const handleScrollTo = (e: React.MouseEvent<HTMLButtonElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 pt-28 pb-16 overflow-hidden bg-gray-950 grid-bg"
    >
      {/* Background radial gradient overlay to emphasize focal point */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_35%,rgba(139,92,246,0.18),transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_75%,rgba(34,211,238,0.07),transparent_45%)] pointer-events-none" />

      {/* Floating neon tech ambient elements */}
      <motion.div
        animate={{
          y: [0, -15, 0],
          x: [0, 8, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/4 left-[8%] hidden xl:flex items-center gap-2 p-3 rounded-2xl bg-gray-900/40 border border-purple-500/15 backdrop-blur-md"
      >
        <div className="w-2.5 h-2.5 rounded-full bg-purple-500 animate-pulse" />
        <span className="font-mono text-[10px] text-gray-400">ethers.js</span>
      </motion.div>

      <motion.div
        animate={{
          y: [0, 15, 0],
          x: [0, -8, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
        className="absolute bottom-1/4 right-[8%] hidden xl:flex items-center gap-2 p-3 rounded-2xl bg-gray-900/40 border border-cyan-500/15 backdrop-blur-md"
      >
        <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
        <span className="font-mono text-[10px] text-gray-400">Solidity.sol</span>
      </motion.div>

      {/* Content wrapper - Grid based layout */}
      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center pt-8">
        
        {/* Left Side: Elegant typography & info */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">
          {/* Tagline Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 font-mono text-[11px] uppercase tracking-wider mb-6 w-fit"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
            </span>
            <span>Web3 & Frontend Engineer</span>
          </motion.div>

          {/* Name Header with sophisticated typographic tracking */}
          <motion.div
            initial={{ y: 25, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.8 }}
          >
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tighter text-white font-sans leading-tight">
              HI, I'M <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">{PERSONAL_INFO.name.toUpperCase()}</span>
            </h1>
          </motion.div>

          {/* Subtitle & Bio Tagline */}
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-4 text-xl sm:text-2xl font-bold text-gray-200"
          >
            {PERSONAL_INFO.title}
          </motion.p>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-3 max-w-xl text-sm sm:text-base text-gray-400 leading-relaxed font-sans"
          >
            {PERSONAL_INFO.tagline}
          </motion.p>

          {/* Call To Action Buttons */}
          <motion.div
            initial={{ y: 25, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4"
          >
            <button
              onClick={(e) => handleScrollTo(e, 'contact')}
              className="group relative px-8 py-3.5 rounded-full text-xs font-bold tracking-wider text-white bg-gradient-to-r from-purple-600 to-cyan-500 overflow-hidden shadow-lg shadow-purple-500/20 hover:scale-105 active:scale-98 transition-all duration-300 cursor-pointer"
            >
              <span className="relative z-10 flex items-center gap-2">
                HIRE ME <ExternalLink size={14} />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>

            <button
              onClick={(e) => handleScrollTo(e, 'projects')}
              className="px-8 py-3.5 rounded-full text-xs font-bold tracking-wider text-gray-200 bg-gray-900 border border-gray-800 hover:border-gray-700 hover:text-white backdrop-blur-sm shadow-md hover:scale-105 active:scale-98 transition-all duration-300 cursor-pointer"
            >
              VIEW PROJECTS
            </button>
          </motion.div>

          {/* Micro-interactive metrics summaries inside Hero Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-12 w-full max-w-2xl grid grid-cols-2 sm:grid-cols-4 gap-6 px-6 py-5 rounded-3xl bg-gray-900/30 border border-gray-800/40 backdrop-blur-md"
          >
            {PERSONAL_INFO.stats.map((stat, i) => (
              <div key={i} className="text-center lg:text-left">
                <p className="text-2xl font-extrabold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  {stat.value}
                </p>
                <p className="mt-0.5 text-[10px] font-mono text-gray-500 uppercase tracking-wider">
                  {stat.label.split(' ')[0]} {stat.label.split(' ')[1] || ''}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right Side: Stunning Glassmorphic Profile Card & Avatar */}
        <div className="lg:col-span-5 flex items-center justify-center order-1 lg:order-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96"
          >
            {/* Pulsing visual halo underlay */}
            <div className="absolute -inset-2.5 rounded-3xl bg-gradient-to-tr from-purple-600 via-pink-500 to-cyan-400 blur-2xl opacity-40 animate-pulse pointer-events-none" />

            {/* Glowing circular orbit indicator */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
              className="absolute -inset-6 rounded-full border border-dashed border-purple-500/20 pointer-events-none"
            />

            {/* Premium glass frame container */}
            <div className="relative w-full h-full rounded-[2.5rem] bg-gray-900/40 border border-gray-800/60 backdrop-blur-xl p-4 flex items-center justify-center overflow-hidden group shadow-2xl">
              
              {/* Profile Image Frame */}
              <div className="relative w-full h-full rounded-[2rem] overflow-hidden border border-gray-800/80 bg-gray-950">
                <img
                  src={PERSONAL_INFO.avatar}
                  alt={PERSONAL_INFO.name}
                  className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                
                {/* Dark gradient overlay on bottom of the image */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent opacity-80" />
                
                {/* Tech chips floating on bottom-left of the image */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between z-10">
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-gray-950/80 border border-purple-500/30 backdrop-blur-md">
                    <Terminal size={12} className="text-purple-400 animate-pulse" />
                    <span className="text-[10px] font-mono font-bold text-gray-200">SHIHAB.ETH</span>
                  </div>
                  
                  <div className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-gray-950/80 border border-cyan-400/30 backdrop-blur-md">
                    <span className="relative flex h-1.5 w-1.5 mr-0.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-cyan-500"></span>
                    </span>
                    <span className="text-[10px] font-mono font-bold text-gray-200">LIVE FEED</span>
                  </div>
                </div>
              </div>

              {/* Decorative side badge indicators */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-3 -right-3 p-2.5 rounded-2xl bg-gray-950 border border-purple-500/40 shadow-xl"
              >
                <Code size={18} className="text-purple-400" />
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -bottom-3 -left-3 p-2.5 rounded-2xl bg-gray-950 border border-cyan-400/40 shadow-xl"
              >
                <Cpu size={18} className="text-cyan-400" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Down indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 pointer-events-none">
        <motion.span
          animate={{ opacity: [0.2, 1, 0.2] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-[9px] font-mono text-gray-500 uppercase tracking-widest"
        >
          Scroll Down
        </motion.span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="p-1.5 rounded-full border border-gray-800 text-gray-500"
        >
          <ArrowDown size={14} />
        </motion.div>
      </div>
    </section>
  );
}

