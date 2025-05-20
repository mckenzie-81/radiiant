
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface TimelineItemProps {
  year: string;
  title: string;
  index: number;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ year, title, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      className="relative"
      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
    >
      {/* Dot */}
      <motion.div 
        className="absolute top-0 left-0 w-4 h-4 rounded-full bg-indigo"
        initial={{ scale: 0 }}
        animate={inView ? { scale: 1 } : { scale: 0 }}
        transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
      />
      
      {/* Pulse animation */}
      <motion.div 
        className="absolute top-0 left-0 w-4 h-4 rounded-full bg-indigo"
        animate={{ scale: [1, 1.8, 1], opacity: [1, 0, 1] }}
        transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
      />
      
      <div className="ml-8 -mt-1 pb-12">
        <span className="text-sm font-medium text-indigo">{year}</span>
        <h3 className="text-lg font-medium text-navy mt-1">{title}</h3>
      </div>
    </motion.div>
  );
};

const Timeline: React.FC = () => {
  const timelineEvents = [
    { year: "2024", title: "RADIIANT founded" },
    { year: "2025", title: "First 3 live clients (ISP + food chain)" },
    { year: "2025", title: "Launch of fully automated onboarding portal" },
    { year: "2025", title: "15+ client builds across 4 industries" },
    { year: "Now", title: "Expanding platform-as-service model" }
  ];

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-16 bg-softBlue overflow-hidden">
      <div className="max-w-content">
        <motion.div 
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-display text-navy mb-2">Our Journey</h2>
          <p className="text-gray-600">The milestones that shaped our story</p>
        </motion.div>
        
        <div className="relative" ref={ref}>
          {/* Timeline line */}
          <motion.div 
            className="absolute top-0 bottom-0 left-[7px] w-0.5 bg-gradient-to-b from-indigo/30 via-cyan/30 to-indigo/30"
            initial={{ scaleY: 0, opacity: 0 }}
            animate={inView ? { scaleY: 1, opacity: 1 } : { scaleY: 0, opacity: 0 }}
            transition={{ duration: 1 }}
            style={{ originY: 0 }}
          />
          
          {/* Timeline items */}
          <div className="relative z-10">
            {timelineEvents.map((event, index) => (
              <TimelineItem 
                key={index}
                year={event.year}
                title={event.title}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
