import { motion } from 'framer-motion';

const Header = () => {
  return (
    <motion.header 
      className="flex flex-col items-center text-center lg:text-left"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="relative"
      >
        <div className="absolute inset-0 bg-primary-200 rounded-full blur-xl opacity-50"></div>
        <img
          src="/profile.jpg"
          alt="Akram Vasighi"
          className="w-24 h-24 rounded-full object-cover border-3 border-primary-100 shadow-lg relative z-10"
        />
      </motion.div>
      <div className="mt-4">
        <motion.h1 
          className="text-xl font-medium text-gray-900"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          Akram Vasighi
        </motion.h1>
        <motion.p 
          className="text-sm text-gray-600 mt-0.5"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          PhD in Computer Science
        </motion.p>
        <motion.p 
          className="text-xs text-primary-600 mt-0.5"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          Machine Learning & AI Researcher
        </motion.p>
      </div>
    </motion.header>
  );
};

export default Header;