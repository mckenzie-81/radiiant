
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from './ui/Logo';
import { Button } from '@/components/ui/button';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`sticky top-0 w-full z-20 transition-all duration-300 ${
        isScrolled ? ' backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="bg-transparent max-w-content flex items-center justify-between ">
        <Link to="/" className="flex items-center my-8">
          <Logo variant="light" height={25}/>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/services" className="text-navy hover:text-indigo font-medium transition-colors">
            Services
          </Link>
          <Link to="/portfolio" className="text-navy hover:text-indigo font-medium transition-colors">
            Portfolio
          </Link>
          <Link to="/about" className="text-navy hover:text-indigo font-medium transition-colors">
            About
          </Link>
          <Link to="/contact" className="text-navy hover:text-indigo font-medium transition-colors">
            Contact
          </Link>
          <Button variant="default" className="bg-navy hover:bg-indigo text-white" asChild>
            <Link to="/request">
              Start Your Project
            </Link>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-navy p-2" 
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white">
          <nav className="flex flex-col py-4 px-6 space-y-4">
            <Link 
              to="/" 
              className="flex items-center justify-center py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Logo variant="light" height={36} />
            </Link>
            <Link 
              to="/services" 
              className="text-navy hover:text-indigo font-medium py-2 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              to="/portfolio" 
              className="text-navy hover:text-indigo font-medium py-2 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Portfolio
            </Link>
            <Link 
              to="/about" 
              className="text-navy hover:text-indigo font-medium py-2 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="text-navy hover:text-indigo font-medium py-2 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Button 
              variant="default" 
              className="bg-navy hover:bg-indigo text-white w-full"
              onClick={() => setIsMobileMenuOpen(false)}
              asChild
            >
              <Link to="/request">
                Start Your Project
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
