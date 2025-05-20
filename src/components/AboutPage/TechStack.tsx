
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Index from '@/pages/Index';

interface TechItemProps {
  name: string;
  description: string;
  logo: string;
  index: number;
}

const TechItem: React.FC<TechItemProps> = ({ name, description, logo, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ y: 30, opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        whileHover={{ y: -5 }}
        className="h-24 relative bg-white rounded-lg border border-gray-100 p-4 flex flex-col justify-center items-center hover:shadow-md transition-all duration-300"
      >
        <div className="text-navy mb-2 h-10 flex items-center justify-center">
          <img src={logo} alt={name} className="h-8 object-contain" />
        </div>
        <div className="text-navy font-medium text-sm">{name}</div>
        
        {/* Tooltip on hover */}
        <motion.div
          className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-navy text-white text-xs px-3 py-1.5 rounded-md whitespace-nowrap z-20"
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : -5 }}
          transition={{ duration: 0.2 }}
        >
          {description}
          <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-navy rotate-45"></div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const TechStack: React.FC = () => {
  const techItems = [
    { name: "Python", description: "Backend logic & automation", logo: "/python-original.svg" },
    { name: "JavaScript", description: "Frontend interaction & dynamic UIs", logo: "/javascript-original.svg" },
    { name: "React", description: "Component-based UI development", logo: "/react-original.svg" },
    { name: "Tailwind CSS", description: "Utility-first styling framework", logo: "/Tailwind_CSS_Logo.svg.png" },
    { name: "Django", description: "Production-grade Python framework", logo: "/django-plain.svg" },
    { name: "PostgreSQL", description: "Reliable relational database", logo: "/postgresql-original.svg" },
    { name: "MongoDB", description: "Flexible document database", logo: "/mongodb-original.svg" },
    { name: "Docker", description: "Containerized deployments", logo: "/docker-original.svg" },
    { name: "VS Code", description: "Modern code editing", logo: "/vscode-original.svg" },
    { name: "Cursor", description: "AI-powered development", logo: "/cursor.svg" },
    { name: "Paystack", description: "African payment processing", logo: "/Paystack-mark-white-twitter.png" },
    { name: "Google Sheets", description: "Connected spreadsheet systems", logo: "/Google_Sheets_logo_(2014-2020).svg.png" },
    { name: "Zapier", description: "No-code workflow automation", logo: "/zapier-icon-svgrepo-com.svg" },
    { name: "Mikrotik", description: "ISP network infrastructure", logo: "/MikroTik_logo.svg.png" },
    { name: "Google Cloud", description: "simplifies the complexities of development.", logo: "/google_cloud-icon.svg" } // Placeholder, use appropriate logo
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-softBlue">
      <div className="max-w-content">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-display text-navy mb-4">
            What We Build With
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We use tools that are fast, secure, and trusted — but always tailored to our clients' context. 
            Here's what runs under the hood.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {techItems.map((tech, index) => (
            <TechItem
              key={index}
              {...tech}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
