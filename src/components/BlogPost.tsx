import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import { FaCalendar, FaUser, FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

interface BlogPost {
  id: number;
  title: string;
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
    content: `
      Deep learning is a subset of machine learning that uses neural networks with multiple layers (deep neural networks) to progressively extract higher-level features from raw input.

      ## What is Deep Learning?

      Deep learning is a type of machine learning that teaches computers to do what comes naturally to humans: learn by example. Deep learning is a key technology behind driverless cars, enabling them to recognize a stop sign, or to distinguish a pedestrian from a lamppost.

      ![Deep Learning Concept](/portfolio/blog/deep-learning-concept.jpg)

      ## Key Components

      1. Neural Networks
      2. Activation Functions
      3. Backpropagation
      4. Optimization Algorithms

      ## Applications

      Deep learning has been successfully applied to various domains:

      - Computer Vision
      - Natural Language Processing
      - Speech Recognition
      - Autonomous Systems

      ![AI Applications](/portfolio/blog/ai-applications.jpg)
    `,
    date: "March 15, 2024",
    author: "Akram Vasighi",
    tags: ["Deep Learning", "AI", "Machine Learning"],
    image: "/portfolio/blog/deep-learning.jpg",
    slug: "understanding-deep-learning-fundamentals"
  },
  {
    id: 2,
    title: "The Future of AI in Healthcare",
    content: `
      Artificial intelligence is revolutionizing healthcare in ways we never imagined possible. From diagnosis to treatment planning, AI is becoming an integral part of modern medicine.

      ## Current Applications

      AI is already making significant contributions to healthcare:

      - Medical Imaging Analysis
      - Drug Discovery
      - Patient Care Optimization
      - Predictive Analytics

      ![AI in Healthcare](/portfolio/blog/ai-healthcare-applications.jpg)

      ## Future Prospects

      The future of AI in healthcare looks promising, with potential applications in:

      - Personalized Medicine
      - Early Disease Detection
      - Treatment Planning
      - Healthcare Resource Management

      ## Challenges and Considerations

      While AI offers tremendous potential, there are important considerations:

      - Data Privacy
      - Ethical Concerns
      - Integration with Existing Systems
      - Training Healthcare Professionals
    `,
    date: "March 10, 2024",
    author: "Akram Vasighi",
    tags: ["AI", "Healthcare", "Technology"],
    image: "/portfolio/blog/ai-healthcare.jpg",
    slug: "future-of-ai-in-healthcare"
  }
];

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="text-center">
        <h1 className="text-2xl font-bold text-[#CCD6F6] mb-4">Post not found</h1>
        <Link to="/blog" className="text-[#FFD700] hover:text-[#FFE55C]">
          Back to Blog
        </Link>
      </div>
    );
  }

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
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#112240] to-transparent opacity-60"></div>
      </div>

      <h1 className="text-4xl font-bold text-[#CCD6F6] mb-6">
        {post.title}
      </h1>

      <div className="flex items-center gap-4 text-[#8892B0] text-sm mb-8">
        <div className="flex items-center gap-2">
          <FaCalendar className="text-[#FFD700]" />
          <span>{post.date}</span>
        </div>
        <div className="flex items-center gap-2">
          <FaUser className="text-[#FFD700]" />
          <span>{post.author}</span>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-8">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 bg-[#233554] text-[#FFD700] rounded-full text-sm"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="prose prose-invert max-w-none">
        {post.content.split('\n\n').map((paragraph, index) => {
          if (paragraph.startsWith('## ')) {
            return (
              <h2 key={index} className="text-2xl font-bold text-[#CCD6F6] mt-8 mb-4">
                {paragraph.slice(3)}
              </h2>
            );
          }
          if (paragraph.startsWith('![') && paragraph.includes('](')) {
            const match = paragraph.match(/!\[(.*?)\]\((.*?)\)/);
            if (match) {
              return (
                <div key={index} className="my-8">
                  <img
                    src={match[2]}
                    alt={match[1]}
                    className="w-full rounded-lg shadow-lg"
                  />
                </div>
              );
            }
          }
          return (
            <p key={index} className="text-[#8892B0] mb-4">
              {paragraph}
            </p>
          );
        })}
      </div>
    </motion.article>
  );
};

export default BlogPost; 