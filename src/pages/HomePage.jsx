import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";

import FindingCard from "../components/FindingCard";
import InfoAlert from "../components/InfoAlert";
import CategorySection from "../components/CategorySection";
import {
  getCategories,
  getFeaturedFindings,
  getFindingsByCategory,
} from "../utils/dataParser";

const HomePage = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [categories, setCategories] = useState([]);
  const [featuredFindings, setFeaturedFindings] = useState([]);
  const [categoryFindings, setCategoryFindings] = useState([]);

  useEffect(() => {
    // Load categories and featured findings on initial render
    setCategories(getCategories());
    setFeaturedFindings(getFeaturedFindings(3));
  }, []);

  useEffect(() => {
    // When active category changes, load findings for that category
    if (activeCategory) {
      setCategoryFindings(getFindingsByCategory(activeCategory));
    } else {
      setCategoryFindings([]);
    }
  }, [activeCategory]);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 flex flex-col">
      <Header />

      {/* Hero section */}
      <section className="bg-gradient-to-b from-black to-gray-900 text-center py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-orange-500">Half-Life 3</span> Findings &
            Leaks
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            An archive of code snippets, references, and files suggesting the
            development of the long-awaited sequel.
          </p>
          <div className="bg-orange-800 inline-block text-white px-4 py-2 rounded">
            Last updated: March 30, 2025
          </div>
        </div>
      </section>

      {/* Info/warning box */}
      <div className="container mx-auto px-4 my-8">
        <InfoAlert type="warning" title="Note about these findings">
          <p>
            Identification is based on limited criteria and some features could
            be shared between projects or scrapped ideas. This is a
            community-driven investigation and not official content.
          </p>
        </InfoAlert>
      </div>

      {/* Main content area */}
      <main className="container mx-auto px-4 flex-grow">
        <div className="flex flex-col md:flex-row">
          {/* Sidebar for categories */}
          <Sidebar
            categories={categories}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />

          {/* Main content */}
          <div className="md:w-3/4">
            {activeCategory ? (
              // Show findings for selected category
              <>
                {categories.find((cat) => cat.id === activeCategory) && (
                  <CategorySection
                    category={categories.find(
                      (cat) => cat.id === activeCategory
                    )}
                    findings={categoryFindings}
                  />
                )}
              </>
            ) : (
              // Show featured content when no category is selected
              <>
                <h2 className="text-2xl font-bold mb-6 text-orange-500">
                  Featured Findings
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                  {featuredFindings.map((finding) => (
                    <FindingCard key={finding.id} finding={finding} />
                  ))}
                </div>

                {/* Explore categories section */}
                <div className="mt-12">
                  <h2 className="text-2xl font-bold mb-6 text-orange-500">
                    Explore Categories
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {categories.map((category) => (
                      <div
                        key={category.id}
                        className="bg-gray-800 p-4 rounded hover:bg-gray-700 transition-colors cursor-pointer border border-gray-700"
                        onClick={() => setActiveCategory(category.id)}
                      >
                        <div className="text-2xl mb-2">{category.icon}</div>
                        <h3 className="text-lg font-bold mb-1">
                          {category.name}
                        </h3>
                        <p className="text-sm text-gray-400">
                          {category.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;
