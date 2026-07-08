import { motion } from 'motion/react';
import { Cpu, Layout, Settings, Blocks } from 'lucide-react';
import { SKILLS } from '../data';

const CATEGORY_MAP = {
  Frontend: { icon: <Layout size={16} className="text-cyan-400" />, color: 'text-cyan-400', bg: 'bg-cyan-500/10 border-cyan-500/20' },
  Backend: { icon: <Settings size={16} className="text-green-400" />, color: 'text-green-400', bg: 'bg-green-500/10 border-green-500/20' },
  Blockchain: { icon: <Blocks size={16} className="text-purple-400" />, color: 'text-purple-400', bg: 'bg-purple-500/10 border-purple-500/20' },
  Tools: { icon: <Cpu size={16} className="text-indigo-400" />, color: 'text-indigo-400', bg: 'bg-indigo-500/10 border-indigo-500/20' },
};

export default function Skills() {
  // Group skills by category
  const categories = Object.keys(CATEGORY_MAP) as Array<keyof typeof CATEGORY_MAP>;

  return (
    <section id="skills" className="relative py-20 md:py-28 px-4 sm:px-6 bg-gray-950/40 grid-bg">
      <div className="absolute inset-0 bg-radial-gradient(ellipse_at_bottom,rgba(34,211,238,0.06),transparent_50%) pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 font-mono text-[10px] uppercase tracking-wider"
          >
            <Cpu size={12} />
            <span>04 . Proficiencies</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-3xl md:text-5xl font-extrabold tracking-tight text-white"
          >
            Skills & Competency
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.2 }}
            className="mt-4 w-12 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full"
          />
        </div>

        {/* Categories of Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category, catIdx) => {
            const catSkills = SKILLS.filter((s) => s.category === category);
            const { icon, color, bg } = CATEGORY_MAP[category];

            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: catIdx * 0.1, duration: 0.6 }}
                className="p-6 md:p-8 rounded-3xl bg-gray-900/30 border border-gray-800/40 backdrop-blur-md"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-800/40">
                  <div className={`p-2 rounded-xl ${bg} flex items-center justify-center`}>
                    {icon}
                  </div>
                  <h3 className="text-md font-bold text-gray-200 tracking-wide">
                    {category} Skills
                  </h3>
                </div>

                {/* Skills indicators */}
                <div className="space-y-6">
                  {catSkills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs md:text-sm font-semibold text-gray-300">
                          {skill.name}
                        </span>
                        <span className={`text-xs font-mono font-bold ${color}`}>
                          {skill.level}%
                        </span>
                      </div>

                      {/* Progress Track */}
                      <div className="relative h-2 w-full bg-gray-950 rounded-full overflow-hidden border border-gray-800/20">
                        {/* Progress Bar with viewport trigger */}
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, ease: 'easeOut' }}
                          className={`absolute top-0 bottom-0 left-0 rounded-full bg-gradient-to-r ${
                            category === 'Blockchain'
                              ? 'from-purple-600 to-indigo-500'
                              : category === 'Frontend'
                              ? 'from-cyan-500 to-sky-400'
                              : category === 'Backend'
                              ? 'from-green-500 to-teal-400'
                              : 'from-indigo-500 to-purple-500'
                          }`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
