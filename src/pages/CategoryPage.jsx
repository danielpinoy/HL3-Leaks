import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FindingCard from "../components/FindingCard";
import { getCategoryById, getFindingsByCategory } from "../utils/dataParser";

const CategoryPage = ({ categoryId }) => {
  const [category, setCategory] = useState(null);
  const [findings, setFindings] = useState([]);

  useEffect(() => {
    // Load category data based on the categoryId
    if (categoryId) {
      const categoryData = getCategoryById(categoryId);
      setCategory(categoryData);

      // Load findings for this category
      const categoryFindings = getFindingsByCategory(categoryId);
      setFindings(categoryFindings);
    }
  }, [categoryId]);

  if (!category) {
    return (
      <div className="min-h-screen bg-gray-900 text-gray-200 flex flex-col">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Category not found</h2>
          <p>The requested category could not be found.</p>
          <a
            href="/"
            className="text-orange-500 hover:underline mt-4 inline-block"
          >
            Return to Home
          </a>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 flex flex-col">
      <Header />

      {/* Category header */}
      <section className="bg-gradient-to-b from-black to-gray-900 py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-4">
            <a href="/" className="text-orange-500 hover:underline mr-4">
              Home
            </a>
            <span className="text-gray-500 mx-2">→</span>
            <span className="text-gray-300">Category</span>
          </div>

          <div className="flex items-center">
            <span className="text-4xl mr-4">{category.icon}</span>
            <h1 className="text-3xl md:text-4xl font-bold text-orange-500">
              {category.name}
            </h1>
          </div>

          <p className="mt-4 text-xl text-gray-300 max-w-4xl">
            {category.description}
          </p>
        </div>
      </section>

      {/* Findings list */}
      <main className="container mx-auto px-4 py-12 flex-grow">
        <h2 className="text-2xl font-bold mb-8 pb-4 border-b border-gray-800">
          All Findings ({findings.length})
        </h2>

        {findings.length === 0 ? (
          <div className="text-center py-12 bg-gray-800 rounded">
            <p className="text-gray-400">
              No findings available for this category yet.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {findings.map((finding) => (
              <FindingCard key={finding.id} finding={finding} />
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default CategoryPage;
