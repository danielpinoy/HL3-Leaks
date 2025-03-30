import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-center p-6 mt-12 border-t border-gray-800">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-4">
          <div className="mb-4 md:mb-0">
            <div className="flex items-center justify-center md:justify-start">
              <div className="w-8 h-8 bg-orange-500 flex items-center justify-center text-black font-bold text-xl mr-2">
                λ
              </div>
              <span className="text-orange-500 font-bold">
                Half-Life 3 Leaks Archive
              </span>
            </div>
          </div>

          <div className="flex space-x-6">
            <a href="/" className="hover:text-orange-500 transition-colors">
              Home
            </a>
            <a
              href="/categories"
              className="hover:text-orange-500 transition-colors"
            >
              Categories
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
          </div>
        </div>

        <div className="border-t border-gray-800 pt-4 mt-4">
          <p className="mb-2">
            Half-Life 3 Leaks Archive - Community Project © {currentYear}
          </p>
          <p className="text-sm text-gray-500">
            This site is not affiliated with Valve Corporation. All Half-Life
            related trademarks are property of Valve Corporation.
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Last updated: March 30, 2025
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
