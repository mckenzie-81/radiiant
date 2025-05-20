
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ClientCardProps {
  name: string;
  description: string;
  index: number;
}

const ClientCard: React.FC<ClientCardProps> = ({ name, description, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="min-w-[280px] md:min-w-[320px] bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300"
    >
      <h3 className="text-xl font-display text-navy mb-2">{name}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </motion.div>
  );
};

const ClientHighlights: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -500]);

  const clients = [
    {
      name: "Pentagon Wifi",
      description: "ISP portal with automated customer onboarding and billing system."
    },
    {
      name: "ROC International",
      description: "Corporate website with investor-grade design and secure data rooms."
    },
    {
      name: "Buddies Inn",
      description: "Complete order management system with integrated CRM capabilities."
    },
    {
      name: "Adakings",
      description: "Restaurant UI/UX with seamless ordering and inventory tracking."
    },
    {
      name: "Printloop / Softron",
      description: "Print automation workflow and consulting services portal."
    }
  ];

  return (
    <section ref={containerRef} className="py-24">
      <div className="max-w-content mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-display text-navy text-center mb-6"
        >
          Client Highlights
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-center text-gray-600 max-w-2xl mx-auto mb-10"
        >
          We've helped businesses across Africa transform their operations and scale with custom digital solutions.
        </motion.p>
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center text-indigo/80 font-medium max-w-2xl mx-auto"
        >
          Trusted by innovators across fintech, retail, and digital services.
        </motion.p>
      </div>
      
      <div className="overflow-hidden">
        <motion.div 
          style={{ x }}
          className="flex gap-6 py-6 px-6"
        >
          {clients.map((client, index) => (
            <ClientCard
              key={index}
              name={client.name}
              description={client.description}
              index={index}
            />
          ))}
          {/* Duplicate first few cards to create continuous scrolling effect */}
          {clients.slice(0, 2).map((client, index) => (
            <ClientCard
              key={`repeat-${index}`}
              name={client.name}
              description={client.description}
              index={index + clients.length}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ClientHighlights;
