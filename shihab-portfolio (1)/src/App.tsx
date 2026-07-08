import { motion, useScroll, useSpring } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Skills from './components/Skills';
import GitHubStats from './components/GitHubStats';
import Support from './components/Support';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div id="portfolio-root" className="min-h-screen bg-gray-950 text-gray-100 font-sans selection:bg-purple-500/30 selection:text-white overflow-x-hidden antialiased">
      {/* Scroll Depth Progress Line */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-purple-500 to-cyan-400 transform origin-left z-50"
        style={{ scaleX }}
      />

      {/* Floating Header */}
      <Navbar />

      {/* Main Sections Composition */}
      <main className="relative flex flex-col w-full">
        {/* Home Banner */}
        <Hero />

        {/* Section 1: About Card Layout */}
        <About />

        {/* Section 2: Technology Badge Stack */}
        <TechStack />

        {/* Section 3: Engineering Work Showcase */}
        <Projects />

        {/* Section 4: Competency Bars */}
        <Skills />

        {/* Section 5: Activity Grid Map */}
        <GitHubStats />

        {/* Section 6: Support Options */}
        <Support />

        {/* Section 7: Form Submission */}
        <Contact />
      </main>

      {/* Footer Branding */}
      <Footer />
    </div>
  );
}
