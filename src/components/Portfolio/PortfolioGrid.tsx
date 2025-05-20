
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import PortfolioCard from './PortfolioCard';
import NextProjectCard from './NextProjectCard';
import { Filter } from 'lucide-react';

// Enhanced portfolio projects with more details
const portfolioProjects = [
  {
    id: 1,
    name: "Pentagon Wifi",
    type: "ISP Registration Portal",
    tech: "Mikrotik Integration, Automation, React",
    summary: "Built a fully automated onboarding platform for an ISP — including router config, user billing, and self-registration system.",
    outcome: "80% reduced activation time",
    status: "Live → pentagonwifi-connect.vercel.app",
    isDark: true,
    link: "https://pentagonwifi-connect.vercel.app",
    logo: "public/assets/logos/pentagon-wifi-logo.png", // Placeholder path
    categories: ["ISP", "Automation"]
  },
  {
    id: 2,
    name: "ROC International",
    type: "Corporate Website",
    tech: "Webflow, Custom CMS",
    summary: "Designed an investor-ready brand website for roc.",
    outcome: "3x increase in qualified leads",
    status: "Live → rocinternational.org",
    isDark: null, 
    link: "https://rocinternational.org",
    logo: "public/assets/logos/roc-logo.png", // Placeholder path
    categories: ["Corporate", "Finance"]
  },
  {
    id: 3,
    name: "Buddies Inn",
    type: "Internal Order System",
    tech: "Django + Custom OMS",
    summary: "Created a full backend system for inventory, staff control, and sandwich order processing for a growing food business.",
    outcome: "45% reduction in order errors",
    isDark: true,
    logo: "/logos/buddies.svg", // Placeholder path
    categories: ["Food", "Retail"]
  },
  {
    id: 4,
    name: "Adakings Restaurant",
    type: "Web Design (UI/UX Only)",
    tech: "Figma, Responsive Grids",
    summary: "Delivered a modern visual identity and full menu-based website concept for a leading African restaurant.",
    outcome: "Design system for future digital products",
    isDark: false,
    logo: "public/assets/logos/adakings.png", // Placeholder path
    categories: ["Hospitality", "Design"]
  },
  {
    id: 5,
    name: "Printloop",
    type: "Print Automation",
    tech: "Spreadsheet logic + API integrations",
    summary: "Automated the workflow and client job intake process for a commercial print studio using scalable no-code systems.",
    outcome: "70% reduced client wait time",
    isDark: true,
    logo: "public/assets/logos/Printloop.PNG", // Placeholder path
    categories: ["Custom Platforms"]
  },
  {
    id: 6,
    name: "Softron",
    type: "Operations Consulting",
    summary: "Worked with the team to digitize customer acquisition processes and reduce onboarding time by over 40%.",
    outcome: "40% faster client acquisition",
    isDark: false,
    logo: "public/assets/logos/Softron.PNG", // Placeholder path
    categories: ["Consulting", "Fintech"]
  },
  // {
  //   id: 7,
  //   name: "bigpp",
  //   type: "Operations Consulting",
  //   summary: "Worked with the team to digitize customer acquisition processes and reduce onboarding time by over 40%.",
  //   outcome: "40% faster client acquisition",
  //   isDark: false,
  //   logo: "/logos/softron.svg", // Placeholder path
  //   categories: ["Consulting", "Fintech"]
  // }
];

const PortfolioGrid = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  // Get unique categories
  const allCategories = ["All", ...new Set(portfolioProjects.flatMap(project => project.categories || []))];

  // Filter projects based on selected category
  const filteredProjects = activeFilter === "All" 
    ? portfolioProjects 
    : portfolioProjects.filter(project => project.categories?.includes(activeFilter));

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section className="py-10 md:py-16">
      <div className="max-w-content">
        {/* Category Filter */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center justify-center mb-10 gap-2"
        >
          <Filter size={16} className="text-navy mr-2" />
          <span className="text-sm font-medium mr-2">Filter:</span>
          
          {allCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-3 py-1 text-sm rounded-full transition-all duration-300 ${
                activeFilter === category 
                  ? "bg-navy text-white shadow-md" 
                  : "bg-white/80 text-gray-600 hover:bg-navy/10"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>
        
        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project) => (
            <PortfolioCard key={project.id} project={project} />
          ))}
          
          <NextProjectCard />
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioGrid;
