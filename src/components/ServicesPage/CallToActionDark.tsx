
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CallToActionDark: React.FC = () => {
  return (
    <section className="py-24 bg-navy text-white relative overflow-hidden">
      {/* Background elements with enhanced spotlight gradient */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated gradient elements */}
        <motion.div 
          className="absolute top-0 left-1/4 w-96 h-96 bg-indigo/30 rounded-full filter blur-3xl"
          initial={{ opacity: 0.5 }}
          animate={{ 
            opacity: [0.3, 0.5, 0.3],
            scale: [1, 1.05, 1]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        />
        
        <motion.div 
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan/30 rounded-full filter blur-3xl"
          initial={{ opacity: 0.4 }}
          animate={{ 
            opacity: [0.2, 0.4, 0.2],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>
      
      <div className="max-w-content relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Let's build your system.
          </h2>
          
          <p className="text-lg text-white/70 mb-10">
            Whether you know exactly what you need or just have a vision, we'll help you map and launch it.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Button 
                asChild
                size="lg" 
                className="bg-white hover:bg-indigo text-navy hover:text-white text-lg px-8 py-6 rounded-md group relative overflow-hidden"
              >
                <Link to="/contact">
                  <span className="relative z-10">Start Your Project</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-indigo to-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </Link>
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Button 
                asChild
                size="lg" 
                variant="outline"
                className="border-white text-black hover:bg-white/10 text-lg px-8 py-6 rounded-md"
              >
                <Link to="/contact">
                  Talk to Our Team
                </Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToActionDark;
