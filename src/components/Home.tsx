import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaGraduationCap, FaBriefcase, FaAward, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

// You can switch between these two options by changing this value
const useCustomBanner = false;

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="space-y-8"
    >
      {/* Hero Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#1A2B3C] to-[#2C3E50] p-8 md:p-12 text-white shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
        <div className="absolute inset-0 bg-[url('/portfolio/pattern.png')] opacity-10"></div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to My Portfolio</h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8">
            Exploring the intersection of Machine Learning and Healthcare
          </p>
          <div className="flex gap-4">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition-colors duration-300 flex items-center gap-2"
            >
              <FaGithub />
              <span>GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition-colors duration-300 flex items-center gap-2"
            >
              <FaLinkedin />
              <span>LinkedIn</span>
            </a>
            <a
              href="mailto:your.email@example.com"
              className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition-colors duration-300 flex items-center gap-2"
            >
              <FaEnvelope />
              <span>Contact</span>
            </a>
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link
          to="/projects"
          className="group p-6 bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300"
        >
          <h3 className="text-xl font-semibold text-[#0B1B2D] mb-2 group-hover:text-[#1A2B3C] transition-colors duration-300">
            Research Work
          </h3>
          <p className="text-[#334155]">
            Explore my research projects in Machine Learning and AI
          </p>
        </Link>

        <Link
          to="/gallery"
          className="group p-6 bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300"
        >
          <h3 className="text-xl font-semibold text-[#0B1B2D] mb-2 group-hover:text-[#1A2B3C] transition-colors duration-300">
            Gallery
          </h3>
          <p className="text-[#334155]">
            View visualizations and project highlights
          </p>
        </Link>

        <Link
          to="/contact"
          className="group p-6 bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300"
        >
          <h3 className="text-xl font-semibold text-[#0B1B2D] mb-2 group-hover:text-[#1A2B3C] transition-colors duration-300">
            Get in Touch
          </h3>
          <p className="text-[#334155]">
            Connect with me for collaborations or inquiries
          </p>
        </Link>
      </div>
    </motion.div>
  );
};

export default Home; 