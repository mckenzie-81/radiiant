
import React from 'react';
import { motion } from 'framer-motion';
import Logo from '../ui/Logo';

const ContactHero = () => {
  return (
    <section className="relative pt-32 pb-16 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6 relative"
        >
          {/* Animated Logo with ripple effect - Increased size */}
          {/* <div>
            <Logo animate={true} variant="light" />
          </div> */}
          
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-display text-navy leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We're always ready to build with you.
          </motion.h1>
          
          <motion.p 
            className="mt-6 text-lg md:text-xl max-w-2xl mx-auto text-gray-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Have an idea, project, or question? Reach out and our team will get back within 24 hours. We work fast, and we work smart.
          </motion.p>
        </motion.div>
      </div>
      
      {/* Abstract background elements */}
      <motion.div 
        className="absolute top-20 left-0 w-full h-full -z-10 opacity-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="absolute w-96 h-96 bg-gradient-to-r from-indigo to-cyan rounded-full blur-3xl -top-20 -left-20 opacity-20" />
        <div className="absolute w-96 h-96 bg-gradient-to-r from-cyan to-indigo rounded-full blur-3xl top-40 right-0 opacity-20" />
        
        {/* Circuit pattern */}
        <svg className="absolute w-full h-full" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
          <g stroke="#002C5F" strokeWidth="1" fill="none" strokeDasharray="3,5">
            <path d="M0,500 Q250,300 500,500 T1000,500" />
            <path d="M0,600 Q250,400 500,600 T1000,600" />
            <path d="M0,400 Q250,200 500,400 T1000,400" />
            <path d="M0,700 Q250,500 500,700 T1000,700" />
            <path d="M0,300 Q250,100 500,300 T1000,300" />
          </g>
        </svg>
      </motion.div>
    </section>
  );
};

export default ContactHero;
