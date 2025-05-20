
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Logo from '@/components/ui/Logo';

const Vision = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const rippleVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { 
      scale: 2, 
      opacity: [0, 0.3, 0],
      transition: { 
        duration: 3,
        repeat: Infinity,
        repeatType: "loop" as const,
        repeatDelay: 1
      }
    }
  };

  return (
    <section className="relative overflow-hidden pt-32 pb-24">
      {/* Background animation */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-full h-full bg-grid-pattern opacity-5"></div>
        
        {/* Ripple effect around the logo */}
        <motion.div
          className="absolute left-1/2 top-48 w-40 h-40 rounded-full bg-gradient-to-r from-indigo/10 to-cyan/10"
          variants={rippleVariants}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
        />
      </div>
      
      <div className="max-w-content">
        <div className="flex flex-col items-center mb-6">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Logo />
          </motion.div>
        </div>
        
        <motion.div
          className="max-w-4xl mx-auto text-center px-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display text-navy leading-tight mb-8">
            Africa is rewriting the rules of innovation. We're building the platforms behind it.
          </h1>
          
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            RADIIANT is a technology company focused on helping African businesses grow with tools that are 
            powerful, consultative, and human-centered. We build the invisible engines that help founders, 
            teams, and enterprises scale.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Vision;
