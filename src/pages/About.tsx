
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Vision from '@/components/AboutPage/Vision';
import StoryBlock from '@/components/AboutPage/StoryBlock';
import CorePrinciples from '@/components/AboutPage/CorePrinciples';
import TechStack from '@/components/AboutPage/TechStack';
import Timeline from '@/components/AboutPage/Timeline';
import AboutCTA from '@/components/AboutPage/AboutCTA';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-softBlue">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Vision />
          <StoryBlock />
          <CorePrinciples />
          <TechStack />
          <Timeline />
          <AboutCTA />
        </motion.div>
      </main>
      <Footer />
    </>
  );
};

export default About;
