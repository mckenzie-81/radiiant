
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CallToAction: React.FC = () => {
  return (
    <section className="py-24 bg-navy text-white relative overflow-hidden">
      {/* Background elements with enhanced spotlight gradient */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan rounded-full filter blur-3xl"></div>
        {/* Spotlight gradient */}
        <div className="absolute inset-0 bg-gradient-radial from-indigo/20 via-transparent to-transparent opacity-60"></div>
      </div>
      
      <div className="max-w-content relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            We're already building Africa's next giants.{' '}
            <div className="relative inline-block">
              <span className="text-gradient">Let's build yours.</span>
              <motion.div 
                className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-indigo via-cyan to-indigo"
                initial={{ scaleX: 0, opacity: 0 }}
                whileInView={{ scaleX: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
              />
            </div>
          </h2>
          
          <p className="text-lg text-white/70 mb-10">
            Join the companies transforming their operations with RADIIANT's custom infrastructure.
          </p>
          
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Button 
              size="lg"
              asChild
              className="bg-white hover:bg-indigo text-navy hover:text-white text-lg px-10 py-6 rounded-md group relative overflow-hidden"
            >
              <Link to="/contact">
                <span className="relative z-10">Start Your Project</span>
                <span className="absolute inset-0 bg-gradient-to-r from-indigo to-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
