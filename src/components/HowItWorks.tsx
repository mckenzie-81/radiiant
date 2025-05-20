
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface StepProps {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
}

const Step: React.FC<StepProps> = ({ 
  number, 
  title, 
  description, 
  icon,
  isActive, 
  onClick 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: number * 0.2 }}
      viewport={{ once: true }}
      className={`relative flex flex-col md:flex-row items-start md:items-center gap-6 p-6 rounded-xl cursor-pointer
        ${isActive ? 'bg-white shadow-lg' : 'bg-transparent'} 
        transition-all duration-300`}
      onClick={onClick}
    >
      <div 
        className={`w-16 h-16 rounded-xl flex items-center justify-center text-2xl font-bold
          ${isActive ? 'bg-navy text-white' : 'bg-softBlue text-navy'} 
          transition-colors duration-300`}
      >
        {number}
      </div>
      
      <div className="flex-1">
        <h3 className="font-display text-2xl text-navy mb-2">{title}</h3>
        <p className={`text-gray-600 transition-all duration-300 ${isActive ? 'block' : 'hidden md:block'}`}>
          {description}
        </p>
      </div>
    </motion.div>
  );
};

const HowItWorks: React.FC = () => {
  const [activeStep, setActiveStep] = React.useState(1);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Transform progress for horizontal movement
  const xProgress = useTransform(scrollYProgress, [0, 0.6], [0, 1]);
  
  const steps = [
    {
      number: 1,
      title: "You tell us what you need",
      description: "Share your business challenges and goals. We'll listen and understand your unique requirements.",
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 12.5H16M8 16.5H13M7.8 4H16.2C17.88 4 18.72 4 19.362 4.327C19.9265 4.6146 20.3854 5.0735 20.673 5.638C21 6.28 21 7.12 21 8.8V15.2C21 16.88 21 17.72 20.673 18.362C20.3854 18.9265 19.9265 19.3854 19.362 19.673C18.72 20 17.88 20 16.2 20H7.8C6.12 20 5.28 20 4.638 19.673C4.07354 19.3854 3.61458 18.9265 3.32698 18.362C3 17.72 3 16.88 3 15.2V8.8C3 7.12 3 6.28 3.32698 5.638C3.61458 5.07354 4.07354 4.61458 4.638 4.32698C5.28 4 6.12 4 7.8 4Z" 
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      number: 2,
      title: "We build your system",
      description: "Our team crafts a custom solution tailored specifically to your business needs and objectives.",
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 6V12L16 14M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z" 
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      number: 3,
      title: "You grow — we adapt with you",
      description: "As your business grows, our platforms adapt and expand to support your continued success.",
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2.5 18.5L8 13L11.5 16.5M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM15.5 9C15.5 10.1046 14.6046 11 13.5 11C12.3954 11 11.5 10.1046 11.5 9C11.5 7.89543 12.3954 7 13.5 7C14.6046 7 15.5 7.89543 15.5 9Z"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
  ];

  return (
    <section ref={containerRef} className="py-24 bg-softBlue">
      <div className="max-w-content">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-display text-navy text-center mb-16"
        >
          How It Works
        </motion.h2>

        <div className="flex flex-col lg:flex-row lg:min-h-[450px] gap-10">
          {/* Steps column - mobile: vertical, desktop: occupy left 1/3 */}
          <div className="lg:w-1/3 space-y-6">
            {steps.map((step) => (
              <Step 
                key={step.number}
                number={step.number}
                title={step.title}
                description={step.description}
                icon={step.icon}
                isActive={activeStep === step.number}
                onClick={() => setActiveStep(step.number)}
              />
            ))}
          </div>
          
          {/* Visualization area that shows horizontal walkthrough */}
          <div className="lg:w-2/3 h-64 lg:h-auto bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="h-full relative">
              {/* Timeline line */}
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-100"></div>
              
              {/* Step points and content */}
              <div className="flex h-full">
                {steps.map((step, index) => (
                  <motion.div 
                    key={step.number}
                    className="flex-1 flex flex-col items-center justify-center p-8 relative"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: activeStep >= step.number ? 1 : 0.3 }}
                    transition={{ duration: 0.5 }}
                  >
                    {/* Step point */}
                    <div className={`w-8 h-8 rounded-full mb-6 ${activeStep >= step.number ? 'bg-indigo' : 'bg-gray-200'}`}>
                      {/* Active indicator */}
                      {activeStep === step.number && (
                        <motion.div 
                          className="absolute w-12 h-12 rounded-full border-2 border-indigo"
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1.2, opacity: 0 }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                          style={{ top: 'calc(50% - 1.5rem)', left: 'calc(50% - 1.5rem)' }}
                        />
                      )}
                    </div>
                    
                    {/* Step content */}
                    <div className={`text-center transition-all duration-300 transform ${activeStep === step.number ? 'scale-100' : 'scale-95'}`}>
                      <div className="text-3xl mb-4 text-navy mx-auto flex items-center justify-center">
                        {step.icon}
                      </div>
                      <p className={`mt-2 transition-colors ${activeStep === step.number ? 'text-indigo font-medium' : 'text-gray-500'}`}>
                        {step.title}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
