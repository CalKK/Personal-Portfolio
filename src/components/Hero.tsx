import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center px-4"
      >
        <motion.img
          src="https://raw.githubusercontent.com/CalKK/personal-portfolio/main/face-card.jpeg"
          alt="Calvin Kinyanjui"
          className="w-48 h-48 rounded-full mx-auto mb-8 object-cover"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        />
        <h1 className="text-5xl md:text-7xl font-bold mb-4">Calvin Kinyanjui</h1>
        <h2 className="text-2xl md:text-3xl text-gray-300 mb-6">Electronics Engineering Student</h2>
        <p className="text-xl text-gray-400 max-w-2xl mb-8 mx-auto">
          I am an Electronics Engineering student at Strathmore University... {/* Shortened for brevity */}
        </p>
        <div className="flex justify-center space-x-6">
          <SocialLink href="https://github.com/CalKK" icon={<FaGithub size={24} />} />
          <SocialLink href="https://www.linkedin.com/in/calvin-kinyanjui-95734222a/" icon={<FaLinkedin size={24} />} />
          <SocialLink href="mailto:calvin.kinyanjui@strathmore.edu" icon={<FaEnvelope size={24} />} />
          <SocialLink href="mailto:calvinkinyanjui017@gmail.com" icon={<FaEnvelope size={24} />} />
        </div>
      </motion.div>
    </section>
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-white transition-colors"
    >
      {icon}
    </a>
  );
}
