
import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PortfolioGrid from '@/components/Portfolio/PortfolioGrid';
import PortfolioCTA from '@/components/Portfolio/PortfolioCTA';

const Portfolio = () => {
  return (
    <div className="min-h-screen flex flex-col bg-softBlue">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        {/* Enhanced Header Section */}
        <section className="relative overflow-hidden py-16 md:py-20">
          <div className="max-w-content relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-3xl mx-auto"
            >
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-display text-navy leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Real impact. <span className="text-gradient">Built with RADIIANT.</span>
              </motion.h1>
              
              <motion.p 
                className="mt-6 text-lg md:text-xl text-gray-700 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                A few of the companies we've helped scale, digitize, and simplify operations through smart infrastructure.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-8"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-6 py-3 bg-navy text-white rounded-md font-medium hover:bg-indigo transition-colors duration-300"
                >
                  Start Your Project
                </motion.button>
              </motion.div>
            </motion.div>
          </div>

          {/* Enhanced Background effect with animated elements */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Grid pattern */}
            <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
            
            {/* Animated ripple effects */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]">
              <motion.div 
                className="w-full h-full rounded-full border border-indigo/10 absolute"
                initial={{ scale: 0.8, opacity: 0.2 }}
                animate={{ scale: 1.2, opacity: 0 }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeOut" }}
              />
              <motion.div 
                className="w-full h-full rounded-full border border-indigo/20 absolute"
                initial={{ scale: 0.8, opacity: 0.3 }}
                animate={{ scale: 1.3, opacity: 0 }}
                transition={{ repeat: Infinity, duration: 3, delay: 0.5, ease: "easeOut" }}
              />
              <motion.div 
                className="w-full h-full rounded-full border border-cyan/20 absolute"
                initial={{ scale: 0.8, opacity: 0.3 }}
                animate={{ scale: 1.4, opacity: 0 }}
                transition={{ repeat: Infinity, duration: 3, delay: 1, ease: "easeOut" }}
              />
            </div>
            
            {/* Floating UI elements */}
            <motion.div
              className="absolute top-[20%] left-[15%] w-24 h-24 bg-indigo/5 rounded-lg blur-xl"
              animate={{ 
                y: [0, -15, 0],
                rotate: [0, 5, 0],
                opacity: [0.4, 0.6, 0.4] 
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute bottom-[30%] right-[20%] w-32 h-32 bg-cyan/5 rounded-full blur-xl"
              animate={{ 
                y: [0, 15, 0],
                rotate: [0, -5, 0],
                opacity: [0.3, 0.5, 0.3] 
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </section>

        {/* Portfolio Grid */}
        <PortfolioGrid />

        {/* Enhanced CTA Section */}
        <PortfolioCTA />
      </main>

      <Footer />
    </div>
  );
};

export default Portfolio;
