import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./ui/Logo";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Start animation sequence after a short delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const scrollToNextSection = () => {
    const nextSection = heroRef.current?.nextElementSibling;
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Function to scroll to services section
  const scrollToServices = () => {
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      ref={heroRef}
      className=" min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-softBlue to-navy relative z-10"
      // className=" min-h-screen flex items-center justify-center overflow-hidden"

    >
      {/* Background Image Layer */}
      <div className="absolute inset-2 flex items-center justify-center pointer-events-none z-0 mb-40">
        <img
          src="/blackdotedback.svg"
          alt="dot pattern"
          className="w-[1100px] max-w-full opacity-20 blur-none"
          style={{
            maskImage:
              "radial-gradient(circle, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 50%)",
            WebkitMaskImage:
              "radial-gradient(circle, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 50%)",
          }}
        />
      </div>     

      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.5, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo/5 rounded-full filter blur-3xl animate-float"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.5, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan/5 rounded-full filter blur-3xl animate-float animate-delay-200"
        ></motion.div>
      </div>

      {/* Content container */}
      <div className="max-w-content relative z-10 text-center px-4 mt-10">
        {/* <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <Logo animate className="inline-block transform scale-150 mb-8" variant="light" height={80} />
        </motion.div> */}

        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 tracking-tight text-navy"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          Powering the next generation of{" "}
          <span className="text-gradient">African business.</span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        >
          Intelligent tools to automate, manage, and scale the future of African
          business.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
        >
          <Button
            className="bg-navy hover:bg-indigo text-white px-8 py-6 text-lg rounded-md hover-lift"
            onClick={scrollToServices}
          >
            Explore Platform
          </Button>
          <Button
            variant="outline"
            className="border-navy text-navy hover:text-indigo px-8 py-6 text-lg rounded-md hover-lift"
            asChild
          >
            <Link to="/request">Start Your Project</Link>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 10 }}
          transition={{ duration: 0.7, delay: 0.8, ease: "easeOut" }}
          className="mt-16 text-navy/70"
        >
          <div className="flex justify-center">
            <button
              onClick={scrollToNextSection}
              className="flex flex-col items-center group my-11 "
            >
              <span className="mb-2 text-lg md:text-2xl lg:text-lg xl:text-lg 2xl:text-lg  ">See how we do it</span>
              <ChevronDown className="animate-bounce h-5 w-5 group-hover:text-indigo transition-colors" />
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
