import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getFindingsByCategory } from "../utils/dataParser";
import { getNewsGroupedByPeriod } from "../utils/newsParser";

const Sidebar = ({ categories, activeCategory, setActiveCategory }) => {
  // We'll only keep a single expandedCategory state
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [categoryFindings, setCategoryFindings] = useState({});
  const [showCategories, setShowCategories] = useState(true);
  const [showNews, setShowNews] = useState(true);
  const [expandedNewsPeriods, setExpandedNewsPeriods] = useState({});
  const [newsData, setNewsData] = useState([]);

  // Load findings for all categories
  useEffect(() => {
    const allFindings = {};
    categories.forEach((category) => {
      allFindings[category.id] = getFindingsByCategory(category.id);
    });
    setCategoryFindings(allFindings);

    // Load news data
    setNewsData(getNewsGroupedByPeriod());
  }, [categories]);

  const toggleCategory = (categoryId) => {
    // If clicking the same category that's already expanded, collapse it
    if (expandedCategory === categoryId) {
      setExpandedCategory(null);
    } else {
      // Otherwise, expand this category and collapse any others
      setExpandedCategory(categoryId);
    }

    // Always set the active category to the one that was clicked
    setActiveCategory(categoryId);
  };

  const toggleNewsPeriod = (periodId) => {
    setExpandedNewsPeriods((prev) => ({
      ...prev,
      [periodId]: !prev[periodId],
    }));
  };

  return (
    <aside className="md:w-1/4 pr-0 md:pr-8 mb-8 md:mb-0">
      <div className="bg-gray-800 p-4 rounded sticky top-24 flex flex-col space-y-4">
        {/* Latest Valve News Section */}
        <div className="border-b border-gray-700 pb-4">
          <div
            className="flex justify-between items-center cursor-pointer mb-3"
            onClick={() => setShowNews(!showNews)}
          >
            <h2 className="text-xl font-bold text-orange-500">
              Latest Valve News
            </h2>
            <span className="text-orange-500">{showNews ? "▼" : "▶"}</span>
          </div>

          {showNews && (
            <div className="space-y-3">
              {newsData.map((period) => (
                <div key={period.id} className="mb-2">
                  <div
                    className="flex justify-between items-center cursor-pointer p-2 hover:bg-gray-700 rounded"
                    onClick={() => toggleNewsPeriod(period.id)}
                  >
                    <span className="text-sm font-medium">{period.period}</span>
                    <span className="text-xs text-orange-500">
                      {expandedNewsPeriods[period.id] ? "▼" : "▶"}
                    </span>
                  </div>

                  {expandedNewsPeriods[period.id] && (
                    <div className="mt-1 ml-4 pl-2 border-l-2 border-gray-700 space-y-2">
                      {period.items.map((item) => (
                        <div key={item.id} className="py-1">
                          <Link
                            to={`/news/${item.id}`}
                            className="block text-sm hover:text-orange-400"
                          >
                            <span className="block">{item.title}</span>
                            <span className="text-xs text-gray-500">
                              {item.date}
                            </span>
                          </Link>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="text-center mt-3">
                <Link
                  to="/news"
                  className="text-orange-500 text-sm hover:underline"
                >
                  View All News →
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* Categories Section */}
        <div>
          <div
            className="flex justify-between items-center cursor-pointer mb-3"
            onClick={() => setShowCategories(!showCategories)}
          >
            <h2 className="text-xl font-bold text-orange-500">Categories</h2>
            <span className="text-orange-500">
              {showCategories ? "▼" : "▶"}
            </span>
          </div>

          {showCategories && (
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category.id} className="mb-2">
                  <div
                    className={`w-full text-left p-2 rounded hover:bg-gray-700 transition-colors cursor-pointer ${
                      activeCategory === category.id
                        ? "bg-gray-700 border-l-4 border-orange-500 pl-1"
                        : ""
                    }`}
                    onClick={() => toggleCategory(category.id)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <span className="mr-2">{category.icon}</span>
                        {category.name}
                      </div>
                      <span className="text-xs text-orange-500">
                        {expandedCategory === category.id ? "▼" : "▶"}
                      </span>
                    </div>
                  </div>

                  {expandedCategory === category.id &&
                    categoryFindings[category.id] && (
                      <div className="mt-1 ml-6 pl-2 border-l-2 border-gray-700">
                        <ul className="space-y-1">
                          {categoryFindings[category.id].map((finding) => (
                            <li key={finding.id}>
                              <Link
                                to={`/finding/${finding.id}`}
                                className="block py-1 px-2 text-sm text-gray-300 hover:text-orange-400 hover:bg-gray-700 rounded"
                              >
                                {finding.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
