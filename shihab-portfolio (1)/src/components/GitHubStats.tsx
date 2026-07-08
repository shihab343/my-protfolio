import { motion } from 'motion/react';
import { Github, Star, GitPullRequest, Code, Calendar, Flame } from 'lucide-react';

// Mock Commit Activity Grid Data (7 days x 28 weeks)
const generateActivity = () => {
  const levels = [0, 1, 2, 3, 4];
  const grid = [];
  for (let i = 0; i < 7; i++) {
    const row = [];
    for (let j = 0; j < 28; j++) {
      // Create some realistic clustering of active vs silent days
      let level = 0;
      const noise = Math.random();
      if (j > 2 && j < 10) {
        level = noise > 0.3 ? (noise > 0.7 ? 3 : 2) : 1;
      } else if (j > 15 && j < 22) {
        level = noise > 0.4 ? (noise > 0.8 ? 4 : 3) : 1;
      } else {
        level = noise > 0.75 ? (noise > 0.9 ? 2 : 1) : 0;
      }
      row.push(level);
    }
    grid.push(row);
  }
  return grid;
};

const STATS = [
  { label: 'Total Contributions', value: '2,483', icon: <Flame size={16} className="text-orange-400" /> },
  { label: 'Total Stars', value: '382', icon: <Star size={16} className="text-yellow-400" /> },
  { label: 'Pull Requests', value: '172', icon: <GitPullRequest size={16} className="text-purple-400" /> },
  { label: 'Public Repos', value: '18', icon: <Code size={16} className="text-cyan-400" /> },
];

const LANGUAGES = [
  { name: 'Solidity', percentage: 42, color: 'bg-purple-500', text: 'text-purple-400' },
  { name: 'TypeScript', percentage: 35, color: 'bg-cyan-400', text: 'text-cyan-300' },
  { name: 'JavaScript', percentage: 15, color: 'bg-yellow-400', text: 'text-yellow-300' },
  { name: 'CSS & Design', percentage: 8, color: 'bg-blue-500', text: 'text-blue-400' },
];

export default function GitHubStats() {
  const gridData = generateActivity();

  return (
    <section id="github" className="relative py-20 md:py-28 px-4 sm:px-6 bg-gray-950 overflow-hidden">
      {/* Background soft glow */}
      <div className="absolute top-1/4 right-0 w-80 h-80 rounded-full bg-purple-900/5 blur-3xl pointer-events-none animate-glow-1" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 font-mono text-[10px] uppercase tracking-wider"
          >
            <Github size={12} />
            <span>05 . Activity</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-3xl md:text-5xl font-extrabold tracking-tight text-white"
          >
            Open Source Footprint
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.2 }}
            className="mt-4 w-12 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full"
          />
        </div>

        {/* GitHub Stats Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main GitHub Stats Overview */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 p-6 md:p-8 rounded-3xl bg-gray-900/30 border border-gray-800/40 backdrop-blur-md flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Github size={24} className="text-white" />
                <div>
                  <h3 className="text-md font-bold text-gray-200">@shihab-dev</h3>
                  <p className="text-[10px] font-mono text-gray-500">Shihab's GitHub Hub</p>
                </div>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed font-sans mb-6">
                Actively contributing to open-source protocols, building tooling libraries, and testing Web3 client packages. 
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {STATS.map((stat) => (
                <div key={stat.label} className="p-4 rounded-2xl bg-gray-950/50 border border-gray-800/30">
                  <div className="flex items-center gap-1.5 mb-2">
                    {stat.icon}
                    <span className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider">{stat.label.split(' ')[0]}</span>
                  </div>
                  <p className="text-lg font-bold text-white">{stat.value}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Interactive Activity Map & Top Languages */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            {/* Activity Heatmap Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="p-6 rounded-3xl bg-gray-900/30 border border-gray-800/40 backdrop-blur-md"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Calendar size={16} className="text-purple-400" />
                  <h4 className="text-xs font-bold text-gray-200 uppercase tracking-wider">Contributions Map (Mocked Live Feed)</h4>
                </div>
                <span className="text-[10px] font-mono text-gray-500">Last 6 Months</span>
              </div>

              {/* Grid of commits */}
              <div className="overflow-x-auto pb-2 scrollbar-none">
                <div className="min-w-[450px] flex flex-col gap-1">
                  {gridData.map((row, rIdx) => (
                    <div key={rIdx} className="flex gap-1 justify-between">
                      {row.map((level, cIdx) => {
                        let colorClass = 'bg-gray-950';
                        if (level === 1) colorClass = 'bg-purple-950/50 border border-purple-500/10';
                        if (level === 2) colorClass = 'bg-purple-900/40 border border-purple-500/20';
                        if (level === 3) colorClass = 'bg-purple-700/60 border border-purple-500/30';
                        if (level === 4) colorClass = 'bg-purple-500 border border-purple-400/50';

                        return (
                          <div
                            key={cIdx}
                            className={`w-3.5 h-3.5 rounded-sm transition-all duration-300 hover:scale-115 cursor-pointer ${colorClass}`}
                            title={`${level === 0 ? 'No' : level * 2} commits`}
                          />
                        );
                      })}
                    </div>
                  ))}
                </div>
              </div>

              {/* Color legend */}
              <div className="mt-4 flex items-center justify-between text-[10px] font-mono text-gray-500 border-t border-gray-800/40 pt-3">
                <span>Less active</span>
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-sm bg-gray-950" />
                  <div className="w-2.5 h-2.5 rounded-sm bg-purple-950/50" />
                  <div className="w-2.5 h-2.5 rounded-sm bg-purple-900/40" />
                  <div className="w-2.5 h-2.5 rounded-sm bg-purple-700/60" />
                  <div className="w-2.5 h-2.5 rounded-sm bg-purple-500" />
                </div>
                <span>Highly active</span>
              </div>
            </motion.div>

            {/* Language Distribution Breakdown */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-6 rounded-3xl bg-gray-900/30 border border-gray-800/40 backdrop-blur-md"
            >
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-xs font-bold text-gray-200 uppercase tracking-wider">Top Languages Distribution</h4>
                <span className="text-[10px] font-mono text-purple-400 font-bold">14 Active Repos</span>
              </div>

              {/* Progress bar line segment */}
              <div className="h-2 w-full bg-gray-950 rounded-full flex overflow-hidden border border-gray-800/20">
                {LANGUAGES.map((lang) => (
                  <div
                    key={lang.name}
                    style={{ width: `${lang.percentage}%` }}
                    className={`${lang.color} h-full first:rounded-l-full last:rounded-r-full`}
                    title={`${lang.name}: ${lang.percentage}%`}
                  />
                ))}
              </div>

              {/* Legend keys with metrics */}
              <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
                {LANGUAGES.map((lang) => (
                  <div key={lang.name} className="flex flex-col">
                    <div className="flex items-center gap-1.5">
                      <div className={`w-2 h-2 rounded-full ${lang.color}`} />
                      <span className="text-xs font-bold text-gray-300">{lang.name}</span>
                    </div>
                    <span className={`text-[10px] font-mono ${lang.text} mt-0.5 ml-3.5`}>
                      {lang.percentage}%
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
