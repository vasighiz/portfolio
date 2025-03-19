import { motion } from 'framer-motion';

const Header = () => {
  return (
    <header className="py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <motion.div 
            className="flex flex-col items-center space-y-3"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="relative w-40 h-40"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src="/portfolio/profile.jpg"
                alt="Akram Vasighi"
                className="rounded-full w-full h-full object-cover border-4 border-primary/20 shadow-xl"
              />
            </motion.div>
            <div>
              <motion.h1 
                className="text-lg font-bold text-gray-900 mb-1"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Akram Vasighi
              </motion.h1>
              <motion.p 
                className="text-md text-gray-600 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                PhD in Computer Science<br />
                Machine Learning & AI Researcher
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default Header;