
import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactHero from '@/components/ContactPage/ContactHero';
import ContactForm from '@/components/ContactPage/ContactForm';
import ContactInfo from '@/components/ContactPage/ContactInfo';
import ContactCTA from '@/components/ContactPage/ContactCTA';

const Contact = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-softBlue overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="w-full"
        >
          <ContactHero />
          
          <section className="py-16 px-4 sm:px-6 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
              <div className="lg:col-span-3">
                <ContactForm />
              </div>
              <div className="lg:col-span-2">
                <ContactInfo />
              </div>
            </div>
          </section>
          
          <ContactCTA />
        </motion.div>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
