import { motion } from 'framer-motion';
import { useState } from 'react';
import { education, certifications, awards, experience } from '../data/education';

export function Education() {
  const [activeTab, setActiveTab] = useState('education');

  const tabs = [
    { id: 'education', label: 'Education' },
    { id: 'experience', label: 'Experience' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'awards', label: 'Awards' }
  ];

  return (
    <section id="education" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">
          Personal Categories
        </h2>
        
        {/* Tabs */}
        <div className="flex justify-center mb-12 space-x-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Education Content */}
          {activeTab === 'education' && (
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="bg-gray-800 p-6 rounded-lg hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
                  <h4 className="text-xl font-bold text-white">{edu.institution}</h4>
                  {edu.degree && <p className="text-blue-400">{edu.degree}</p>}
                  <p className="text-gray-400">{edu.duration}</p>
                </div>
              ))}
            </div>
          )}

          {/* Experience Content */}
          {activeTab === 'experience' && (
            <div className="space-y-8">
              {experience.map((exp, index) => (
                <div key={index} className="bg-gray-800 p-6 rounded-lg hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
                  <h4 className="text-xl font-bold text-white">{exp.role}</h4>
                  <p className="text-blue-400">{exp.company}</p>
                  <p className="text-gray-400">{exp.duration}</p>
                  <p className="text-gray-300 mt-2">{exp.description}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.technologies.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Certifications Content */}
          {activeTab === 'certifications' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {certifications.map((cert, index) => (
                <a
                  key={index}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-6 rounded-lg hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
                >
                  <h4 className="text-xl font-bold text-white">{cert.name}</h4>
                  <p className="text-blue-400">{cert.issuer}</p>
                  <p className="text-gray-400">{cert.date}</p>
                </a>
              ))}
            </div>
          )}

          {/* Awards Content */}
          {activeTab === 'awards' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {awards.map((award, index) => (
                <div key={index} className="bg-gray-800 p-6 rounded-lg hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
                  <h4 className="text-xl font-bold text-white">{award.name}</h4>
                  <p className="text-blue-400">{award.issuer}</p>
                  <p className="text-gray-400">{award.date}</p>
                  <p className="text-gray-300 mt-2">{award.description}</p>
                </div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}