import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaCalendar, FaUser, FaArrowRight } from 'react-icons/fa';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  tags: string[];
  image: string;
  slug: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Future of AI in Healthcare: A New Era of Precision and Support",
    excerpt: "Exploring how artificial intelligence is transforming the healthcare industry.",
    content: "Artificial intelligence is rapidly transforming healthcare, moving far beyond just automating tasks...",
    date: "2024-03-25",
    author: "Akram Vasighi",
    tags: ["AI", "Healthcare", "Machine Learning", "Future Tech"],
    image: "/portfolio/blog/ai-healthcare.jpg",
    slug: "future-of-ai-in-healthcare"
  },
  {
    id: 2,
    title: "Fine-Tuning Large Language Models",
    excerpt: "A comprehensive guide to fine-tuning LLMs for domain-specific applications.",
    content: "Fine-Tuning Large Language Models: Custom Intelligence for Real-World Impact...",
    date: "2024-03-15",
    author: "Akram Vasighi",
    tags: ["AI", "Machine Learning", "LLM", "Fine-tuning"],
    image: "/portfolio/blog/llm-fine-tuning.jpg",
    slug: "fine-tuning-large-language-models"
  },
  {
    id: 3,
    title: "Fine-tuning your first LLM using Hugging Face Transformers",
    excerpt: "A step-by-step tutorial on fine-tuning LLMs with Hugging Face Transformers.",
    content: "Fine-tuning a large language model might sound intimidating—but with the right tools, it's surprisingly accessible...",
    date: "2024-03-20",
    author: "Akram Vasighi",
    tags: ["AI", "Machine Learning", "LLM", "Hugging Face", "Tutorial"],
    image: "/portfolio/blog/huggingface-transformers.jpg",
    slug: "fine-tuning-llm-huggingface-transformers"
  }
];

const Blog = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-[#0A192F] rounded-xl p-6 min-h-full"
    >
      <h1 className="text-4xl font-bold text-[#CCD6F6] mb-8">Blog</h1>
      
      <div className="grid gap-8">
        {blogPosts.map((post) => (
          <motion.article
            key={post.id}
            className="bg-[#112240] rounded-xl shadow-lg overflow-hidden border border-[#233554]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="relative h-48 md:h-64">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#112240] to-transparent opacity-60"></div>
            </div>
            
            <div className="p-6">
              <h2 className="text-2xl font-bold text-[#CCD6F6] mb-4">
                {post.title}
              </h2>
              
              <div className="flex items-center gap-4 text-[#8892B0] text-sm mb-4">
                <div className="flex items-center gap-2">
                  <FaCalendar className="text-[#FFD700]" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaUser className="text-[#FFD700]" />
                  <span>{post.author}</span>
                </div>
              </div>

              <p className="text-[#8892B0] mb-4">
                {post.excerpt}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-[#233554] text-[#FFD700] rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <Link
                to={`/blog/${post.slug}`}
                className="inline-flex items-center text-[#FFD700] hover:text-[#FFE55C] transition-colors duration-300"
              >
                Read More
                <FaArrowRight className="ml-2" />
              </Link>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.div>
  );
};

export default Blog; 