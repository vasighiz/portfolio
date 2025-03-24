import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaCalendar, FaUser, FaArrowRight } from 'react-icons/fa';
import PageWrapper from './PageWrapper';

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
    <PageWrapper title="Blog">
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
            <div className="p-6">
              <h2 className="text-2xl font-bold text-[#CCD6F6] mb-3">
                <Link to={`/blog/${post.slug}`} className="hover:text-[#FFD700] transition-colors duration-200">
                  {post.title}
                </Link>
              </h2>
              <div className="flex items-center space-x-4 text-[#8892B0] mb-4">
                <span className="flex items-center space-x-2">
                  <FaCalendar />
                  <span>{post.date}</span>
                </span>
                <span className="flex items-center space-x-2">
                  <FaUser />
                  <span>{post.author}</span>
                </span>
              </div>
              <p className="text-[#8892B0] mb-4">{post.excerpt}</p>
              <div className="flex items-center">
                <Link
                  to={`/blog/${post.slug}`}
                  className="inline-flex items-center space-x-2 text-[#FFD700] hover:text-[#FFE55C] transition-colors duration-200"
                >
                  <span>Read More</span>
                  <FaArrowRight />
                </Link>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </PageWrapper>
  );
};

export default Blog; 