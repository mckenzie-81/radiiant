
import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquareCode, Layers, Wand2, TrendingUp } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { useInView } from 'react-intersection-observer';

interface PrincipleCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}

const PrincipleCard: React.FC<PrincipleCardProps> = ({ title, description, icon, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ y: 50, opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
      transition={{ 
        duration: 0.7, 
        delay: index * 0.15,
        ease: [0.25, 0.1, 0.25, 1]
      }}
    >
      <motion.div
        whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' }}
        className="h-full"
      >
        <Card className="p-6 h-full border-2 border-indigo/5 group transition-all duration-300">
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo/5 via-cyan/5 to-amber/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="relative z-10">
            <div className="mb-6 flex items-center justify-center w-14 h-14 rounded-xl bg-softBlue group-hover:bg-navy transition-colors duration-300">
              <motion.div
                whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                transition={{ duration: 0.5 }}
                className="text-indigo group-hover:text-white transition-colors duration-300"
              >
                {icon}
              </motion.div>
            </div>
            
            <h3 className="text-xl font-display font-semibold mb-3 text-navy">
              {title}
            </h3>
            
            <p className="text-gray-600">
              {description}
            </p>
          </div>
        </Card>
      </motion.div>
    </motion.div>
  );
};

const CorePrinciples: React.FC = () => {
  const principles = [
    {
      title: "Consultative by Default",
      description: "We ask the hard questions first — then build what's right, not just what's fast.",
      icon: <MessageSquareCode size={24} />
    },
    {
      title: "Platform Thinking",
      description: "We don't build features. We build systems that evolve with you.",
      icon: <Layers size={24} />
    },
    {
      title: "Design is Infrastructure",
      description: "The interface is the product. Every click should feel considered.",
      icon: <Wand2 size={24} />
    },
    {
      title: "Engineered to Scale",
      description: "From a 3-person startup to a 10-branch enterprise — we build to grow.",
      icon: <TrendingUp size={24} />
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-content">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-display text-navy mb-4">
            How We Think
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Our core principles guide everything we build, from microservices to enterprise systems.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {principles.map((principle, index) => (
            <PrincipleCard
              key={index}
              {...principle}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CorePrinciples;
