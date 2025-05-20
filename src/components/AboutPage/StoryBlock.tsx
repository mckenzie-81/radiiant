
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const StoryBlock = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.5], [100, 0]);

  return (
    <section ref={sectionRef} className="py-20 md:py-32 relative overflow-hidden bg-gradient-to-b from-softBlue to-white">
      {/* Abstract background element */}
      <div className="absolute inset-0 -z-10">
        <motion.div 
          style={{ 
            opacity: useTransform(scrollYProgress, [0, 0.8], [0, 0.15]),
            y: useTransform(scrollYProgress, [0, 0.8], [100, 0])
          }}
          className="absolute right-0 bottom-0 w-[600px] h-[600px] rounded-full bg-gradient-to-tl from-indigo/10 via-cyan/5 to-amber/5"
        />
      </div>

      <div className="max-w-content">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div 
            style={{ opacity, y }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-display text-navy mb-6">
              We're not just a SaaS platform — <br className="hidden md:block" />
              we're <span className="text-gradient">infrastructure for ambition</span>.
            </h2>
            
            <p className="text-lg text-gray-700">
              RADIIANT began as a response to one question: "Why should African businesses wait to operate like global giants?"
            </p>
            
            <p className="text-lg text-gray-700">
              We started with service tools, automation flows, and backend platforms — and evolved into something larger: a modular operating system for business growth.
            </p>
          </motion.div>
          
          <motion.div 
            style={{ opacity }}
            className="relative h-[400px] rounded-xl overflow-hidden"
          >
            {/* Abstract visualization */}
            <div className="absolute inset-0 bg-navy/5 rounded-xl overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div 
                  className="w-60 h-60 md:w-80 md:h-80 relative"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                >
                  {/* Concentric circles */}
                  {[0, 1, 2, 3, 4].map((i) => (
                    <motion.div 
                      key={i}
                      className="absolute rounded-full border"
                      style={{ 
                        width: `${100 - i * 20}%`, 
                        height: `${100 - i * 20}%`,
                        top: `${i * 10}%`,
                        left: `${i * 10}%`,
                        borderColor: i % 2 === 0 ? 'rgba(76, 0, 255, 0.1)' : 'rgba(0, 212, 255, 0.1)',
                        borderWidth: i === 0 ? '1px' : '2px'
                      }}
                      animate={{ 
                        rotate: i % 2 === 0 ? 360 : -360,
                        scale: [1, 1.05, 1]
                      }}
                      transition={{ 
                        duration: 20 + i * 5, 
                        repeat: Infinity, 
                        ease: "linear",
                        scale: {
                          duration: 8,
                          repeat: Infinity,
                          repeatType: "reverse"
                        }
                      }}
                    />
                  ))}
                  
                  {/* Central node */}
                  <motion.div 
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-gradient-to-r from-indigo to-cyan"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StoryBlock;
