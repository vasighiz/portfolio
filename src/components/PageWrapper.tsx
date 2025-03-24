import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface PageWrapperProps {
  children: ReactNode;
  title?: string;
}

const PageWrapper = ({ children, title }: PageWrapperProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-[#0A192F] rounded-xl p-6 min-h-full"
    >
      {title && (
        <h1 className="text-4xl font-bold text-[#CCD6F6] mb-8">{title}</h1>
      )}
      {children}
    </motion.div>
  );
};

export default PageWrapper; 