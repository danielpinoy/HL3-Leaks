import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
// Import pages
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import FindingDetailPage from "./pages/FindingDetailPage";
import CreditsPage from "./pages/CreditsPage";
import NewsDetailPage from "./pages/NewsDetailPage";
import NewsPage from "./pages/NewsPage";

function App() {
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

          {/* News routes */}
          <Route path="/news" element={<NewsPage />} />
          <Route path="/news/:newsId" element={<NewsDetailPage />} />

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
