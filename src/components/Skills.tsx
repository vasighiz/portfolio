import { motion } from 'framer-motion'

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "Next.js", level: 80 },
        { name: "Tailwind CSS", level: 90 }
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 75 },
        { name: "Express", level: 70 },
        { name: "PostgreSQL", level: 65 }
      ]
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git", level: 85 },
        { name: "Docker", level: 60 },
        { name: "AWS", level: 65 }
      ]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  }

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0 }}
      variants={containerVariants}
    >
      <h2 className="section-title">Skills</h2>

      <div className="space-y-12">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div 
            key={categoryIndex}
            variants={itemVariants}
            className="space-y-6"
          >
            <h3 className="text-2xl font-light">{category.title}</h3>
            <div className="space-y-4">
              {category.skills.map((skill, skillIndex) => (
                <motion.div 
                  key={skillIndex}
                  className="space-y-2"
                  variants={itemVariants}
                >
                  <div className="flex justify-between">
                    <span className="text-gray-800">{skill.name}</span>
                    <span className="text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full">
                    <motion.div
                      className="h-full bg-gray-800 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.2 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div 
        className="mt-16"
        variants={itemVariants}
      >
        <h3 className="text-2xl font-light mb-6">Certifications</h3>
        <ul className="space-y-4 text-gray-600">
          <li>• Advanced React Patterns - Frontend Masters</li>
          <li>• TypeScript Professional - Certification Authority</li>
          <li>• Web Accessibility - Google Certification</li>
        </ul>
      </motion.div>
    </motion.section>
  )
}

export default Skills 