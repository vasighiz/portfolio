import { motion } from 'framer-motion'
import { FaGraduationCap, FaBriefcase, FaAward } from 'react-icons/fa'

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-gradient-to-br from-primary-50/50 via-white to-primary-100/50 rounded-xl p-6"
    >
      <h1 className="text-4xl font-bold text-gray-900 mb-8">About Me</h1>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-700 leading-relaxed mb-6">
          I am a passionate Machine Learning and AI researcher with a PhD in Computer Science. 
          My research focuses on developing innovative solutions in deep learning and artificial intelligence, 
          with a particular interest in healthcare applications and bioinformatics.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-primary-100">
            <FaGraduationCap className="text-3xl text-primary-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Education</h3>
            <p className="text-gray-600">PhD in Computer Science</p>
            <p className="text-gray-500 text-sm">2018 - 2022</p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-primary-100">
            <FaBriefcase className="text-3xl text-primary-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Experience</h3>
            <p className="text-gray-600">Research Scientist</p>
            <p className="text-gray-500 text-sm">2022 - Present</p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-primary-100">
            <FaAward className="text-3xl text-primary-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Expertise</h3>
            <p className="text-gray-600">Machine Learning & AI</p>
            <p className="text-gray-500 text-sm">Deep Learning, Bioinformatics</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default About 