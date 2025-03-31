import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Header with Lambda logo */}
      <header
        className={`${
          scrolled
            ? "bg-black bg-opacity-90 shadow-lg"
            : "bg-gradient-to-r from-black to-gray-900"
        } p-4 border-b border-orange-500 sticky top-0 z-50 transition-all duration-300`}
      >
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center group hover:no-underline">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-black font-bold text-2xl mr-3 rounded transform transition-transform group-hover:scale-110 group-hover:rotate-3">
              λ
              <span className="absolute inset-0 bg-orange-400 opacity-0 group-hover:opacity-20 rounded transition-opacity"></span>
            </div>
            <div className="flex flex-col">
              <h1 className="text-2xl font-bold text-orange-500 flex items-center">
                Half-Life <span className="text-white mx-1">|</span>
                <span className="text-orange-400">3</span>
              </h1>
              <span className="text-xs text-gray-400 -mt-1">Archive</span>
            </div>
          </Link>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white p-2 bg-gray-800 rounded hover:bg-gray-700 transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Navigation for desktop */}
          <nav className="hidden md:flex space-x-6">
            <NavLink href="/" label="Home" />
            <NavLink href="/news" label="News" />
            <NavLink href="/about" label="About" />
            <NavLink href="/credits" label="Credits" />
          </nav>
        </div>
      </header>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="bg-gradient-to-b from-black to-gray-900 border-b border-orange-500 md:hidden">
          <nav className="container mx-auto py-4 flex flex-col">
            <MobileNavLink href="/" label="Home" onClick={toggleMenu} />
            <MobileNavLink href="/news" label="News" onClick={toggleMenu} />
            <MobileNavLink href="/about" label="About" onClick={toggleMenu} />
            <MobileNavLink
              href="/credits"
              label="Credits"
              onClick={toggleMenu}
            />
          </nav>
        </div>
      )}
    </>
  );
};

// Desktop NavLink component
const NavLink = ({ href, label }) => (
  <Link to={href} className="relative group">
    <span className="text-gray-300 group-hover:text-orange-500 transition-colors">
      {label}
    </span>
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
  </Link>
);

// Mobile NavLink component
const MobileNavLink = ({ href, label, onClick }) => (
  <Link
    to={href}
    className="py-3 px-4 text-gray-300 hover:text-orange-500 hover:bg-gray-800 transition-colors rounded my-1 flex items-center"
    onClick={onClick}
  >
    <span className="text-orange-500 mr-2">λ</span>
    {label}
  </Link>
);

export default Header;
