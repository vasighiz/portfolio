import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaGraduationCap, FaBriefcase, FaLightbulb, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

// You can switch between these two options by changing this value
const useCustomBanner = false;

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="h-full flex flex-col gap-6 shadow-[0_8px_30px_rgb(26,43,60,0.15)]"
    >
      {/* Hero Banner */}
      <div className="relative h-[340px] -mx-8 -mt-8">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A192F] to-[#112240] backdrop-blur shadow-2xl">
          {useCustomBanner ? (
            // Custom banner image option
            <div className="absolute inset-0 bg-[url('/portfolio/banner.jpg')] mix-blend-overlay opacity-50 bg-cover bg-center"></div>
          ) : (
            // Simple gradient background option
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-br from-[#112240]/50 via-[#233554]/20 to-[#0A192F]/50"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:24px_24px]"></div>
            </div>
          )}
        </div>
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div>
            <motion.h1 
              className="text-4xl md:text-5xl font-bold text-white mb-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Welcome to the AI World!
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl text-[#8892B0] mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Transform your Business with AI and Build your Tomorrow Today!
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link 
                to="/about" 
                className="inline-flex items-center space-x-2 bg-[#233554] text-[#FFD700] px-5 py-2.5 rounded-lg font-medium hover:bg-[#2A4163] hover:text-[#FFE55C] transition-colors duration-300 shadow-lg shadow-[#233554]/20 hover:shadow-xl hover:shadow-[#233554]/30"
              >
                <span>Learn More</span>
                <FaArrowRight />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Quick Links Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div 
          className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#E2E8F0] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300"
          whileHover={{ y: -4 }}
        >
          <FaGraduationCap className="text-3xl text-[#1A2B3C] mb-4" />
          <h3 className="text-xl font-semibold text-[#0B1B2D] mb-3">Education</h3>
          <p className="text-[#334155]">PhD in Computer Science</p>
          <p className="text-[#334155] text-sm">2020 - 2024</p>
        </motion.div>

        <motion.div 
          className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#E2E8F0] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300"
          whileHover={{ y: -4 }}
        >
          <FaBriefcase className="text-3xl text-[#1A2B3C] mb-4" />
          <h3 className="text-xl font-semibold text-[#0B1B2D] mb-3">Experience</h3>
          <p className="text-[#334155]">Research Scientist</p>
          <p className="text-[#334155] text-sm">2014 - Present</p>
        </motion.div>

        <motion.div 
          className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#E2E8F0] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300"
          whileHover={{ y: -4 }}
        >
          <FaLightbulb className="text-3xl text-[#1A2B3C] mb-4" />
          <h3 className="text-xl font-semibold text-[#0B1B2D] mb-3">Expertise</h3>
          <p className="text-[#334155]">Deep Learning & AI</p>
          <p className="text-[#334155] text-sm">AI Agents</p>
        </motion.div>
      </div>

      {/* Social Links */}
      <div className="flex justify-center gap-4 mt-6">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#E2E8F0] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 text-[#1A2B3C] hover:text-[#2C3E50]"
        >
          <FaGithub className="text-2xl" />
        </a>
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#E2E8F0] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 text-[#1A2B3C] hover:text-[#2C3E50]"
        >
          <FaLinkedin className="text-2xl" />
        </a>
        <Link
          to="/contact"
          className="bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#E2E8F0] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 text-[#1A2B3C] hover:text-[#2C3E50]"
        >
          <FaEnvelope className="text-2xl" />
        </Link>
      </div>
    </motion.div>
  );
};

export default Home; 
