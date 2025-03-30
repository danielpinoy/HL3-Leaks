import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import InfoAlert from "../components/InfoAlert";
import LoadingSpinner from "../components/LoadingSpinner";
import { getNewsById } from "../utils/newsParser";
const NewsDetailPage = () => {
  const { newsId } = useParams();
  const navigate = useNavigate();
  const [newsItem, setNewsItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the news data
    if (newsId) {
      const newsData = getNewsById(newsId);

      if (newsData) {
        setNewsItem(newsData);
      }

      setLoading(false);
    }
  }, [newsId]);

  // Navigate back
  const handleGoBack = () => {
    navigate(-1);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 text-gray-200 flex flex-col">
        <Header />
        <div className="container mx-auto px-4 py-16 flex-grow flex items-center justify-center">
          <LoadingSpinner size="large" text="Loading news..." />
        </div>
        <Footer />
      </div>
    );
  }

  if (!newsItem) {
    return (
      <div className="min-h-screen bg-gray-900 text-gray-200 flex flex-col">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-2xl font-bold mb-4">News item not found</h2>
          <p>The requested news article could not be found.</p>
          <button
            onClick={handleGoBack}
            className="mt-4 bg-orange-500 hover:bg-orange-600 text-black font-semibold px-4 py-2 rounded transition-colors"
          >
            Go Back
          </button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 flex flex-col">
      <Header />

      {/* Breadcrumb navigation */}
      <div className="bg-black py-4 border-b border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex items-center text-sm">
            <a href="/" className="text-orange-500 hover:underline">
              Home
            </a>
            <span className="mx-2 text-gray-500">→</span>
            <a href="/news" className="text-orange-500 hover:underline">
              News
            </a>
            <span className="mx-2 text-gray-500">→</span>
            <span className="text-gray-400 truncate max-w-xs">
              {newsItem.title}
            </span>
          </div>
        </div>
      </div>

      {/* Main content */}
      <main className="container mx-auto px-4 py-8 flex-grow">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <button
              onClick={handleGoBack}
              className="text-orange-500 hover:text-orange-400 flex items-center"
            >
              ← Back
            </button>
          </div>

          <div className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 mb-8">
            <div className="p-6">
              <h1 className="text-3xl font-bold text-orange-400 mb-4">
                {newsItem.title}
              </h1>

              <div className="text-sm text-gray-400 mb-6">
                {newsItem.date} • Valve News
              </div>

              {newsItem.image && (
                <div className="mb-6 flex justify-center">
                  <div className="w-full max-w-2xl">
                    <img
                      src={newsItem.image}
                      alt={newsItem.title}
                      style={{
                        height: "400px",
                        objectFit: "contain",
                      }}
                      className="w-full rounded-lg mb-2"
                    />
                    {newsItem.imageCaption && (
                      <p className="text-sm text-gray-500 italic text-center ">
                        {newsItem.imageCaption}
                      </p>
                    )}
                  </div>
                </div>
              )}

              <div className="prose prose-invert max-w-none">
                {newsItem.content.map((paragraph, index) => (
                  <p key={index} className="text-gray-300 mb-4 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              {newsItem.source && (
                <div className="mt-8 pt-4 border-t border-gray-700">
                  <p className="text-sm text-gray-400">
                    <span className="font-semibold">Source:</span>{" "}
                    {newsItem.source}
                  </p>
                </div>
              )}
            </div>

            <div className="bg-gray-700 px-6 py-4">
              <div className="flex justify-between items-center">
                <div className="text-sm text-gray-300">
                  <span className="text-orange-400">
                    {newsItem.category || "Valve News"}
                  </span>
                </div>
                <div className="flex space-x-2">
                  <a href="#" className="text-gray-400 hover:text-orange-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <InfoAlert type="info" title="About Valve News">
            <p>
              The content on this page is based on publicly available
              information about Valve Corporation's activities. While we strive
              for accuracy, some details may be speculative or subject to
              change.
            </p>
          </InfoAlert>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NewsDetailPage;
