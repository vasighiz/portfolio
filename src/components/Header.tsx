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
              <div className="absolute inset-0 bg-[#1A2B3C] rounded-full blur-xl opacity-20"></div>
              <img
                src="/portfolio/profile.jpg"
                alt="Akram Vasighi"
                className="relative w-full h-full rounded-full object-cover border-4 border-[#E2E8F0] shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
              />
            </motion.div>
            <div>
              <h1 className="text-2xl font-bold text-[#0B1B2D] mb-2">
                Akram Vasighi
                @ Celligent-AI
              </h1>
              <p className="text-lg text-[#334155] font-medium leading-relaxed">
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