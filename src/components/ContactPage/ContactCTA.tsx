
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const ContactCTA: React.FC = () => {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-navy z-0">
        {/* Enhanced Background animation */}
        <motion.div 
          className="absolute w-[500px] h-[500px] rounded-full bg-indigo/10 blur-3xl"
          initial={{ x: -100, y: -100 }}
          animate={{ x: -50, y: -50 }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse" as const,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute right-0 bottom-0 w-[400px] h-[400px] rounded-full bg-cyan/10 blur-3xl"
          initial={{ x: 100, y: 100 }}
          animate={{ x: 50, y: 50 }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse" as const,
            ease: "easeInOut"
          }}
        />
        
        {/* Additional animated elements */}
        <motion.div 
          className="absolute left-1/4 top-1/3 w-[200px] h-[200px] rounded-full border border-white/5"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        />
        <motion.div
          className="absolute right-1/4 bottom-1/4 w-[150px] h-[150px] bg-gradient-to-br from-indigo/10 to-cyan/10 rounded-lg"
          animate={{ 
            rotate: [0, 10, 0],
            opacity: [0.2, 0.3, 0.2] 
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        />
      </div>
      
      <div className="max-w-content relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-display text-white max-w-3xl mx-auto leading-tight">
            Let's make something <span className="block mt-2 text-gradient">great together.</span>
          </h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-6 text-white/80 max-w-2xl mx-auto"
          >
            We've worked with teams big and small. Our strength is in adapting to yours.
          </motion.p>
          
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button 
                asChild
                className="relative overflow-hidden group bg-white text-navy hover:bg-white/90"
                size="lg"
              >
                <Link to="/contact" className="flex items-center gap-2">
                  <span>Start Your Project</span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    <ArrowRight size={16} />
                  </motion.div>
                  
                  {/* Arrow hover effect */}
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                </Link>
              </Button>
            </motion.div>
            
            <Button 
              asChild
              variant="outline" 
              className="border-white text-white hover:bg-white/10"
              size="lg"
            >
              <Link to="/portfolio">View Our Work</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCTA;
