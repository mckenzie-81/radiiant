
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        type: "spring",
        stiffness: 50
      }}
      viewport={{ once: true }}
      className={cn(
        "group relative rounded-xl p-6 h-64 flex flex-col justify-between overflow-hidden magnetic-card cursor-pointer",
        "bg-white shadow-md border border-gray-100",
        isHovered ? "shadow-xl" : ""
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background gradient that appears on hover */}
      <div 
        className={cn(
          "absolute inset-0 bg-gradient-to-br from-indigo/5 via-cyan/5 to-indigo/5 transition-opacity duration-500",
          isHovered ? "opacity-100" : "opacity-0"
        )} 
      />
      
      {/* Icon with bounce animation on hover */}
      <div 
        className={cn(
          "relative w-12 h-12 flex items-center justify-center rounded-lg mb-4 transition-all duration-300",
          "bg-softBlue text-navy",
          isHovered ? "bg-navy text-white scale-110" : ""
        )}
      >
        <motion.div
          animate={{ y: isHovered ? [0, -4, 0] : 0 }}
          transition={{ duration: 0.4, repeat: isHovered ? 1 : 0 }}
        >
          {icon}
        </motion.div>
      </div>
      
      {/* Content */}
      <div className="relative space-y-2">
        <h3 className="text-xl font-display font-semibold text-navy">{title}</h3>
        <p className="text-gray-600 text-sm line-clamp-3 transition-all duration-300 group-hover:line-clamp-none">
          {description}
        </p>
      </div>
      
      {/* Arrow indicator */}
      <div className={cn(
        "absolute bottom-6 right-6 w-6 h-6 flex items-center justify-center rounded-full",
        "transition-all duration-300 transform",
        isHovered ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
      )}>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path 
            d="M3.33337 8H12.6667M12.6667 8L8.00004 3.33333M12.6667 8L8.00004 12.6667" 
            stroke={isHovered ? "#4C00FF" : "#002C5F"} 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
