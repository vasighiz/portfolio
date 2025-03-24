import { motion } from 'framer-motion';

const Header = () => {
  return (
    <header className="py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <div className="flex flex-col items-center space-y-4">
            <motion.div
              className="relative w-48 h-48"
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
              <h1 className="text-2xl font-bold text-gray-900 mb-2">
                Akram Vasighi
              </h1>
              <p className="text-lg text-primary font-medium leading-relaxed">
                PhD in Computer Science<br />
                Machine Learning & AI
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;