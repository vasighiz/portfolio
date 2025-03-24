// ProjectCard.tsx (ensure exactly matches)
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

interface ProjectCardProps {
  title: string
  description: string
  technologies: string[]
  githubUrl: string
  liveUrl?: string
}

const ProjectCard = ({ title, description, technologies, githubUrl, liveUrl }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="bg-[#112240] rounded-xl shadow-lg overflow-hidden border border-[#233554]"
    >
      <div className="p-6">
        <motion.h3 
          className="text-2xl font-bold text-[#CCD6F6] mb-4"
        >
          {title}
        </motion.h3>
        <p className="text-[#8892B0] mb-4 leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <motion.span 
              key={tech} 
              className="px-3 py-1 bg-[#233554] text-[#FFD700] rounded-full text-sm"
              whileHover={{ scale: 1.05 }}
            >
              {tech}
            </motion.span>
          ))}
        </div>
        <div className="flex space-x-4">
          <motion.a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-[#FFD700] hover:text-[#FFE55C] transition-colors duration-300"
            whileHover={{ x: 5 }}
          >
            <FaGithub className="mr-2" />
            GitHub
          </motion.a>
          {liveUrl && (
            <motion.a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-[#FFD700] hover:text-[#FFE55C] transition-colors duration-300"
              whileHover={{ x: 5 }}
            >
              <FaExternalLinkAlt className="mr-2" />
              Live Demo
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectCard
