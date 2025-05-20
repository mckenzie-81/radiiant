
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './ui/Logo';
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy text-white pt-16 pb-8 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-cyan to-transparent filter blur-3xl"></div>
      </div>
      
      <div className="max-w-content relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Logo and company info */}
          <div className="space-y-6">
            <Logo className="text-white" variant="dark" height={150} />
            <p className="text-white/70 max-w-xs">
              Powering the next generation of African business with smart infrastructure.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>
          
          {/* Navigation */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="font-display text-lg mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/about" className="text-white/70 hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/portfolio" className="text-white/70 hover:text-white transition-colors">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link to="/careers" className="text-white/70 hover:text-white transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-white/70 hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-display text-lg mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/services" className="text-white/70 hover:text-white transition-colors">
                    Business Systems
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="text-white/70 hover:text-white transition-colors">
                    CRM Solutions
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="text-white/70 hover:text-white transition-colors">
                    API Development
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="text-white/70 hover:text-white transition-colors">
                    Custom Platforms
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="font-display text-lg mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Mail size={16} className="mr-2 text-white/70" />
                <a href="mailto:contact@radiiant.site" className="text-white/70 hover:text-white transition-colors">
                  contact@radiiant.site
                </a>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="mr-2 text-white/70" />
                <a href="tel:0543876146" className="text-white/70 hover:text-white transition-colors">
                  +233 54 387 6146
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 text-center text-white/50 text-sm">
          <p>&copy; {new Date().getFullYear()} RADIIANT. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
