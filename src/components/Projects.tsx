import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: 'scAgentic: AI Agents for Automated Genomic Data Analysis',
      description: 'Innovative project focusing on automating genomic data analysis, powered by LLMs and AI Agents.',
      technologies: ["Python ", "GPT", "Streamlit", "AWS", "AI Agents & Automation", "MCP"],
      image: '/portfolio/project1.jpg',
      githubUrl: 'https://github.com/vasighiz/scAgentic',
      liveUrl: 'https://healthcare-dl-demo.com'
    },
    {
      title: 'SEGCECO: Subgraph Embedding of Gene expression matrix for prediction of CEll-cell COmmunication',
      description: 'Research project focusing on development of machine learning models for cellular interacction prediction.',
      technologies: ['Python', 'Scikit-learn', 'TensorFlow', 'numpy', 'GPU clusters', 'matplotlib', 'seaborn'],
      image: '/portfolio/segceco.jpg',
      githubUrl: 'https://github.com/vasighiz/SEGCECO',
      liveUrl: 'https://bioinformatics-ai-demo.com'
    },
    {
      title: 'TDMnewspapers-NMF',
      description: 'Using OCR Text Mining and NMF Topic Modeling to Analyze Historical Newspaper.',
      technologies: ['Python', 'NLP', 'Optimization', 'HPC'],
      image: '/portfolio/project3.jpg',
      githubUrl: 'https://github.com/vasighiz/TDMnewspapers-NMF',
      liveUrl: 'https://nn-optimization-demo.com'
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
        <h1 className="text-4xl font-bold text-[#0B1B2D] mb-4">Projects</h1>
        <p className="text-[#334155] leading-relaxed">
          Explore my contributions in Machine Learning and Artificial Intelligence.
        </p>
      </div>

      <div className="space-y-6">
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
