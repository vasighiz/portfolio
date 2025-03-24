import { motion } from 'framer-motion';
import { FaQuoteLeft, FaStar, FaLinkedin } from 'react-icons/fa';

interface LinkedInRecommendation {
  id: number;
  image: string; // Screenshot of the LinkedIn recommendation
  link?: string; // Optional link to the actual LinkedIn recommendation
}

const testimonials = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    role: "Research Director at AI Institute",
    image: "/portfolio/testimonial1.jpg",
    content: "Akram's research contributions in machine learning have been exceptional. Their innovative approach to problem-solving and dedication to advancing the field is truly commendable.",
    rating: 5
  },
  {
    id: 2,
    name: "Prof. Michael Chen",
    role: "Department Head, Computer Science",
    image: "/portfolio/testimonial2.jpg",
    content: "Working with Akram has been a pleasure. Their deep understanding of AI and ability to communicate complex concepts clearly makes them an invaluable collaborator.",
    rating: 5
  },
  {
    id: 3,
    name: "Dr. Emily Rodriguez",
    role: "Lead Data Scientist",
    image: "/portfolio/testimonial3.jpg",
    content: "Akram's expertise in machine learning and dedication to research excellence has significantly contributed to our project's success. Their work consistently exceeds expectations.",
    rating: 5
  }
];

const linkedInRecommendations: LinkedInRecommendation[] = [
  {
    id: 1,
    image: "/portfolio/linkedin-rec1.jpg",
    link: "https://www.linkedin.com/in/your-profile/details/recommendations/"
  },
  // Add more LinkedIn recommendations as needed
];

const Testimonials = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="space-y-12"
    >
      {/* Personal Testimonials Section */}
      <div>
        <div className="text-center mb-12">
          <motion.h1 
            className="text-3xl font-bold text-gray-800 mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Testimonials & Recommendations
          </motion.h1>
          <motion.p 
            className="text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            What colleagues and collaborators say about my work
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="bg-white rounded-xl shadow-md p-6 relative"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute -top-4 left-6">
                <FaQuoteLeft className="text-4xl text-primary/20" />
              </div>
              
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-16 h-16 rounded-full overflow-hidden">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" />
                ))}
              </div>

              <p className="text-gray-700 italic">{testimonial.content}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* LinkedIn Recommendations Section */}
      <div className="mt-16">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center justify-center gap-3">
            <FaLinkedin className="text-[#0A66C2]" />
            LinkedIn Recommendations
          </h2>
          <p className="text-gray-600">Verified recommendations from my LinkedIn network</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {linkedInRecommendations.map((recommendation, index) => (
            <motion.div
              key={recommendation.id}
              className="bg-white rounded-xl shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <a 
                href={recommendation.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block"
              >
                <img 
                  src={recommendation.image} 
                  alt="LinkedIn Recommendation" 
                  className="w-full h-auto"
                />
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a 
            href="https://www.linkedin.com/in/vasighi/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#0A66C2] hover:text-[#084482] font-medium"
          >
            <FaLinkedin />
            View all recommendations on LinkedIn
          </a>
        </motion.div>
      </div>

      <motion.div 
        className="text-center mt-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <p className="text-gray-600">
          Want to share your experience working with me?{' '}
          <a href="/contact" className="text-primary hover:text-primary-600">
            Get in touch
          </a>
        </p>
      </motion.div>
    </motion.div>
  );
};

export default Testimonials; 