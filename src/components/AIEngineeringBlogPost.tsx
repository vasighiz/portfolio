import { motion } from 'framer-motion';
import { FaArrowLeft, FaCalendar, FaExternalLinkAlt, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import aiEngineeringImage from '../assets/aiEngineeringImagePart1';

const AIEngineeringBlogPost = () => {
  return (
    <motion.article
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-4xl mx-auto"
    >
      <Link
        to="/blog"
        className="inline-flex items-center text-[#FFD700] hover:text-[#FFE55C] mb-8"
      >
        <FaArrowLeft className="mr-2" />
        Back to Blog
      </Link>

      <div className="relative h-64 md:h-96 mb-8 rounded-xl overflow-hidden">
        <img
          src={aiEngineeringImage}
          alt="AI Engineering in Production"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#112240] to-transparent opacity-60"></div>
      </div>

      <h1 className="text-4xl font-bold text-[#CCD6F6] mb-6">
        AI Engineering in Production: A Structured Study Reference
      </h1>

      <div className="flex items-center gap-4 text-[#8892B0] text-sm mb-8">
        <div className="flex items-center gap-2">
          <FaCalendar className="text-[#FFD700]" />
          <span>2026-08-02</span>
        </div>
        <div className="flex items-center gap-2">
          <FaUser className="text-[#FFD700]" />
          <span>Akram Vasighi</span>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-8">
        {['AI Engineering', 'RAG', 'AI Agents', 'Production AI'].map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 bg-[#233554] text-[#FFD700] rounded-full text-sm"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="prose prose-invert max-w-none text-[#8892B0]">
        <p className="mb-4">
          I created an open-source study reference called <strong className="text-[#CCD6F6]">AI Engineering in Production</strong>. It organizes the core concepts of modern AI engineering into focused, chapter-based notes that can be used as a practical reference while designing and building production AI systems.
        </p>

        <p className="mb-4">
          The repository begins with the role of AI engineering and foundation models, then moves through the decisions that shape real applications: how models are evaluated and selected, how prompts and context are constructed, and how retrieval and agentic systems extend a model beyond its training data.
        </p>

        <h2 className="text-2xl font-bold text-[#CCD6F6] mt-8 mb-4">What the reference covers</h2>

        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>What AI engineering means in practice</li>
          <li>Foundation models and their limitations</li>
          <li>Model and application evaluation</li>
          <li>Model selection across quality, cost, latency, privacy, and control</li>
          <li>Prompt engineering and prompt security</li>
          <li>Retrieval-augmented generation and context construction</li>
          <li>Agents, tools, planning, evaluation, and memory</li>
          <li>Fine-tuning and parameter-efficient adaptation</li>
          <li>Dataset engineering</li>
          <li>Inference optimization</li>
          <li>Architecture decisions and user-feedback loops</li>
        </ul>

        <h2 className="text-2xl font-bold text-[#CCD6F6] mt-8 mb-4">Why I created it</h2>

        <p className="mb-4">
          AI applications are not built from a model alone. Their quality depends on the surrounding engineering system: data, prompts, retrieval, tools, evaluations, safety controls, feedback, deployment, and inference performance. I wanted one structured place that connects those areas and makes their trade-offs easier to review during practical project work.
        </p>

        <p className="mb-8">
          Each topic is stored as a separate Markdown chapter, so the repository can grow over time with implementation examples, production patterns, diagrams, evaluation templates, and project notes.
        </p>

        <a
          href="https://github.com/vasighiz/AI-Engineering-in-Production"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-5 py-3 bg-[#FFD700] text-[#0A192F] font-semibold rounded-lg hover:bg-[#FFE55C] transition-colors duration-300"
        >
          View the GitHub Repository
          <FaExternalLinkAlt className="ml-2" />
        </a>
      </div>
    </motion.article>
  );
};

export default AIEngineeringBlogPost;
