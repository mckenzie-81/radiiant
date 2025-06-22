import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "./ui/Logo";
import { Button } from "@/components/ui/button";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="absolute top-0 left-0 w-full z-30 px-8 py-6 bg-transparent">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center my-1">
          <Logo variant="light" height={25} />
        </Link>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            to="/services"
            className="text-white hover:text-indigo font-medium transition-colors"
          >
            Services
          </Link>
          <Link
            to="/portfolio"
            className="text-white hover:text-indigo font-medium transition-colors"
          >
            Portfolio
          </Link>
          <Link
            to="/about"
            className="text-white hover:text-indigo font-medium transition-colors"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-white hover:text-indigo font-medium transition-colors"
          >
            Contact
          </Link>
          <Button className="bg-navy hover:bg-indigo text-white" asChild>
            <Link to="/request">Start Your Project</Link>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-navy p-1" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-40 bg-white bg-opacity-95 backdrop-blur-sm flex flex-col items-center justify-center space-y-6 px-6 py-8 md:hidden">
            {/* Close logo or header */}
            <Link
              to="/"
              className="flex items-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Logo variant="light" height={36} />
            </Link>

            {/* Nav Links */}
            <Link
              to="/services"
              className="text-navy text-lg hover:text-indigo transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              to="/portfolio"
              className="text-navy text-lg hover:text-indigo transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Portfolio
            </Link>
            <Link
              to="/about"
              className="text-navy text-lg hover:text-indigo transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-navy text-lg hover:text-indigo transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>

            {/* CTA */}
            <Button
              variant="default"
              className="bg-navy hover:bg-indigo text-white px-6 py-3 rounded-lg"
              onClick={() => setIsMobileMenuOpen(false)}
              asChild
            >
              <Link to="/request">Start Your Project</Link>
            </Button>
          </div>
        )}

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
                <Link to="/request">Start Your Project</Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
