import React, { useState } from "react";
import { searchFindings } from "../utils/dataParser";

const SearchBar = ({ onSearchResults }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();

    if (!searchTerm.trim()) {
      return;
    }

    setIsSearching(true);

    // Perform the search
    const results = searchFindings(searchTerm);

    // Pass results to parent component
    if (onSearchResults) {
      onSearchResults(results, searchTerm);
    }

    setIsSearching(false);
  };

  return (
    <form onSubmit={handleSearch} className="mb-6">
      <div className="flex">
        <input
          type="text"
          placeholder="Search for code references, features..."
          className="w-full px-4 py-2 rounded-l bg-gray-800 border border-gray-700 focus:outline-none focus:border-orange-500 text-gray-200"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          type="submit"
          className="bg-orange-500 hover:bg-orange-600 text-black font-semibold px-4 py-2 rounded-r transition-colors"
          disabled={isSearching || !searchTerm.trim()}
        >
          {isSearching ? (
            <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin mx-auto"></div>
          ) : (
            "Search"
          )}
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
