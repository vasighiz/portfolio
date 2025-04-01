import { motion } from 'framer-motion'

const Skills = () => {
  const skills = [
    {
      category: 'Machine Learning Frameworks & AI',
      items: ['Python', 'R', 'Pytorch', 'Pandas', 'NumPy', 'Matplotlib', 'Scikit-learn', 'Pytest', 'Streamlit', 'LLMs (GPT)', 'Prompt Engineering', 'Automation', 'Testing & CI/CD', 'RAG', 'AI Agents', 'LangChain']
    },
    {
      category: 'Tools & Platforms',
      items: ['Docker & Containerization', 'AWS', 'Git', 'HPC', 'Bash/Shell Scripting', 'Data Pipeline & ETL', 'SQL', 'LaTeX']
    },
    {
      category: 'Bioinformatics Tools',
      items: ['Scanpy', 'Seurat', 'Squidpy', 'DESeq2', 'SAMtools', 'BEDTools', 'IGV', 'GSEA', 'Cytoscape', 'STAR', 'MaGeCK', 'CasoFFinder', 'Crisprscore']
    },
    {
      category: 'Leadership & Product Thinking',
      items: ['Modularization & Scalable Architecture', 'Model Optimization', 'UI/UX Flow', 'Cross-functional Team Collaboration']
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