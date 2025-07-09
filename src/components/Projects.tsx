import { motion } from 'framer-motion';
import { projects } from '../data/projects';

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ title, description, tech, image, linkedIn, index }: {
  title: string;
  description: string;
  tech: string[];
  image: string;
  linkedIn: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-gray-800 rounded-lg overflow-hidden"
    >
      <div className="relative group">
        <img src={image} alt={title} className="w-full h-48 object-cover transition-opacity duration-300 group-hover:opacity-30" />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="text-center p-4">
            <p className="text-white text-sm mb-2">{description}</p>
            <a
              href={linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition-colors"
            >
              View Project
            </a>
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <div className="flex flex-wrap gap-2">
          {tech.map((item) => (
            <span
              key={item}
              className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}