
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const NextProjectCard: React.FC = () => {
  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    show: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  return (
    <motion.div variants={cardVariants}>
      <motion.div
        whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' }}
        transition={{ duration: 0.3 }}
        className="h-full"
      >
        <Card className="relative overflow-hidden h-full border-1 border-indigo/30 group transition-all duration-300">
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo/5 via-cyan/5 to-amber/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="p-6 flex flex-col h-full justify-center items-center text-center">
            <h3 className="text-2xl font-display font-semibold mb-4">Yours Next?</h3>
            <p className="text-gray-600 mb-6">Let's make your project the next case study.</p>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Button asChild variant="default" className="group relative overflow-hidden bg-navy">
                <Link to="/contact" className="flex items-center gap-2">
                  <span>Start Your Project</span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    <ArrowRight size={16} />
                  </motion.div>
                </Link>
              </Button>
            </motion.div>
          </div>
        </Card>
      </motion.div>
    </motion.div>
  );
};

export default NextProjectCard;
