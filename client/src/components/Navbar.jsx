import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userData = localStorage.getItem('user');
    if (token && userData) {
      setIsLoggedIn(true);
      setUser(JSON.parse(userData));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    setUser(null);
    navigate('/');
  };

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
          <Link 
            to="/orders" 
            className="text-white hover:text-blue-200 font-medium transition-colors duration-200 relative group"
          >
            Orders
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-200 group-hover:w-full transition-all duration-300"></span>
          </Link>
          {isLoggedIn ? (
            <div className="relative group">
              <button className="flex items-center space-x-2 bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white font-semibold px-4 py-2 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300">
                <span className="text-lg">👤</span>
                <span>{user?.name || 'Profile'}</span>
              </button>
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <button 
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
                >
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <button 
              onClick={() => navigate('/login')} 
              className="bg-gradient-to-r from-orange-400 to-pink-500 hover:from-orange-500 hover:to-pink-600 text-white font-semibold px-6 py-2 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
            >
              Login
            </button>
          )}
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
            <Link 
              to="/orders" 
              className="text-white hover:text-blue-200 font-medium py-2 px-4 rounded-lg hover:bg-white hover:bg-opacity-10 transition-all duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Orders
            </Link>
            {isLoggedIn ? (
              <div className="space-y-2">
                <div className="text-white font-semibold py-2 px-4">
                  👤 {user?.name || 'Profile'}
                </div>
                <button 
                  onClick={() => {
                    handleLogout();
                    setIsMenuOpen(false);
                  }} 
                  className="bg-red-500 text-white font-semibold py-2 px-4 rounded-full w-full"
                >
                  Logout
                </button>
              </div>
            ) : (
              <button 
                onClick={() => {
                  navigate('/login');
                  setIsMenuOpen(false);
                }} 
                className="bg-gradient-to-r from-orange-400 to-pink-500 text-white font-semibold py-2 px-4 rounded-full mt-2"
              >
                Login
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
