
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface WhyTileProps {
  text: string;
  index: number;
  bgColor: string;
}

const WhyTile: React.FC<WhyTileProps> = ({ text, index, bgColor }) => {
  const isEven = index % 2 === 0;
  const fontClass = isEven ? "font-display" : "font-sans";
  
  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -100 : 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`flex items-center justify-center p-6 md:p-10 rounded-xl ${bgColor} min-w-[280px] h-[180px] relative overflow-hidden`}
    >
      {/* Gradient swipe effect */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
        initial={{ x: -300, opacity: 0 }}
        whileInView={{ x: 300, opacity: 1 }}
        transition={{ duration: 1.5, delay: index * 0.2 + 0.5, ease: "easeInOut" }}
        viewport={{ once: true }}
      />
      <h3 className={`text-2xl md:text-3xl ${fontClass} font-semibold text-navy`}>{text}</h3>
    </motion.div>
  );
};

const WhyRadiiant: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const x = useTransform(scrollYProgress, [0, 0.5], [0, -200]);

  const tiles = [
    {
      text: "Built for African innovation",
      bgColor: "bg-gradient-to-br from-softBlue to-white",
    },
    {
      text: "Tech that scales with your team",
      bgColor: "bg-gradient-to-br from-cyan/10 to-white",
    },
    {
      text: "Smart, not complicated",
      bgColor: "bg-gradient-to-br from-indigo/10 to-white",
    },
    {
      text: "Enterprise-ready, startup-friendly",
      bgColor: "bg-gradient-to-br from-amber/10 to-white",
    },
    {
      text: "Consultative, not cookie-cutter",
      bgColor: "bg-gradient-to-br from-softBlue/20 to-white",
    },
  ];

  return (
    <section ref={containerRef} className="py-24 overflow-hidden">
      <div className="max-w-content">
        <h2 className="text-4xl md:text-5xl font-display text-navy text-center mb-16">
          Why <span className="text-gradient">RADIIANT</span>
        </h2>
      </div>
      
      <motion.div 
        style={{ x }}
        className="flex space-x-6 py-10"
      >
        {tiles.map((tile, index) => (
          <WhyTile
            key={index}
            text={tile.text}
            index={index}
            bgColor={tile.bgColor}
          />
        ))}
        {/* Duplicate the first few tiles to create a continuous scrolling effect */}
        {tiles.slice(0, 2).map((tile, index) => (
          <WhyTile
            key={`repeat-${index}`}
            text={tile.text}
            index={index + tiles.length}
            bgColor={tile.bgColor}
          />
        ))}
      </motion.div>
    </section>
  );
};

export default WhyRadiiant;
