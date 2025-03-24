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
    title: "Understanding Deep Learning Fundamentals",
    excerpt: "A comprehensive guide to the basics of deep learning and neural networks.",
    content: "Deep learning is a subset of machine learning that uses neural networks with multiple layers (deep neural networks) to progressively extract higher-level features from raw input...",
    date: "March 15, 2024",
    author: "Akram Vasighi",
    tags: ["Deep Learning", "AI", "Machine Learning"],
    image: "/portfolio/blog/deep-learning.jpg",
    slug: "understanding-deep-learning-fundamentals"
  },
  {
    id: 2,
    title: "The Future of AI in Healthcare",
    excerpt: "Exploring how artificial intelligence is transforming the healthcare industry.",
    content: "Artificial intelligence is revolutionizing healthcare in ways we never imagined possible. From diagnosis to treatment planning, AI is becoming an integral part of modern medicine...",
    date: "March 10, 2024",
    author: "Akram Vasighi",
    tags: ["AI", "Healthcare", "Technology"],
    image: "/portfolio/blog/ai-healthcare.jpg",
    slug: "future-of-ai-in-healthcare"
  }
];

const Blog = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
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