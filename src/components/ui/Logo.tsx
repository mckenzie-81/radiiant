
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface LogoProps {
  className?: string;
  animate?: boolean;
  variant?: 'light' | 'dark';
  height?: number;
}

const Logo: React.FC<LogoProps> = ({ 
  className, 
  animate = false, 
  variant = 'light',
  height = 150
}) => {
  const rippleRef = useRef<SVGCircleElement>(null);
  const logoSrc = variant === 'dark' 
    ? "public/dark-mode-logo-nobg.png" 
    : "public/light-mode-nobg.png";
  
  useEffect(() => {
    if (animate && rippleRef.current) {
      // Initial animation
      const animateRipple = () => {
        if (!rippleRef.current) return;
        
        rippleRef.current.animate([
          { r: 0, opacity: 0.8 },
          { r: 30, opacity: 0 }
        ], {
          duration: 1800,
          iterations: 1,
          easing: 'ease-out'
        });
      };
      
      animateRipple();
      
      // Add a small delay for the second ripple
      const timeout = setTimeout(() => {
        animateRipple();
      }, 400);
      
      return () => clearTimeout(timeout);
    }
  }, [animate]);

  // Calculate appropriate ripple size based on logo height
  const rippleSize = height ? Math.max(height * 0.8, 30) : 30;

  return (
    <div className={cn("relative inline-flex items-center", className)}>
      <motion.div 
        className="relative"
        initial={animate ? { scale: 0.8, opacity: 0 } : {}}
        animate={animate ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <img 
          src={logoSrc} 
          alt="RADIIANT Logo" 
          style={height ? { height: `${height}px` } : undefined}
        />
        
        {/* Animated ripple */}
        {animate && (
          <>
            <motion.div 
              className="absolute inset-0 rounded-full"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: [0, 1.5], 
                opacity: [0.8, 0] 
              }}
              transition={{ 
                duration: 1.8, 
                repeat: 2, 
                repeatDelay: 1 
              }}
            />
            <motion.div 
              className="absolute inset-0 rounded-full" 
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: [0, 2], 
                opacity: [0.8, 0] 
              }}
              transition={{ 
                duration: 2, 
                delay: 0.3, 
                repeat: 2, 
                repeatDelay: 1 
              }}
            />
          </>
        )}
      </motion.div>
    </div>
  );
};

export default Logo;
