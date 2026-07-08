import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal, Code } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Tech Stack', href: '#tech' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'GitHub', href: '#github' },
  { label: 'Support', href: '#support' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Simple active section indicator logic
      const scrollPosition = window.scrollY + 100;
      for (const item of NAV_ITEMS) {
        const id = item.href.substring(1);
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth',
      });
      setActiveSection(targetId);
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Top Header Navbar - Hidden on Mobile, Fixed at Top on Desktop */}
      <nav
        id="app-navbar"
        className={`fixed top-0 left-0 right-0 z-50 hidden md:block transition-all duration-300 ${
          scrolled
            ? 'py-4 bg-gray-950/80 backdrop-blur-md border-b border-gray-800/60 shadow-lg'
            : 'py-6 bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo / Brand */}
          <a
            href="#home"
            onClick={(e) => handleClick(e, '#home')}
            className="flex items-center gap-2 font-mono text-lg font-bold tracking-tight text-white group"
          >
            <div className="p-1.5 rounded-lg bg-purple-500/10 border border-purple-500/30 group-hover:border-purple-500/80 transition-all duration-300">
              <Terminal size={18} className="text-purple-400 group-hover:rotate-12 transition-transform duration-300" />
            </div>
            <span className="bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
              SHIHAB
            </span>
            <span className="text-purple-500 text-xs font-semibold px-1.5 py-0.5 rounded bg-purple-500/10 border border-purple-500/20">
              v2.0
            </span>
          </a>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-1 bg-gray-900/40 p-1.5 rounded-full border border-gray-800/50 backdrop-blur-sm">
            {NAV_ITEMS.map((item) => {
              const is_active = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleClick(e, item.href)}
                  className={`relative px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-all duration-300 ${
                    is_active
                      ? 'text-white'
                      : 'text-gray-400 hover:text-gray-200'
                  }`}
                >
                  {is_active && (
                    <motion.span
                      layoutId="activeNav"
                      className="absolute inset-0 bg-purple-500/20 border border-purple-500/30 rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {item.label}
                </a>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="#contact"
              onClick={(e) => handleClick(e, '#contact')}
              className="px-5 py-2 rounded-full text-xs font-semibold tracking-wide bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white shadow-md shadow-purple-500/20 hover:shadow-purple-500/30 hover:scale-105 transition-all duration-300"
            >
              Hire Me
            </a>
          </div>
        </div>
      </nav>

      {/* Mobile Bottom Navigation Bar (Swipeable / Scrollable horizontally) */}
      <div className="fixed bottom-5 left-4 right-4 z-50 md:hidden flex justify-center">
        <div className="w-full max-w-lg bg-gray-950/80 backdrop-blur-xl border border-gray-800/60 rounded-2xl shadow-2xl p-1.5 overflow-x-auto no-scrollbar select-none">
          <div className="flex items-center gap-1.5">
            {NAV_ITEMS.map((item, idx) => {
              const is_active = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleClick(e, item.href)}
                  className={`px-4 py-2 rounded-xl text-[11px] font-bold uppercase tracking-wider whitespace-nowrap shrink-0 transition-all duration-300 ${
                    is_active
                      ? 'bg-purple-500/15 text-purple-400 border border-purple-500/25 shadow-md shadow-purple-500/5'
                      : 'text-gray-400 hover:text-gray-200 border border-transparent'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
