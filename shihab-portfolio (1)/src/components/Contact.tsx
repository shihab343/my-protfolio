import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Send, Github, Facebook, Linkedin, Twitter, AlertCircle, CheckCircle, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      setErrorMessage('Please fill out all fields.');
      setStatus('error');
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage('Please enter a valid email address.');
      setStatus('error');
      return;
    }

    setStatus('loading');

    // Simulate safe API transit
    setTimeout(() => {
      setStatus('success');
      setName('');
      setEmail('');
      setMessage('');
    }, 1500);
  };

  return (
    <section id="contact" className="relative py-20 md:py-28 px-4 sm:px-6 bg-gray-950/60 grid-bg">
      {/* Background visual overlay */}
      <div className="absolute inset-0 bg-radial-gradient(ellipse_at_center,rgba(168,85,247,0.06),transparent_60%) pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 font-mono text-[10px] uppercase tracking-wider"
          >
            <Mail size={12} />
            <span>06 . Contact</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-3xl md:text-5xl font-extrabold tracking-tight text-white"
          >
            Initiate Conversation
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.2 }}
            className="mt-4 w-12 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Side: Contact Information & Social Badges */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Let's create something extraordinary</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-8 font-sans">
                Whether you have a groundbreaking decentralized protocol idea, a complex front-end engineering puzzle to solve, or simply want to say hello, my inbox is always open.
              </p>

              {/* Direct email display */}
              <div className="p-5 rounded-2xl bg-gray-900/40 border border-gray-800/40 backdrop-blur-md mb-8 flex items-center gap-4">
                <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-mono text-gray-500 uppercase tracking-wider">Direct Transmission</p>
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="text-sm font-bold text-gray-200 hover:text-purple-400 transition-colors">
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Social Badges Grid */}
            <div>
              <h4 className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-4">Social Matrix</h4>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={PERSONAL_INFO.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3.5 rounded-2xl bg-gray-900/30 hover:bg-gray-900/60 border border-gray-800/40 hover:border-gray-700/60 text-gray-400 hover:text-white hover:scale-102 transition-all duration-300"
                >
                  <Github size={18} />
                  <span className="text-xs font-semibold">GitHub</span>
                </a>
                <a
                  href={PERSONAL_INFO.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3.5 rounded-2xl bg-gray-900/30 hover:bg-gray-900/60 border border-gray-800/40 hover:border-gray-700/60 text-gray-400 hover:text-white hover:scale-102 transition-all duration-300"
                >
                  <Linkedin size={18} />
                  <span className="text-xs font-semibold">LinkedIn</span>
                </a>
                <a
                  href={PERSONAL_INFO.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3.5 rounded-2xl bg-gray-900/30 hover:bg-gray-900/60 border border-gray-800/40 hover:border-gray-700/60 text-gray-400 hover:text-white hover:scale-102 transition-all duration-300"
                >
                  <Facebook size={18} />
                  <span className="text-xs font-semibold">Facebook</span>
                </a>
                <a
                  href={PERSONAL_INFO.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3.5 rounded-2xl bg-gray-900/30 hover:bg-gray-900/60 border border-gray-800/40 hover:border-gray-700/60 text-gray-400 hover:text-white hover:scale-102 transition-all duration-300"
                >
                  <Twitter size={18} />
                  <span className="text-xs font-semibold">Twitter</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Side: High Fidelity Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="relative p-8 rounded-3xl bg-gray-900/30 border border-gray-800/50 backdrop-blur-md">
              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="text-center py-12 flex flex-col items-center"
                  >
                    <div className="p-4 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 mb-6 animate-bounce">
                      <CheckCircle size={40} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Message Transmitted!</h3>
                    <p className="text-sm text-gray-400 max-w-sm leading-relaxed font-sans mb-6">
                      Your packet has been safely routed. Shihab will decode and respond to you shortly!
                    </p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="px-6 py-2.5 rounded-xl text-xs font-semibold bg-gray-800 hover:bg-gray-700 border border-gray-700 text-white cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-[10px] font-mono font-bold text-gray-500 uppercase tracking-widest mb-2">Your Name</label>
                        <input
                          type="text"
                          value={name}
                          onChange={(e) => {
                            setName(e.target.value);
                            if (status === 'error') setStatus('idle');
                          }}
                          placeholder="John Doe"
                          className="w-full px-4 py-3 rounded-xl bg-gray-950 border border-gray-800 hover:border-gray-700 focus:border-purple-500 text-sm text-white focus:outline-none transition-colors duration-200"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-mono font-bold text-gray-500 uppercase tracking-widest mb-2">Email Address</label>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value);
                            if (status === 'error') setStatus('idle');
                          }}
                          placeholder="johndoe@example.com"
                          className="w-full px-4 py-3 rounded-xl bg-gray-950 border border-gray-800 hover:border-gray-700 focus:border-purple-500 text-sm text-white focus:outline-none transition-colors duration-200"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] font-mono font-bold text-gray-500 uppercase tracking-widest mb-2">Secure Message Packet</label>
                      <textarea
                        value={message}
                        onChange={(e) => {
                          setMessage(e.target.value);
                          if (status === 'error') setStatus('idle');
                        }}
                        placeholder="Describe your project, timeline, and requirements..."
                        rows={5}
                        className="w-full px-4 py-3 rounded-xl bg-gray-950 border border-gray-800 hover:border-gray-700 focus:border-purple-500 text-sm text-white focus:outline-none transition-colors duration-200 resize-none"
                      />
                    </div>

                    {status === 'error' && (
                      <motion.div
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-2 text-xs font-semibold text-red-400 bg-red-400/10 p-3.5 rounded-xl border border-red-500/20"
                      >
                        <AlertCircle size={14} />
                        <span>{errorMessage}</span>
                      </motion.div>
                    )}

                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="w-full py-3.5 rounded-xl text-xs font-bold tracking-wider bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white flex items-center justify-center gap-2 shadow-lg shadow-purple-500/10 cursor-pointer disabled:opacity-50"
                    >
                      {status === 'loading' ? (
                        <>
                          <Sparkles size={14} className="animate-spin" />
                          <span>TRANSMITTING PACKETS...</span>
                        </>
                      ) : (
                        <>
                          <Send size={14} />
                          <span>SEND SECURE MESSAGE</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
