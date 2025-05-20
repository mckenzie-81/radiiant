
import React from 'react';
import { motion } from 'framer-motion';

interface ServiceGridProps {
  children: React.ReactNode;
}

const ServiceGrid: React.FC<ServiceGridProps> = ({ children }) => {
  return (
    <motion.div 
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      {children}
    </motion.div>
  );
};

export default ServiceGrid;
