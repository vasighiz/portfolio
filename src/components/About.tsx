import { motion } from 'framer-motion'

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-3xl"
    >
      <h3 className="section-title">About Me</h3>
      
      <motion.div 
        className="space-y-6 text-md text-gray-600"
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <p>
          I'm a passionate AI, Data Science, and machine learning engineer based in Canada. 
          With a keen eye for new technologies and a love for research and development, I contributed in 
          various AI-driven projects involving large-scale data and participating in multidisciplinary, national initiatives.
        </p>
        
        <p>
          My journey in Machine Learning started 9 years ago, and since then, 
          I've had the opportunity to work with various technologies and frameworks. 
          I specialize in PyTorch, TensorFlow, Scikit-learn, and many more,
          always staying up-to-date with the latest AI trends.
        </p>

        <p>
          When I'm not coding, you can find me Dancing, Cooking, Traveling, House Decoration, and Embroidery. 
          I'm deeply passionate about exploring cutting-edge technologies and tackling challenging problems 
          that promote personal and professional growth.
        </p>
      </motion.div>

      <motion.div 
        className="mt-12"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <h4 className="text-lg font-medium mb-5">Current Focus and Projects</h4>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          <li>RecSys</li>
          <li>LLMs</li>
          <li>AI Agents</li>
          <li>AI Chatbots</li>
        </ul>
      </motion.div>
    </motion.section>
  )
}

export default About 