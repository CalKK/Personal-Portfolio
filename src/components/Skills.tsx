import { motion } from 'framer-motion';
import { skills } from '../data/skills';

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">Skills & Technologies</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <SkillCard key={index} {...skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillCard({ name, icon: Icon, technologies, index }: {
  name: string;
  icon: React.ComponentType<{ className: string }>;
  technologies: string[];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-gray-900 p-6 rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20 cursor-pointer"
    >
      <div className="text-blue-500 mb-4 transform transition-transform duration-300 group-hover:scale-110">
        <Icon className="w-8 h-8" />
      </div>
      <h3 className="text-xl font-bold text-white mb-4 transition-colors duration-300 hover:text-blue-400">{name}</h3>
      <ul className="space-y-2">
        {technologies.map((tech) => (
          <li key={tech} className="text-gray-400 transition-colors duration-300 hover:text-white">{tech}</li>
        ))}
      </ul>
    </motion.div>
  );
}
