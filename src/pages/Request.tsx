
import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import RequestForm from '@/components/RequestPage/RequestForm';

const Request: React.FC = () => {
  return (
    <div className="min-h-screen bg-softBlue">
      <Navbar />
      
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-content relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-navy">
              Start Your Project
            </h1>
            
            <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
              Tell us about your business needs and how we can help you build the digital infrastructure you need to grow.
            </p>

            <motion.div
              className="w-16 h-1 bg-gradient-to-r from-indigo via-cyan to-indigo mx-auto mb-16"
              initial={{ width: 0 }}
              animate={{ width: 64 }}
              transition={{ duration: 1.2, delay: 0.3 }}
            />
          </motion.div>
          
          <RequestForm />
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Request;
