import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// Import pages
import HomePage from "./pages/HomePage";
import CategoryPage from "./pages/CategoryPage";
import AboutPage from "./pages/AboutPage";
import FindingDetailPage from "./pages/FindingDetailPage";
import CreditsPage from "./pages/CreditsPage";

// Import data utilities
import { getCategories } from "./utils/dataParser";

function App() {
  // Get all categories for the routes
  const categories = getCategories();

  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Home page route */}
          <Route path="/" element={<HomePage />} />

          {/* Dynamic category routes */}
          {categories.map((category) => (
            <Route
              key={category.id}
              path={`/category/${category.id}`}
              element={<CategoryPage categoryId={category.id} />}
            />
          ))}

          {/* About page route */}
          <Route path="/about" element={<AboutPage />} />

          {/* Finding detail page route */}
          <Route path="/finding/:findingId" element={<FindingDetailPage />} />

          {/* Credits page route */}
          <Route path="/credits" element={<CreditsPage />} />

          {/* Fallback route */}
          <Route path="*" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
