
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  return (
    <nav className="border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
      <div className="portfolio-container py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-navy font-montserrat font-bold text-xl">
            Design Portfolio
          </Link>
          
          <div className="hidden md:flex gap-6 items-center">
            <Link to="/" className="font-medium text-sm hover:text-teal transition-colors">
              Home
            </Link>
            <Link to="/portfolio" className="font-medium text-sm hover:text-teal transition-colors">
              Portfolio
            </Link>
            <Link to="/about" className="font-medium text-sm hover:text-teal transition-colors">
              About
            </Link>
            <Button size="sm" className="bg-navy hover:bg-navy/90">
              Contact
            </Button>
          </div>
          
          <div className="md:hidden">
            <Button variant="ghost" size="sm">
              <span className="sr-only">Open menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
