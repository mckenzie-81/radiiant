
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface ServiceGridCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}

const ServiceGridCard: React.FC<ServiceGridCardProps> = ({ title, description, icon, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        ease: [0.19, 1.0, 0.22, 1.0]
      }}
      className="bg-white rounded-xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 group cursor-pointer"
      style={{ minHeight: '16rem' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background gradient that appears on hover */}
      <div 
        className={`absolute inset-0 bg-gradient-to-br from-indigo/5 via-cyan/5 to-indigo/5 transition-opacity duration-500 rounded-xl ${
          isHovered ? "opacity-100" : "opacity-0"
        }`} 
      />
      
      {/* Icon with bounce animation on hover */}
      <div 
        className={`relative w-12 h-12 flex items-center justify-center rounded-lg mb-5 transition-all duration-300
          bg-softBlue text-navy
          ${isHovered ? "bg-navy text-white scale-110" : ""}`}
      >
        <motion.div
          animate={{ y: isHovered ? [0, -4, 0] : 0 }}
          transition={{ duration: 0.4, repeat: isHovered ? 1 : 0 }}
        >
          {icon}
        </motion.div>
      </div>
      
      {/* Content */}
      <div className="relative space-y-3">
        <h3 className="text-xl font-display font-semibold text-navy">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
        
        {/* Link that appears on hover */}
        <motion.div 
          className={`mt-4 transform transition-all duration-300 ${
            isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <a href="#details" className="text-indigo font-medium inline-flex items-center">
            Learn more <ArrowRight className="w-4 h-4 ml-1" />
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ServiceGridCard;
