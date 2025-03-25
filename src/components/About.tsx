import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-gradient-to-br from-[#F8FAFC] via-white to-[#F1F5F9] rounded-xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
    >
      <h1 className="text-4xl font-bold text-[#0B1B2D] mb-8">About Me</h1>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-[#334155] leading-relaxed mb-6">
          I am a passionate Machine Learning and AI researcher with a PhD in Computer Science. 
          My research focuses on developing innovative solutions in deep learning and artificial intelligence, 
          with a particular interest in multidisciplinary applications.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
          <motion.div
            className="bg-white/90 backdrop-blur-sm rounded-xl p-5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#E2E8F0] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 flex flex-col"
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
          >
            <h3 className="text-xl font-semibold text-[#0B1B2D] mb-3">Research Work</h3>
            <p className="text-[#334155] mb-4 flex-1">Explore my research contributions in Machine Learning and AI.</p>
            <Link to="/projects" className="text-[#1A2B3C] hover:text-[#2C3E50] transition-colors duration-300">View Projects →</Link>
          </motion.div>

          <motion.div
            className="bg-white/90 backdrop-blur-sm rounded-xl p-5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#E2E8F0] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 flex flex-col"
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
          >
            <h3 className="text-xl font-semibold text-[#0B1B2D] mb-3">Gallery</h3>
            <p className="text-[#334155] mb-4 flex-1">Visual showcase of my work and achievements.</p>
            <Link to="/gallery" className="text-[#1A2B3C] hover:text-[#2C3E50] transition-colors duration-300">View Gallery →</Link>
          </motion.div>

          <motion.div
            className="bg-white/90 backdrop-blur-sm rounded-xl p-5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#E2E8F0] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 flex flex-col"
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
          >
            <h3 className="text-xl font-semibold text-[#0B1B2D] mb-3">Get in Touch</h3>
            <p className="text-[#334155] mb-4 flex-1">Interested in collaboration? Let's connect.</p>
            <Link to="/contact" className="text-[#1A2B3C] hover:text-[#2C3E50] transition-colors duration-300">Contact Me →</Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default About 
