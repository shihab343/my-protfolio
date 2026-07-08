import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Copy, Check, Wallet, Smartphone, Landmark, Info, Sparkles } from 'lucide-react';

export default function Support() {
  const [copiedType, setCopiedType] = useState<'bkash' | 'usdt' | null>(null);

  const handleCopy = (text: string, type: 'bkash' | 'usdt') => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => {
      setCopiedType(null);
    }, 2000);
  };

  return (
    <section id="support" className="relative py-20 md:py-28 px-4 sm:px-6 bg-gray-950 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 rounded-full bg-pink-900/5 blur-3xl pointer-events-none animate-glow-1" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 rounded-full bg-cyan-900/5 blur-3xl pointer-events-none animate-glow-2" />

      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 font-mono text-[10px] uppercase tracking-wider"
          >
            <Heart size={12} className="fill-pink-500/20" />
            <span>05 . Support</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-3xl md:text-5xl font-extrabold tracking-tight text-white"
          >
            Support the Developer
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.15 }}
            className="mt-3 text-sm text-gray-400 max-w-xl font-sans"
          >
            If you appreciate my open-source work, technical articles, or custom dApp templates, consider backing my research and execution through direct channels.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.2 }}
            className="mt-4 w-12 h-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"
          />
        </div>

        {/* Support Gateway Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* bKash Payment Gateway */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="group relative p-6 md:p-8 rounded-3xl bg-gradient-to-br from-pink-950/20 to-gray-900/30 border border-pink-500/10 hover:border-pink-500/30 backdrop-blur-md flex flex-col justify-between transition-all duration-300 shadow-lg"
          >
            <div className="absolute top-4 right-4 text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400">
              Mobile Banking
            </div>

            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3.5 rounded-2xl bg-pink-500/10 border border-pink-500/20 text-pink-400">
                  <Smartphone size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-white">bKash Option</h3>
                  <p className="text-[11px] font-mono text-pink-400">Send Money Protocol</p>
                </div>
              </div>

              <p className="text-sm text-gray-400 leading-relaxed font-sans mb-6">
                You can easily support me by using bKash mobile finance. Simply choose <strong>"Send Money"</strong> inside your bKash app and transmit to the number below.
              </p>
            </div>

            {/* Interactive Number Copy Board */}
            <div className="mt-4">
              <div className="p-4 rounded-2xl bg-gray-950/80 border border-gray-800/60 flex items-center justify-between">
                <div>
                  <span className="text-[9px] font-mono text-gray-500 uppercase tracking-widest block mb-0.5">BKASH NUMBER</span>
                  <span className="text-md font-mono font-extrabold text-white tracking-wide">01756606262</span>
                </div>

                <button
                  onClick={() => handleCopy('01756606262', 'bkash')}
                  className={`p-2.5 rounded-xl border transition-all duration-300 cursor-pointer ${
                    copiedType === 'bkash'
                      ? 'bg-green-500/10 border-green-500/30 text-green-400'
                      : 'bg-gray-900 border-gray-800 hover:border-gray-700 text-gray-400 hover:text-white'
                  }`}
                  aria-label="Copy bKash number"
                >
                  <AnimatePresence mode="wait">
                    {copiedType === 'bkash' ? (
                      <motion.div
                        key="tick"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        className="flex items-center gap-1.5"
                      >
                        <Check size={14} />
                        <span className="text-[10px] font-bold font-mono">COPIED</span>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="copy"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        className="flex items-center gap-1.5"
                      >
                        <Copy size={14} />
                        <span className="text-[10px] font-bold font-mono">COPY</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              </div>
            </div>
          </motion.div>

          {/* Crypto BEP-20 Payment Gateway */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="group relative p-6 md:p-8 rounded-3xl bg-gradient-to-br from-cyan-950/20 to-gray-900/30 border border-cyan-500/10 hover:border-cyan-500/30 backdrop-blur-md flex flex-col justify-between transition-all duration-300 shadow-lg"
          >
            <div className="absolute top-4 right-4 text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
              Web3 Crypto
            </div>

            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3.5 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                  <Wallet size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-white">USDT Web3</h3>
                  <p className="text-[11px] font-mono text-cyan-400">BEP-20 BNB Smart Chain</p>
                </div>
              </div>

              <p className="text-sm text-gray-400 leading-relaxed font-sans mb-6">
                For blockchain support, send USDT via the <strong>BEP-20 (BNB Smart Chain)</strong> network to the secure wallet address defined below.
              </p>
            </div>

            {/* Interactive Wallet Copy Board */}
            <div className="mt-4">
              <div className="p-4 rounded-2xl bg-gray-950/80 border border-gray-800/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="overflow-hidden">
                  <span className="text-[9px] font-mono text-gray-500 uppercase tracking-widest block mb-0.5">BEP-20 WALLET ADDRESS</span>
                  <span className="text-xs font-mono font-extrabold text-white tracking-wide block truncate select-all">
                    0xA3aaf2231603e031f1841a3568449A620b463364
                  </span>
                </div>

                <button
                  onClick={() => handleCopy('0xA3aaf2231603e031f1841a3568449A620b463364', 'usdt')}
                  className={`p-2.5 rounded-xl border transition-all duration-300 shrink-0 cursor-pointer ${
                    copiedType === 'usdt'
                      ? 'bg-green-500/10 border-green-500/30 text-green-400'
                      : 'bg-gray-900 border-gray-800 hover:border-gray-700 text-gray-400 hover:text-white'
                  }`}
                  aria-label="Copy USDT wallet address"
                >
                  <AnimatePresence mode="wait">
                    {copiedType === 'usdt' ? (
                      <motion.div
                        key="tick"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        className="flex items-center gap-1.5"
                      >
                        <Check size={14} />
                        <span className="text-[10px] font-bold font-mono">COPIED</span>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="copy"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        className="flex items-center gap-1.5"
                      >
                        <Copy size={14} />
                        <span className="text-[10px] font-bold font-mono">COPY</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Micro informational footnote banner */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="mt-12 p-5 rounded-3xl bg-gray-900/20 border border-gray-800/40 backdrop-blur-md flex items-start gap-4"
        >
          <div className="p-2 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 mt-0.5 shrink-0">
            <Info size={16} />
          </div>
          <p className="text-xs text-gray-400 leading-relaxed font-sans">
            Please double-check the transfer protocols when using Web3 networks. Ensure you send <strong>USDT only on the BNB Chain (BEP-20)</strong>. Any support helps me maintain high-quality open source tooling repositories, write tech blogs, and build decentralized architectures. Thank you!
          </p>
        </motion.div>
      </div>
    </section>
  );
}
