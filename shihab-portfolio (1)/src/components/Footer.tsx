import { ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="py-12 px-6 bg-gray-950 border-t border-gray-900 overflow-hidden relative">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 relative z-10">
        
        {/* Brand Copyright */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
          <p className="text-xs font-mono text-gray-500 uppercase tracking-widest">
            © {new Date().getFullYear()} {PERSONAL_INFO.name.toUpperCase()}
          </p>
          <p className="text-[10px] text-gray-600 mt-1 font-sans">
            Designed and engineered for lightning speed. All Rights Reserved.
          </p>
        </div>

        {/* Scroll To Top Trigger */}
        <button
          onClick={handleScrollToTop}
          className="p-3 rounded-full bg-gray-900 border border-gray-800 hover:border-gray-700 hover:bg-gray-800 text-gray-400 hover:text-white hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer shadow-md"
          aria-label="Scroll to top"
        >
          <ArrowUp size={16} />
        </button>
      </div>
    </footer>
  );
}
