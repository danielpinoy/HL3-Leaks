import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
// Import pages
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import FindingDetailPage from "./pages/FindingDetailPage";
import CreditsPage from "./pages/CreditsPage";

// Import data utilities

function App() {
  // Get all categories for the routes

  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Home page route */}
          <Route path="/" element={<HomePage />} />

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
