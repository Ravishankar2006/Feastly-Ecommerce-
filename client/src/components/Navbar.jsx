import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="glass-effect sticky top-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="text-2xl">🍽️</div>
          <span className="text-2xl font-bold text-white tracking-tight">
            Feastly
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link 
            to="/" 
            className="text-white hover:text-blue-200 font-medium transition-colors duration-200 relative group"
          >
            Home
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-200 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link 
            to="/about" 
            className="text-white hover:text-blue-200 font-medium transition-colors duration-200 relative group"
          >
            About
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-200 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link 
            to="/cart" 
            className="text-white hover:text-blue-200 font-medium transition-colors duration-200 flex items-center space-x-1 relative group"
          >
            <span>Cart</span>
            <span className="text-lg">🛒</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-200 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <button 
            onClick={() => navigate('/login')} 
            className="bg-gradient-to-r from-orange-400 to-pink-500 hover:from-orange-500 hover:to-pink-600 text-white font-semibold px-6 py-2 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
          >
            Login
          </button>
        </div>

        {/* Mobile menu button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white p-2"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 pb-4 animate-slide-up">
          <div className="flex flex-col space-y-3">
            <Link 
              to="/" 
              className="text-white hover:text-blue-200 font-medium py-2 px-4 rounded-lg hover:bg-white hover:bg-opacity-10 transition-all duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="text-white hover:text-blue-200 font-medium py-2 px-4 rounded-lg hover:bg-white hover:bg-opacity-10 transition-all duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/cart" 
              className="text-white hover:text-blue-200 font-medium py-2 px-4 rounded-lg hover:bg-white hover:bg-opacity-10 transition-all duration-200 flex items-center space-x-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <span>Cart</span>
              <span>🛒</span>
            </Link>
            <button 
              onClick={() => {
                navigate('/login');
                setIsMenuOpen(false);
              }} 
              className="bg-gradient-to-r from-orange-400 to-pink-500 text-white font-semibold py-2 px-4 rounded-full mt-2"
            >
              Login
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
