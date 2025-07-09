import { motion } from 'framer-motion';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gray-900 rounded-lg p-8"
        >
          <h2 className="text-4xl font-bold text-white mb-8 text-center">
            Get In Touch
          </h2>
          <div className="mb-8 text-center">
            <a
              href="https://raw.githubusercontent.com/CalKK/personal-portfolio/main/CV_FOR_CALVIN_KINYANJUI.pdf"
              download
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Download CV
            </a>
          </div>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
              <input type="text" id="name" className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
              <input type="email" id="email" className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
              <textarea id="message" rows={4} className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">Send Message</button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

// --- Education.tsx ---
import { motion } from 'framer-motion';
import { useState } from 'react';
import { education, certifications, awards, experience } from '../data/education';

export function Education() {
  const [activeTab, setActiveTab] = useState<'education' | 'experience' | 'certifications' | 'awards'>('education');

  const tabs = [
    { id: 'education', label: 'Education' },
    { id: 'experience', label: 'Experience' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'awards', label: 'Awards' }
  ];

  return (
    <section id="education" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">Personal Categories</h2>
        <div className="flex justify-center mb-12 space-x-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as typeof activeTab)}
              className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === tab.id ? 'bg-blue-600 text-white' : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
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
                      <span key={tech} className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm">{tech}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
          {activeTab === 'certifications' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {certifications.map((cert, index) => (
                <a key={index} href={cert.link} target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-6 rounded-lg hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
                  <h4 className="text-xl font-bold text-white">{cert.name}</h4>
                  <p className="text-blue-400">{cert.issuer}</p>
                  <p className="text-gray-400">{cert.date}</p>
                </a>
              ))}
            </div>
          )}
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
