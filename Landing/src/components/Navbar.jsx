import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-800 py-4 px-6 flex items-center justify-between relative">
      <div className="flex items-center">
        {/* Logo placeholder */}
        <div className="h-8 w-8 bg-gray-500 rounded-full mr-2"></div>
        <span className="text-white font-bold text-xl hidden sm:inline">Product Name</span>
      </div>
      
      {/* Desktop Navigation */}
      <div className="hidden sm:flex items-center space-x-8">
        <a href="#" className="text-gray-300 hover:text-white transition-colors">Home</a>
        <a href="#" className="text-gray-300 hover:text-white transition-colors">About</a>
        <a href="#" className="text-gray-300 hover:text-white transition-colors">Contact</a>
      </div>
      
      {/* Desktop Pre-register button */}
      <button className="hidden sm:block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors">
        Pre-register
      </button>

      {/* Mobile menu button */}
      <button 
        className="sm:hidden text-gray-300 hover:text-white focus:outline-none" 
        onClick={toggleMenu}
      >
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          {isMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-gray-800 shadow-lg py-4 px-6 sm:hidden z-10">
          <div className="flex flex-col space-y-4">
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Home</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">About</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Contact</a>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors w-full">
              Pre-register
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;