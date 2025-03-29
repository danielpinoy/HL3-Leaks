import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import InfoAlert from "../components/InfoAlert";
import LoadingSpinner from "../components/LoadingSpinner";
import { getFindingById, getCategoryById } from "../utils/dataParser";

const FindingDetailPage = () => {
  const { findingId } = useParams();
  const navigate = useNavigate();
  const [finding, setFinding] = useState(null);
  const [category, setCategory] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the finding data
    if (findingId) {
      const findingData = getFindingById(findingId);

      if (findingData) {
        setFinding(findingData);

        // Get the category information
        const categoryData = getCategoryById(findingData.category);
        if (categoryData) {
          setCategory(categoryData);
        }
      }

      setLoading(false);
    }
  }, [findingId]);

  // Navigate back
  const handleGoBack = () => {
    navigate(-1);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 text-gray-200 flex flex-col">
        <Header />
        <div className="container mx-auto px-4 py-16 flex-grow flex items-center justify-center">
          <LoadingSpinner size="large" text="Loading finding..." />
        </div>
        <Footer />
      </div>
    );
  }

  if (!finding) {
    return (
      <div className="min-h-screen bg-gray-900 text-gray-200 flex flex-col">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Finding not found</h2>
          <p>The requested finding could not be found.</p>
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
            {category && (
              <>
                <a
                  href={`/category/${category.id}`}
                  className="text-orange-500 hover:underline"
                >
                  {category.name}
                </a>
                <span className="mx-2 text-gray-500">→</span>
              </>
            )}
            <span className="text-gray-400 truncate max-w-xs">
              {finding.title}
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
              <div className="flex items-start">
                {category && (
                  <div className="bg-gray-900 text-2xl p-3 rounded mr-4">
                    {category.icon}
                  </div>
                )}
                <div>
                  <h1 className="text-3xl font-bold text-orange-400 mb-2">
                    {finding.title}
                  </h1>
                  <p className="text-gray-300 text-lg">{finding.description}</p>
                </div>
              </div>

              {finding.codeSnippet && (
                <div className="mt-8">
                  <h2 className="text-xl font-semibold mb-3 text-gray-200">
                    Code Reference
                  </h2>
                  <div className="bg-gray-900 p-4 rounded overflow-x-auto">
                    <pre className="text-gray-300">
                      <code>{finding.codeSnippet}</code>
                    </pre>
                  </div>
                </div>
              )}

              {finding.additionalInfo && (
                <div className="mt-8">
                  <h2 className="text-xl font-semibold mb-3 text-gray-200">
                    Analysis
                  </h2>
                  <div className="bg-gray-700 p-4 rounded border-l-4 border-orange-500">
                    <p className="text-gray-200 leading-relaxed">
                      {finding.additionalInfo}
                    </p>
                  </div>
                </div>
              )}
            </div>

            <div className="bg-gray-700 px-6 py-4 flex justify-between items-center">
              <div>
                <span className="text-sm text-gray-400">Category: </span>
                {category && (
                  <a
                    href={`/category/${category.id}`}
                    className="text-orange-400 hover:underline"
                  >
                    {category.name}
                  </a>
                )}
              </div>

              {/* Share options could go here */}
            </div>
          </div>

          <InfoAlert type="info" title="About this finding">
            <p>
              This information is based on code analysis and publicly available
              resources. While it may suggest Half-Life 3 content, it could also
              represent experimental features, abandoned concepts, or content
              for other projects.
            </p>
          </InfoAlert>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FindingDetailPage;
