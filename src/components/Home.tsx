import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

// You can switch between these two options by changing this value
const useCustomBanner = false;

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="h-full flex flex-col"
    >
      {/* Hero Banner */}
      <div className="relative h-[200px] -mx-8 -mt-8 mb-6">
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
              className="text-3xl md:text-4xl font-bold text-white mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Welcome to My Portfolio
            </motion.h1>
            <motion.p 
              className="text-base md:text-lg text-[#8892B0] mb-4"
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
                className="inline-flex items-center space-x-2 bg-[#233554] text-[#FFD700] px-4 py-2 rounded-lg font-medium hover:bg-[#2A4163] hover:text-[#FFE55C] transition-colors duration-300"
              >
                <span>Learn More</span>
                <FaArrowRight />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Quick Links Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 flex-1">
        <motion.div
          className="bg-[#112240] rounded-xl shadow-lg p-4 hover:shadow-xl transition-shadow duration-300 border border-[#233554] flex flex-col"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <h3 className="text-lg font-semibold mb-2 text-[#CCD6F6]">Research Work</h3>
          <p className="text-[#8892B0] mb-3 text-sm flex-1">Explore my research contributions in Machine Learning and AI.</p>
          <Link to="/projects" className="text-[#FFD700] hover:text-[#FFE55C] text-sm">View Projects →</Link>
        </motion.div>

        <motion.div
          className="bg-[#112240] rounded-xl shadow-lg p-4 hover:shadow-xl transition-shadow duration-300 border border-[#233554] flex flex-col"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <h3 className="text-lg font-semibold mb-2 text-[#CCD6F6]">Gallery</h3>
          <p className="text-[#8892B0] mb-3 text-sm flex-1">Visual showcase of my work and achievements.</p>
          <Link to="/gallery" className="text-[#FFD700] hover:text-[#FFE55C] text-sm">View Gallery →</Link>
        </motion.div>

        <motion.div
          className="bg-[#112240] rounded-xl shadow-lg p-4 hover:shadow-xl transition-shadow duration-300 border border-[#233554] flex flex-col"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <h3 className="text-lg font-semibold mb-2 text-[#CCD6F6]">Get in Touch</h3>
          <p className="text-[#8892B0] mb-3 text-sm flex-1">Interested in collaboration? Let's connect.</p>
          <Link to="/contact" className="text-[#FFD700] hover:text-[#FFE55C] text-sm">Contact Me →</Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Home; 