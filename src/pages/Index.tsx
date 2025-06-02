
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import WhyRadiiant from '@/components/WhyRadiiant';
import HowItWorks from '@/components/HowItWorks';
import ClientHighlights from '@/components/ClientHighlights';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';



// Service icons
const ServiceIcon1 = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 7L12 3L4 7M20 7L12 11M20 7V17L12 21M12 11L4 7M12 11V21M4 7V17L12 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ServiceIcon2 = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17 8C17 10.7614 14.7614 13 12 13C9.23858 13 7 10.7614 7 8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M3 21C3.95728 17.9237 6.41998 17 12 17C17.58 17 20.0427 17.9237 21 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ServiceIcon3 = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 10.5H16M8 14.5H13M8.8 3H15.2C16.88 3 17.72 3 18.362 3.32698C18.9265 3.61458 19.3854 4.07354 19.673 4.638C20 5.28 20 6.12 20 7.8V16.2C20 17.88 20 18.72 19.673 19.362C19.3854 19.9265 18.9265 20.3854 18.362 20.673C17.72 21 16.88 21 15.2 21H8.8C7.12 21 6.28 21 5.638 20.673C5.07354 20.3854 4.61458 19.9265 4.32698 19.362C4 18.72 4 17.88 4 16.2V7.8C4 6.12 4 5.28 4.32698 4.638C4.61458 4.07354 5.07354 3.61458 5.638 3.32698C6.28 3 7.12 3 8.8 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ServiceIcon4 = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5M13 5C13 5.55228 12.5523 6 12 6C11.4477 6 11 5.55228 11 5M13 5H19M11 5H5M7 8C7 7.44772 7.44772 7 8 7C8.55228 7 9 7.44772 9 8M7 8C7 8.55228 7.44772 9 8 9C8.55228 9 9 8.55228 9 8M7 8H5M9 8H19M17 11C17 10.4477 16.5523 10 16 10C15.4477 10 15 10.4477 15 11M17 11C17 11.5523 16.5523 12 16 12C15.4477 12 15 11.5523 15 11M17 11H19M15 11H5M13 14C13 13.4477 12.5523 13 12 13C11.4477 13 11 13.4477 11 14M13 14C13 14.5523 12.5523 15 12 15C11.4477 15 11 14.5523 11 14M13 14H19M11 14H5M7 17C7 16.4477 7.44772 16 8 16C8.55228 16 9 16.4477 9 17M7 17C7 17.5523 7.44772 18 8 18C8.55228 18 9 17.5523 9 17M7 17H5M9 17H19M5 20H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ServiceIcon5 = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.5 15L18.5 12M18.5 12L15.5 9M18.5 12H9M12.5 3H8.6C7.08 3 6.32 3 5.73 3.33C5.21 3.62 4.79 4.08 4.53 4.65C4.23 5.3 4.27 6.11 4.35 7.75L4.36 7.95C4.44 9.77 4.49 10.68 4.35 11.46C4.21 12.24 3.94 12.77 3.39 13.83C2.86 14.87 2.59 15.4 2.44 15.96C2.33 16.43 2.33 16.92 2.45 17.39C2.59 17.95 2.96 18.47 3.68 19.51C4.67 20.94 5.16 21.65 5.75 22.09C6.26 22.48 6.84 22.72 7.46 22.81C8.19 22.92 8.97 22.68 10.53 22.19L10.72 22.13C12.54 21.56 13.45 21.28 14.28 21.33C15.12 21.37 15.74 21.69 17 22.33V22.33C18.25 22.97 18.88 23.29 19.45 23.3C20.13 23.31 20.79 23.07 21.32 22.62C21.75 22.24 22 21.58 22.45 20.26L22.65 19.69C23.2 18 23.48 17.16 23.28 16.3C23.07 15.43 22.41 14.76 21.1 13.41L20.85 13.16C19.95 12.23 19.5 11.77 18.98 11.54C18.38 11.28 17.7 11.26 17.09 11.5C16.57 11.7 16.09 12.13 15.14 13L14.5 13.6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ServiceIcon6 = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 5.5L3.21429 7L7.5 3M2 12.5L3.21429 14L7.5 10M2 19.5L3.21429 21L7.5 17M22 8L12 8M22 15H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ServiceIcon7 = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 12H16M12 16V8M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const Index: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  const services = [
    {
      title: "Business Management Systems",
      description: "End-to-end solutions for operational excellence, combining ERP, accounting, and workforce management.",
      icon: <ServiceIcon1 />
    },
    {
      title: "Web Development (CRM)",
      description: "Build deeper relationships with sophisticated customer management and analytics tools.",
      icon: <ServiceIcon2 />
    },
    {
      title: "SMS Campaign Platform",
      // change to AI integration - when content is set
      description: "Engage your audience with our powerful, scalable messaging solutions designed for the African market.",
      icon: <ServiceIcon3 />
    },
    {
      title: "Data Provisioning APIs", 
      // change to  SEO management - when content is set
      description: "Seamless integration with third-party services through robust, well-documented APIs.",
      icon: <ServiceIcon4 />
    },
    {
      title: "Custom Platforms",
      description: "Bespoke digital solutions tailored specifically to your unique business challenges.",
      icon: <ServiceIcon5 />
    },
    {
      title: "POS Infrastructure",
      // change to automation services - when content is set
      description: "Modern point-of-sale systems with inventory management and sales analytics built in.",
      icon: <ServiceIcon6 />
    },
    {
      title: "Other — Tell Us What You Need",
      description: "Have a specific challenge? We'll work with you to design the perfect solution.",
      icon: <ServiceIcon7 />
    }
  ];

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div className="min-h-screen bg-softBlue">
      <Navbar />
      <Hero />
      
      {/* Services Section - Added ID for smooth scrolling */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-content">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-display text-navy mb-6"
            >
              Services We Offer
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-gray-600 max-w-2xl mx-auto mb-8"
            >
              From business management to custom development, we provide the digital infrastructure 
              that powers growth across Africa.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-indigo/80 font-medium max-w-2xl mx-auto mb-12"
            >
              Built to simplify operations across any industry.
            </motion.div>
          </div>
          
          <div
            ref={ref}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
      
      <WhyRadiiant />
      <HowItWorks />
      <ClientHighlights />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
