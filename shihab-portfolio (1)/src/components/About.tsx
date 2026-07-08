import { motion } from 'motion/react';
import { User, ShieldCheck, Heart, Sparkles, Orbit } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

export default function About() {
  return (
    <section id="about" className="relative py-20 md:py-28 px-4 sm:px-6 bg-gray-950 overflow-hidden">
      {/* Background neon ambient blur blobs */}
      <div className="absolute top-1/3 right-1/10 w-96 h-96 rounded-full bg-purple-900/10 blur-3xl pointer-events-none animate-glow-1" />
      <div className="absolute bottom-1/4 left-1/10 w-80 h-80 rounded-full bg-cyan-900/10 blur-3xl pointer-events-none animate-glow-2" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 font-mono text-[10px] uppercase tracking-wider"
          >
            <User size={12} />
            <span>01 . About Me</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-3xl md:text-5xl font-extrabold tracking-tight text-white"
          >
            My Story & Journey
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.2 }}
            className="mt-4 w-12 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full"
          />
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Large Bio Card - Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8 p-6 md:p-8 rounded-3xl bg-gray-900/30 border border-gray-800/50 backdrop-blur-md flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Sparkles size={18} className="text-purple-400" />
                <h3 className="text-lg font-bold text-gray-200">Who is Shihab?</h3>
              </div>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed font-sans mb-6">
                {PERSONAL_INFO.bio}
              </p>
              <p className="text-gray-400 text-sm leading-relaxed font-sans">
                My professional coding adventure began in front-end development, engineering responsive interfaces, and composing smooth state flows. Driven by a deep curiosity about trustless software and distributed architectures, I expanded my mastery into Web3 ecosystems. Today, I build full-stack interfaces that communicate seamlessly with Solidity smart contracts and EVM blockchains.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-gray-800/40 pt-6">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 p-2 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
                  <Orbit size={16} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Full Stack Dexterity</h4>
                  <p className="text-xs text-gray-400 mt-1">High fidelity React applications built with modern architectures.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-0.5 p-2 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                  <ShieldCheck size={16} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Blockchain Focus</h4>
                  <p className="text-xs text-gray-400 mt-1">Secure, gas-optimized Solidity smart contracts and Web3 dApps.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Side Bento Cards - Right Column */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            {/* Location & Status Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="p-6 rounded-3xl bg-gray-900/30 border border-gray-800/50 backdrop-blur-md flex flex-col justify-between"
            >
              <div>
                <span className="text-[11px] font-mono text-gray-500 uppercase tracking-wider block mb-2">Available for Work</span>
                <h3 className="text-xl font-bold text-white mb-2">Work Status</h3>
                <div className="flex items-center gap-2 mt-4">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                  </span>
                  <span className="text-xs font-semibold text-green-400 bg-green-400/10 px-2.5 py-1 rounded-full border border-green-500/20">
                    Open to Freelance & Contracts
                  </span>
                </div>
              </div>

              <div className="mt-6 border-t border-gray-800/40 pt-4 text-xs text-gray-400">
                <p>Location: <strong className="text-white">{PERSONAL_INFO.location}</strong></p>
                <p className="mt-1">Main Focus: <strong className="text-white">Smart Contracts & Modern Frontends</strong></p>
              </div>
            </motion.div>

            {/* Quick Inspiration Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-6 rounded-3xl bg-gradient-to-br from-purple-900/20 to-cyan-900/10 border border-purple-500/10 backdrop-blur-md flex-1 flex flex-col justify-between"
            >
              <div className="p-2 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 w-fit">
                <Heart size={16} />
              </div>
              <blockquote className="mt-4 text-sm font-medium text-gray-300 italic leading-relaxed font-sans">
                "The decentralized web is not just about changing how we store value. It's about changing how we design experiences that give control back to the user with elegance."
              </blockquote>
              <p className="mt-4 text-[10px] font-mono text-purple-400 uppercase tracking-widest text-right">
                — Shihab's philosophy
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
