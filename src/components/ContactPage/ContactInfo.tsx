
import React from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Mail, 
  Phone,
  Linkedin, 
  Github, 
  Instagram, 
  Twitter
} from 'lucide-react';

const ContactInfo = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3,
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const socialIconVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.1, transition: { duration: 0.3 } }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 md:p-8"
    >
      <motion.h3 
        variants={itemVariants}
        className="text-xl md:text-2xl font-display text-navy mb-6"
      >
        Get in Touch
      </motion.h3>

      <div className="space-y-6">
        <motion.div 
          variants={itemVariants}
          className="flex items-start gap-4"
        >
          <div className="p-2 bg-softBlue rounded-full">
            <MapPin className="h-5 w-5 text-indigo" />
          </div>
          <div>
            <h4 className="text-navy font-medium mb-1">Head Office</h4>
            <p className="text-gray-600">Accra, Ghana (Legon)</p>
          </div>
        </motion.div>
        
        <motion.div 
          variants={itemVariants} 
          className="flex items-start gap-4"
        >
          <div className="p-2 bg-softBlue rounded-full">
            <Mail className="h-5 w-5 text-indigo" />
          </div>
          <div>
            <h4 className="text-navy font-medium mb-1">Email</h4>
            <a href="mailto:contact@radiiant.site" className="text-indigo hover:text-navy transition-colors duration-300 underline-animated">
              contact@radiiant.site
            </a>
          </div>
        </motion.div>
        
        <motion.div 
          variants={itemVariants}
          className="flex items-start gap-4"
        >
          <div className="p-2 bg-softBlue rounded-full">
            <Phone className="h-5 w-5 text-indigo" />
          </div>
          <div>
            <h4 className="text-navy font-medium mb-1">Phone</h4>
            <a href="tel:+233501234567" className="text-indigo hover:text-navy transition-colors duration-300 underline-animated">
              +233 50 123 4567
            </a>
          </div>
        </motion.div>
        
        <motion.div 
          variants={itemVariants}
          className="pt-4"
        >
          <h4 className="text-navy font-medium mb-3">Follow Us</h4>
          <div className="flex gap-3">
            <motion.a 
              href="https://linkedin.com/company/radiiant/" 
              target="_blank" 
              rel="noopener noreferrer"
              variants={socialIconVariants}
              initial="initial"
              whileHover="hover"
              className="p-2 bg-softBlue rounded-full hover:bg-indigo/10 transition-colors duration-300"
            >
              <Linkedin className="h-5 w-5 text-indigo" />
            </motion.a>
            
            <motion.a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              variants={socialIconVariants}
              initial="initial"
              whileHover="hover"
              className="p-2 bg-softBlue rounded-full hover:bg-indigo/10 transition-colors duration-300"
            >
              <Twitter className="h-5 w-5 text-indigo" />
            </motion.a>
            
            <motion.a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              variants={socialIconVariants}
              initial="initial"
              whileHover="hover"
              className="p-2 bg-softBlue rounded-full hover:bg-indigo/10 transition-colors duration-300"
            >
              <Instagram className="h-5 w-5 text-indigo" />
            </motion.a>
            
            <motion.a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              variants={socialIconVariants}
              initial="initial"
              whileHover="hover"
              className="p-2 bg-softBlue rounded-full hover:bg-indigo/10 transition-colors duration-300"
            >
              <Github className="h-5 w-5 text-indigo" />
            </motion.a>
          </div>
        </motion.div>
        
        {/* Map Embed - Stylized Pattern */}
        <motion.div 
          variants={itemVariants}
          className="mt-8 pt-6 border-t border-gray-200"
        >
          <div className="relative w-full h-48 overflow-hidden rounded-lg">
            <div className="absolute inset-0 bg-navy/10 z-10"></div>
            
            {/* Abstract network map */}
            <div className="absolute inset-0 flex items-center justify-center">
              <svg width="100%" height="100%" viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg">
                <g stroke="#002C5F" strokeWidth="1" fill="none" opacity="0.2">
                  <circle cx="400" cy="200" r="30" fill="#4C00FF" opacity="0.2" />
                  <circle cx="120" cy="100" r="10" fill="#4C00FF" opacity="0.1" />
                  <circle cx="600" cy="150" r="15" fill="#4C00FF" opacity="0.1" />
                  <circle cx="300" cy="300" r="12" fill="#4C00FF" opacity="0.1" />
                  <circle cx="500" cy="250" r="8" fill="#4C00FF" opacity="0.1" />
                  <circle cx="200" cy="220" r="10" fill="#4C00FF" opacity="0.1" />
                  <circle cx="650" cy="300" r="12" fill="#4C00FF" opacity="0.1" />
                  <path d="M400,200 L120,100" />
                  <path d="M400,200 L600,150" />
                  <path d="M400,200 L300,300" />
                  <path d="M400,200 L500,250" />
                  <path d="M400,200 L200,220" />
                  <path d="M400,200 L650,300" />
                  <path d="M120,100 L200,220" />
                  <path d="M600,150 L500,250" />
                  <path d="M300,300 L200,220" />
                  <path d="M500,250 L650,300" />
                </g>
                
                <motion.circle 
                  cx="400" cy="200" r="5" fill="#00D4FF"
                  animate={{
                    r: [5, 10, 5],
                    opacity: [0.8, 0.5, 0.8]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "loop" as const
                  }}
                />
                <motion.circle 
                  cx="120" cy="100" r="3" fill="#00D4FF"
                  animate={{
                    r: [3, 6, 3],
                    opacity: [0.8, 0.5, 0.8]
                  }}
                  transition={{
                    duration: 2,
                    delay: 0.5,
                    repeat: Infinity,
                    repeatType: "loop" as const
                  }}
                />
                <motion.circle 
                  cx="600" cy="150" r="4" fill="#00D4FF"
                  animate={{
                    r: [4, 8, 4],
                    opacity: [0.8, 0.5, 0.8]
                  }}
                  transition={{
                    duration: 2.5,
                    delay: 1,
                    repeat: Infinity,
                    repeatType: "loop" as const
                  }}
                />
              </svg>
            </div>
            
            <motion.div 
              className="absolute inset-0 z-20 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
            >
              <p className="text-navy font-medium">Accra, Ghana</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ContactInfo;
