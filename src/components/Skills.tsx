import { motion } from 'framer-motion'

const Skills = () => {
  const skills = [
    {
      category: 'Machine Learning',
      items: ['Deep Learning', 'Neural Networks', 'Computer Vision', 'Natural Language Processing']
    },
    {
      category: 'Programming',
      items: ['Python', 'TensorFlow', 'PyTorch', 'R', 'MATLAB']
    },
    {
      category: 'Data Analysis',
      items: ['Statistical Analysis', 'Data Visualization', 'Feature Engineering', 'Model Evaluation']
    },
    {
      category: 'Tools & Technologies',
      items: ['Git', 'Docker', 'AWS', 'Linux', 'Jupyter Notebooks']
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="space-y-8"
    >
      <div>
        <h1 className="text-4xl font-bold text-[#0B1B2D] mb-4">Skills & Expertise</h1>
        <p className="text-[#334155] leading-relaxed">
          A comprehensive overview of my technical skills and areas of expertise in Machine Learning and AI.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skills.map((skillGroup, index) => (
          <motion.div
            key={skillGroup.category}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#E2E8F0] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300"
          >
            <h2 className="text-xl font-semibold text-[#0B1B2D] mb-4">{skillGroup.category}</h2>
            <div className="flex flex-wrap gap-2">
              {skillGroup.items.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-[#F1F5F9] text-[#334155] rounded-md text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default Skills 