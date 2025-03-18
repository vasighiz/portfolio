import { motion } from 'framer-motion'

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-3xl"
    >
      <h2 className="section-title">About Me</h2>
      
      <motion.div 
        className="space-y-6 text-lg text-gray-600"
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <p>
          Hello! I'm a passionate frontend developer based in [Your Location]. 
          With a keen eye for design and a love for clean code, I create engaging 
          web experiences that combine aesthetics with functionality.
        </p>
        
        <p>
          My journey in web development started [X] years ago, and since then, 
          I've had the opportunity to work with various technologies and frameworks. 
          I specialize in React, TypeScript, and modern CSS practices, always 
          staying up-to-date with the latest web development trends.
        </p>

        <p>
          When I'm not coding, you can find me [Your Interests/Hobbies]. I believe 
          in continuous learning and regularly contribute to open-source projects.
        </p>
      </motion.div>

      <motion.div 
        className="mt-12"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <h3 className="text-xl font-medium mb-4">Current Focus</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          <li>Building responsive web applications</li>
          <li>Exploring advanced React patterns</li>
          <li>Contributing to open source projects</li>
          <li>Learning about web accessibility</li>
        </ul>
      </motion.div>
    </motion.section>
  )
}

export default About 