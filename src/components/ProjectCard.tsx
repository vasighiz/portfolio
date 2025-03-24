// ProjectCard.tsx
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

interface ProjectCardProps {
  title: string
  description: string
  technologies: string[]
  image: string
  githubUrl?: string
  liveUrl?: string
}

const ProjectCard = ({ title, description, technologies, image, githubUrl, liveUrl }: ProjectCardProps) => {
  return (
    <motion.div
      className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#E2E8F0] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300"
      whileHover={{ y: -4 }}
    >
      <div className="aspect-video mb-4 rounded-lg overflow-hidden bg-[#F1F5F9]">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      
      <h3 className="text-xl font-semibold text-[#0B1B2D] mb-2">{title}</h3>
      <p className="text-[#334155] mb-4">{description}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="px-2 py-1 text-sm bg-[#F1F5F9] text-[#334155] rounded-md"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex gap-4">
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1A2B3C] hover:text-[#2C3E50] transition-colors duration-300 flex items-center gap-2"
          >
            <FaGithub />
            <span>GitHub</span>
          </a>
        )}
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1A2B3C] hover:text-[#2C3E50] transition-colors duration-300 flex items-center gap-2"
          >
            <FaExternalLinkAlt />
            <span>Live Demo</span>
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
