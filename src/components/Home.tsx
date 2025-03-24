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
    >
      {/* Hero Banner */}
      <div className="relative h-[300px] -mx-8 -mt-8 mb-12">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary-600/90 backdrop-blur">
          {useCustomBanner ? (
            // Custom banner image option
            <div className="absolute inset-0 bg-[url('/portfolio/banner.jpg')] mix-blend-overlay opacity-50 bg-cover bg-center"></div>
          ) : (
            // Profile photo option
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-48 h-48">
                <div className="absolute inset-0 bg-[url('/portfolio/profile.jpg')] rounded-full bg-cover bg-center border-4 border-white/20"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/90 rounded-full mix-blend-overlay"></div>
              </div>
            </div>
          )}
        </div>
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div>
            <motion.h1 
              className="text-4xl md:text-5xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Welcome to My Portfolio
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl text-white/90 mb-8"
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
                className="inline-flex items-center space-x-2 bg-white text-primary px-6 py-3 rounded-lg font-medium hover:bg-primary-50 transition-colors duration-300"
              >
                <span>Learn More</span>
                <FaArrowRight />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Quick Links Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <motion.div
          className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <h3 className="text-xl font-semibold mb-3">Research Work</h3>
          <p className="text-gray-600 mb-4">Explore my research contributions in Machine Learning and AI.</p>
          <Link to="/projects" className="text-primary hover:text-primary-600">View Projects →</Link>
        </motion.div>

        <motion.div
          className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <h3 className="text-xl font-semibold mb-3">Gallery</h3>
          <p className="text-gray-600 mb-4">Visual showcase of my work and achievements.</p>
          <Link to="/gallery" className="text-primary hover:text-primary-600">View Gallery →</Link>
        </motion.div>

        <motion.div
          className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <h3 className="text-xl font-semibold mb-3">Get in Touch</h3>
          <p className="text-gray-600 mb-4">Interested in collaboration? Let's connect.</p>
          <Link to="/contact" className="text-primary hover:text-primary-600">Contact Me →</Link>
        </motion.div>
      </div>

      {/* Featured Section */}
      <motion.div
        className="text-center mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <Link 
          to="/testimonials" 
          className="inline-flex items-center space-x-2 text-primary hover:text-primary-600"
        >
          <span>View Testimonials</span>
          <FaArrowRight />
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default Home; 