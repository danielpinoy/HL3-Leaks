import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import FindingCard from "../components/FindingCard";
import InfoAlert from "../components/InfoAlert";
import CategorySection from "../components/CategorySection";
import ThreeJsBackground from "../components/ThreeJsBackground";
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
  const [animatedText, setAnimatedText] = useState("");
  const fullText =
    "An archive of code snippets, references, and files suggesting the development of the long-awaited sequel.";

  useEffect(() => {
    // Text animation effect
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setAnimatedText(fullText.substring(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 40); // Typing speed

    return () => clearInterval(timer);
  }, []);

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
      <section className="bg-gradient-to-b from-black to-gray-900 text-center py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 hero-content">
          <div className="mb-6 transform hover:scale-105 transition-transform duration-300">
            <span className="text-6xl text-orange-500 font-bold inline-block animate-float">
              λ
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-4 relative">
            <span className="text-gray-200 opacity-80">
              Half-Life
              <span className="inline-block ml-2 relative">
                <span className="text-orange-500 relative z-10">3</span>
                <span className="absolute -right-1 top-0 text-orange-700 opacity-50 z-0 blur-sm">
                  3
                </span>
              </span>
            </span>
            <br />
            <span className="text-orange-500 mt-2 inline-block relative text-glow">
              Findings & Leaks
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-orange-500 transform scale-x-0 animate-growBar"></span>
            </span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto h-16">
            {animatedText}
            <span className="animate-blink">|</span>
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-4 mt-8">
            <div className="bg-orange-800 text-white px-6 py-3 rounded-lg relative overflow-hidden group">
              <span className="relative z-10">
                Last updated: March 30, 2025
              </span>
              <div className="absolute inset-0 bg-orange-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
            </div>

            <button
              onClick={() => window.scrollTo({ top: 500, behavior: "smooth" })}
              className="bg-gray-800 hover:bg-gray-700 text-orange-500 px-6 py-3 rounded-lg transition-colors duration-300"
            >
              Explore Findings →
            </button>
          </div>
        </div>
      </section>

      {/* Content area with ThreeJsBackground */}
      <div className="absolute inset-0 z-0">
        <ThreeJsBackground />
      </div>
      <div className="relative flex-grow">
        {/* Add ThreeJsBackground for the entire content area */}

        {/* Info/warning box */}
        <div className="container mx-auto px-4 my-8 relative z-10">
          <InfoAlert type="warning" title="Note about these findings">
            <p>
              Identification is based on limited criteria and some features
              could be shared between projects or scrapped ideas. This is a
              community-driven investigation and not official content.
            </p>
          </InfoAlert>
        </div>
        <div className="absolute inset-0 z-0">
          <ThreeJsBackground />
        </div>
        {/* Main content area */}
        <main className="container mx-auto px-4 flex-grow relative z-10">
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

                  <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 mb-12">
                    <h2 className="text-2xl font-bold mb-4 text-orange-400">
                      Recent Updates
                    </h2>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <span className="text-orange-500 mr-2 mt-0.5">•</span>
                        <div>
                          <span className="font-semibold">March 2025:</span>{" "}
                          Added FSR3 implementation evidence, more destructible
                          NPC systems, and deformation models
                        </div>
                      </li>
                    </ul>
                  </div>
                </>
              )}
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;
