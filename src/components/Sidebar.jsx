import React from "react";

const Sidebar = ({ categories, activeCategory, setActiveCategory }) => {
  return (
    <aside className="md:w-1/4 pr-0 md:pr-8 mb-8 md:mb-0">
      <div className="bg-gray-800 p-4 rounded sticky top-24">
        <h2 className="text-xl font-bold mb-4 text-orange-500">Categories</h2>
        <ul>
          {categories.map((category) => (
            <li key={category.id} className="mb-2">
              <button
                className={`w-full text-left p-2 rounded hover:bg-gray-700 transition-colors ${
                  activeCategory === category.id
                    ? "bg-gray-700 border-l-4 border-orange-500 pl-1"
                    : ""
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </button>
              {category.description && (
                <p
                  className={`text-xs text-gray-400 mt-1 ml-2 ${
                    activeCategory === category.id ? "block" : "hidden"
                  }`}
                >
                  {category.description}
                </p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
