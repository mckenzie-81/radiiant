
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutCTA: React.FC = () => {
  return (
    <section className="py-24 bg-navy text-white relative overflow-hidden">
      {/* Animated background glow */}
      <motion.div 
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] rounded-full bg-gradient-radial from-indigo/20 to-transparent opacity-30"
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.3, 0.2]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      <div className="max-w-content relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-display"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              We've helped businesses scale quietly.
              <span className="text-gradient block mt-2">Let's make yours the next big story.</span>
            </motion.h2>
            
            <motion.p
              className="text-white/80 text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              We're not interested in hype. We're interested in outcomes.
              <br />
              Whether you need a tool, a system, or a partner — we're ready.
            </motion.p>
          </motion.div>
          
          <motion.div
            className="flex justify-center md:justify-end"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <Button asChild size="lg" className="group bg-white text-navy hover:bg-indigo hover:text-white">
                <Link to="/contact" className="flex items-center gap-2 px-8 py-6 text-lg">
                  <span>Start a Conversation</span>
                  <motion.div
                    className="transition-transform duration-300"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, repeatDelay: 0.5 }}
                  >
                    <ArrowRight className="h-5 w-5" />
                  </motion.div>
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutCTA;
