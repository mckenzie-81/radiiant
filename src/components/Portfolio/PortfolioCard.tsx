
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { HoverCard, HoverCardTrigger, HoverCardContent } from '@/components/ui/hover-card';
import { cn } from '@/lib/utils';

interface Project {
  id: number;
  name: string;
  type: string;
  tech?: string;
  summary: string;
  outcome?: string;
  status?: string;
  isDark: boolean;
  link?: string;
  logo?: string;
  categories?: string[];
}

interface PortfolioCardProps {
  project: Project;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    show: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 10 },
    hover: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.3 }
    }
  };

  // Handle card click for projects with links
  const handleCardClick = () => {
    if (project.link) {
      window.open(project.link, '_blank');
    }
  };

  return (
    <motion.div variants={cardVariants}>
      <motion.div
        whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' }}
        transition={{ duration: 0.3 }}
        className="h-full"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Card 
          onClick={handleCardClick}
          className={cn(
            "group relative overflow-hidden h-full transition-all duration-300 cursor-pointer",
            project.isDark ? "bg-stone-300 text-white" : "bg-white text-navy"
          )}
        >
          {/* Visual thumbnail/mockup background */}
          <div className="absolute inset-0 opacity-10 bg-grid-pattern" />

          {/* Hover overlay */}
          <motion.div 
            className={cn(
              "absolute inset-0 bg-gradient-to-t",
              project.isDark ? "from-black/40 to-black/20" : "from-navy/40 to-navy/20"
            )}
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          />

          {/* Card logo/icon area */}
          <div className="absolute top-6 right-6 z-10">
            <motion.div
              className={cn(
                "w-12 h-12 rounded-full flex items-center justify-center",
                project.isDark ? "bg-white/10" : "bg-navy/5"
              )}
              animate={{ rotate: [0, 5, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              {project.logo ? (
                <img 
                  src={project.logo} 
                  alt={`${project.name} logo`} 
                  className=" h-6 object-contain"
                />
              ) : (
                <span className="text-2xl font-bold">{project.name.charAt(0)}</span>
              )}
            </motion.div>
          </div>

          <div className="p-6 flex flex-col h-full">
            {/* Project type tag */}
            <div className="flex flex-wrap gap-2 mb-4">
              <span className={cn(
                "inline-block text-xs font-medium px-3 py-1 rounded-full w-fit",
                project.isDark ? "bg-white/10" : "bg-navy/5"
              )}>
                {project.type}
              </span>
              
              {/* Optional category tags */}
              {project.categories?.map((category, index) => (
                <span key={index} className={cn(
                  "inline-block text-xs font-medium px-2 py-1 rounded-full w-fit",
                  project.isDark ? "bg-cyan/20" : "bg-indigo/10"
                )}>
                  {category}
                </span>
              ))}
            </div>

            {/* Project name */}
            <h3 className="text-xl font-display font-semibold mt-1 mb-3">{project.name}</h3>
            {/* <img src={project.logo} alt={`${project.name} logo`} className="" /> */}

            {/* Tech stack (if available) */}
            {project.tech && (
              <p className={cn(
                "text-sm font-medium mb-",
                project.isDark ? "text-white/70" : "text-navy/70"
              )}>
                {project.tech}
              </p>
            )}

            {/* Content that appears on hover */}
            <motion.div
              className="mt-auto"
              initial="hidden"
              animate={isHovered ? "hover" : "hidden"}
            >
              <motion.div variants={contentVariants}>
                <p className={cn(
                  "text-base mt-4",
                  project.isDark ? "text-white/80" : "text-navy/80"
                )}>
                  {project.summary}
                </p>

                {/* Outcome highlight */}
                {project.outcome && (
                  <div className={cn(
                    "mt-4 p-2 rounded",
                    project.isDark ? "bg-white/10" : "bg-navy/5"
                  )}>
                    <p className="font-medium text-sm">
                      <span className="opacity-70">Outcome:</span> {project.outcome}
                    </p>
                  </div>
                )}

                {project.status && (
                  <div className={cn(
                    "flex items-center mt-4 text-sm font-medium",
                    project.isDark ? "text-white/70" : "text-navy/70"
                  )}>
                    <span className="mr-2">Status:</span>
                    <span className={cn(
                      project.status.includes("Live") ? "text-green-400" : ""
                    )}>
                      {project.status}
                    </span>
                    {project.status.includes("Live") && project.link && (
                      <ExternalLink size={14} className="ml-1" />
                    )}
                  </div>
                )}
              </motion.div>
            </motion.div>
          </div>
        </Card>
      </motion.div>
    </motion.div>
  );
};

export default PortfolioCard;
