import React, { useState } from 'react';
import { Menu, X, Smartphone, Laptop } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleBookRepair = () => {
    // Navigate to booking flow
    window.location.hash = '#booking';
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-gray-900 text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="bg-yellow-400 p-2 rounded-lg">
              <Smartphone className="h-6 w-6 text-gray-900" />
            </div>
            <h1 className="text-xl font-bold">TechFix Pro</h1>
          </div>
          
          <nav className="hidden md:flex space-x-8 items-center">
            <a href="#home" className="hover:text-yellow-400 transition-colors">Home</a>
            <a href="#services" className="hover:text-yellow-400 transition-colors">Services</a>
            <a href="#about" className="hover:text-yellow-400 transition-colors">About</a>
            <a href="#contact" className="hover:text-yellow-400 transition-colors">Contact</a>
            <button 
              onClick={handleBookRepair}
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-4 py-2 rounded-lg font-semibold transition-colors"
            >
              Book Repair
            </button>
          </nav>

          <button
            className="md:hidden"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="hover:text-yellow-400 transition-colors" onClick={toggleMenu}>Home</a>
              <a href="#services" className="hover:text-yellow-400 transition-colors" onClick={toggleMenu}>Services</a>
              <a href="#about" className="hover:text-yellow-400 transition-colors" onClick={toggleMenu}>About</a>
              <a href="#contact" className="hover:text-yellow-400 transition-colors" onClick={toggleMenu}>Contact</a>
              <button 
                onClick={handleBookRepair}
                className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-4 py-2 rounded-lg font-semibold transition-colors text-left"
              >
                Book Repair
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;