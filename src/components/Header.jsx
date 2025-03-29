import React, { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Header with Lambda logo */}
      <header className="bg-black p-4 border-b border-orange-500 sticky top-0 z-10">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-orange-500 flex items-center justify-center text-black font-bold text-2xl mr-3">
              λ
            </div>
            <h1 className="text-2xl font-bold text-orange-500">
              Half-Life 3 Leaks
            </h1>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white p-2"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            ☰
          </button>

          {/* Navigation for desktop */}
          <nav className="hidden md:flex space-x-6">
            <a href="/" className="hover:text-orange-500 transition-colors">
              Home
            </a>
            <a
              href="/about"
              className="hover:text-orange-500 transition-colors"
            >
              About
            </a>
            <a
              href="/credits"
              className="hover:text-orange-500 transition-colors"
            >
              Credits
            </a>
          </nav>
        </div>
      </header>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="bg-black border-b border-orange-500 md:hidden">
          <nav className="container mx-auto py-4 flex flex-col">
            <a
              href="/"
              className="py-2 hover:text-orange-500 transition-colors"
            >
              Home
            </a>
            <a
              href="/categories"
              className="py-2 hover:text-orange-500 transition-colors"
            >
              Categories
            </a>
            <a
              href="/about"
              className="py-2 hover:text-orange-500 transition-colors"
            >
              About
            </a>
            <a
              href="/credits"
              className="py-2 hover:text-orange-500 transition-colors"
            >
              Credits
            </a>
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;
