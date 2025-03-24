import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaGraduationCap, FaBriefcase, FaAward } from 'react-icons/fa';

// You can switch between these two options by changing this value
const useCustomBanner = false;

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="h-full flex flex-col gap-6"
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
              Welcome to My Portfolio
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl text-[#8892B0] mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Machine Learning & AI Researcher | PhD in Computer Science
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link 
                to="/about" 
                className="inline-flex items-center space-x-2 bg-[#233554] text-[#FFD700] px-5 py-2.5 rounded-lg font-medium hover:bg-[#2A4163] hover:text-[#FFE55C] transition-colors duration-300"
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
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <FaGraduationCap className="text-3xl text-primary-600 mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Education</h3>
          <p className="text-gray-600">PhD in Computer Science</p>
          <p className="text-gray-500 text-sm">2018 - 2022</p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <FaBriefcase className="text-3xl text-primary-600 mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Experience</h3>
          <p className="text-gray-600">Research Scientist</p>
          <p className="text-gray-500 text-sm">2022 - Present</p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <FaAward className="text-3xl text-primary-600 mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Expertise</h3>
          <p className="text-gray-600">Machine Learning & AI</p>
          <p className="text-gray-500 text-sm">Deep Learning, Bioinformatics</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Home; 