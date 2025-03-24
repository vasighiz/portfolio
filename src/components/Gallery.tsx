import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FaArrowLeft, FaArrowRight, FaTimes } from 'react-icons/fa';

interface GalleryItem {
  id: number;
  title: string;
  description: string;
  image: string;
  detailedDescription?: string;
  technologies?: string[];
  link?: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "Project 1",
    description: "Brief description of project 1",
    detailedDescription: "Detailed explanation of project 1, including its goals, implementation, and outcomes.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    image: "/portfolio/work1.jpg",
    link: "https://project1.com"
  },
  {
    id: 2,
    title: "Project 2",
    description: "Brief description of project 2",
    detailedDescription: "Detailed explanation of project 2, including its goals, implementation, and outcomes.",
    technologies: ["Python", "TensorFlow", "OpenCV"],
    image: "/portfolio/work2.jpg",
  },
  {
    id: 3,
    title: "Project 3",
    description: "Brief description of project 3",
    detailedDescription: "Detailed explanation of project 3, including its goals, implementation, and outcomes.",
    technologies: ["Python", "TensorFlow", "OpenCV"],
    image: "/portfolio/work3.jpg",
  },
  {
    id: 4,
    title: "Project 4",
    description: "Brief description of project 4",
    detailedDescription: "Detailed explanation of project 4, including its goals, implementation, and outcomes.",
    technologies: ["Python", "TensorFlow", "OpenCV"],
    image: "/portfolio/work4.jpg",
  },
  {
    id: 5,
    title: "Project 5",
    description: "Brief description of project 5",
    detailedDescription: "Detailed explanation of project 5, including its goals, implementation, and outcomes.",
    technologies: ["Python", "TensorFlow", "OpenCV"],
    image: "/portfolio/work5.jpg",
  },
  {
    id: 6,
    title: "Project 6",
    description: "Brief description of project 6",
    detailedDescription: "Detailed explanation of project 6, including its goals, implementation, and outcomes.",
    technologies: ["Python", "TensorFlow", "OpenCV"],
    image: "/portfolio/work6.jpg",
  },
  {
    id: 7,
    title: "Project 7",
    description: "Brief description of project 7",
    detailedDescription: "Detailed explanation of project 7, including its goals, implementation, and outcomes.",
    technologies: ["Python", "TensorFlow", "OpenCV"],
    image: "/portfolio/work7.jpg",
  }
];

const Gallery = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedWork, setSelectedWork] = useState<GalleryItem | null>(null);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(galleryItems.length / itemsPerPage);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const getCurrentItems = () => {
    const start = currentPage * itemsPerPage;
    return galleryItems.slice(start, start + itemsPerPage);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="container mx-auto px-4 py-8"
    >
      <motion.h2 
        className="text-3xl font-bold text-gray-900 mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        Gallery
      </motion.h2>
      
      <div className="relative perspective-1000">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, rotateY: -90 }}
            animate={{ opacity: 1, rotateY: 0 }}
            exit={{ opacity: 0, rotateY: 90 }}
            transition={{ 
              duration: 0.8, 
              ease: "easeInOut",
              opacity: { duration: 0.4 }
            }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {getCurrentItems().map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  ease: "easeOut",
                  delay: index * 0.1 + 0.3
                }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <button
                    onClick={() => setSelectedWork(item)}
                    className="text-primary hover:text-primary-600 font-medium transition-colors duration-300"
                  >
                    View Details →
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {totalPages > 1 && (
          <div className="flex justify-center items-center mt-8 space-x-4">
            <motion.button
              onClick={prevPage}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors duration-300"
            >
              <FaArrowLeft />
            </motion.button>
            <span className="text-gray-600">
              Page {currentPage + 1} of {totalPages}
            </span>
            <motion.button
              onClick={nextPage}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors duration-300"
            >
              <FaArrowRight />
            </motion.button>
          </div>
        )}
      </div>

      {/* Detailed View Modal */}
      <AnimatePresence>
        {selectedWork && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedWork(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ 
                duration: 0.5,
                ease: "easeOut"
              }}
              className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <motion.button
                  onClick={() => setSelectedWork(null)}
                  className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaTimes size={24} />
                </motion.button>
                <img
                  src={selectedWork.image}
                  alt={selectedWork.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{selectedWork.title}</h3>
                  <p className="text-gray-600 mb-4">{selectedWork.detailedDescription}</p>
                  {selectedWork.technologies && (
                    <div className="mb-4">
                      <h4 className="text-lg font-semibold mb-2">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedWork.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  {selectedWork.link && (
                    <motion.a
                      href={selectedWork.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-600 transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Visit Project
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Gallery; 