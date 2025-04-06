import { motion } from 'framer-motion'

const Resume = () => {
  const experiences = [
    {
      title: "Senior ML Engineer, App Developer, & Technical Lead",
      company: "Freelance.",
      period: "2022 - Present",
      description: "Led the design and development of an LLM-based tool for automated genomic data analysis to enable hypothesis generation for users without programming expertise.",
      technologies: ["Python ", "GPT", "Streamlit", "AWS", "AI Agents & Automation", "MCP"]
    },
    {
      title: "Post-Doctoral Fellow, Data analyst",
      company: "University of Windsor, School of Computer Science & Biomedical Science",
      period: "07/2024 - 03/2025",
      description: "Collaborated closely with researchers to translate scientific goals into efficient, scalable computational solutions, accelerating research through automated data processing and visualization.",
      technologies: ["Python", "R", "HPC and GPU Clusters","Docker & Containerization ", "Cross-functional Team Collaboration"]
    }
  ]

  const education = [
    {
      degree: "Ph.D. in Computer Science",
      institution: "University of Windsor, Canada",
      period: "2020 - 2024",
      description: "Focus on machine learning and deep learning applications in large-scale data analysis."
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <div className="space-y-8">
      <motion.section
        initial={{ opacity: 0, rotateY: -90 }}
        animate={{ opacity: 1, rotateY: 0 }}
        exit={{ opacity: 0, rotateY: 90 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        variants={containerVariants}
      >
        <h2 className="section-title">Resume</h2>

        <div className="space-y-12">
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-light mb-6">The Most Recent Experience</h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div 
                  key={index}
                  className="border-l-2 border-gray-200 pl-6 py-2"
                  variants={itemVariants}
                >
                  <h4 className="text-xl font-medium">{exp.title}</h4>
                  <p className="text-gray-600 mt-1">{exp.company} • {exp.period}</p>
                  <p className="mt-3 text-gray-600">{exp.description}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 bg-gray-100 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-light mb-6">Education</h3>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div 
                  key={index}
                  className="border-l-2 border-gray-200 pl-6 py-2"
                  variants={itemVariants}
                >
                  <h4 className="text-xl font-medium">{edu.degree}</h4>
                  <p className="text-gray-600 mt-1">{edu.institution} • {edu.period}</p>
                  <p className="mt-3 text-gray-600">{edu.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* CV Download Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h2 className="text-3xl font-light mb-4">Resume</h2>
        <p className="text-gray-600 mb-8">Download my full CV in PDF format</p>
        <motion.a
          href="/portfolio/cv.pdf"
          download="cv.pdf"
          className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-600 transition-colors duration-200"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
            />
          </svg>
          Download CV
        </motion.a>
      </motion.div>
    </div>
  )
}

export default Resume 