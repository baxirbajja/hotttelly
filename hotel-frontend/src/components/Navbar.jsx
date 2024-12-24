import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Center - Logo */}
          <Link to="/" className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <img src="/logo.svg" alt="Hotelly" className={`h-16 transition-opacity ${isScrolled ? 'opacity-90' : 'opacity-100'}`} />
          </Link>

          {/* Right Side - Book Button */}
          <div className="ml-auto flex items-center space-x-6">
            <Link 
              to="/login" 
              className={`text-white hover:text-gray-200 transition-colors ${isScrolled ? 'text-[#8B6B4D]' : 'text-white'}`}
            >
              Sign In
            </Link>
            <Link
              to="/book"
              className={`px-6 py-2 border border-current text-sm uppercase tracking-wider hover:opacity-75 transition-opacity ${isScrolled ? 'bg-white text-[#8B6B4D] border-[#8B6B4D]' : 'bg-transparent text-white border-white'}`}
            >
              Book your stay
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
