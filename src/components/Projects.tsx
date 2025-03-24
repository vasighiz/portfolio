import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: 'Deep Learning for Healthcare',
      description: 'Research project focusing on applying deep learning techniques to medical imaging analysis.',
      technologies: ['Python', 'TensorFlow', 'PyTorch', 'Medical Imaging'],
      image: '/portfolio/project1.jpg'
    },
    {
      title: 'AI-Powered Bioinformatics',
      description: 'Development of machine learning models for genomic data analysis and prediction.',
      technologies: ['Python', 'Scikit-learn', 'Bioinformatics', 'Data Analysis'],
      image: '/portfolio/project2.jpg'
    },
    {
      title: 'Neural Network Optimization',
      description: 'Research on optimizing neural network architectures for improved performance.',
      technologies: ['Python', 'Deep Learning', 'Optimization', 'Research'],
      image: '/portfolio/project3.jpg'
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
        <h1 className="text-4xl font-bold text-[#0B1B2D] mb-4">Research Projects</h1>
        <p className="text-[#334155] leading-relaxed">
          Explore my research contributions in Machine Learning and Artificial Intelligence.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
