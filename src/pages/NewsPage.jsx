import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { getAllNews } from "../utils/newsParser";

const NewsPage = () => {
  const newsItems = getAllNews();

  // Group news by category for display
  const groupedNews = newsItems.reduce((acc, item) => {
    const category = item.category || "General";
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(item);
    return acc;
  }, {});

  // Sort news items by date (newest first)
  const sortedNews = [...newsItems].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 flex flex-col">
      <Header />

      {/* News header */}
      <section className="bg-gradient-to-b from-black to-gray-900 py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-4">
            <a href="/" className="text-orange-500 hover:underline mr-4">
              Home
            </a>
            <span className="text-gray-500 mx-2">→</span>
            <span className="text-gray-300">Valve News</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-orange-500">
            Latest Valve News
          </h1>
          <p className="mt-4 text-xl text-gray-300 max-w-4xl">
            Updates on Valve's activities, partnerships, and hardware
            developments
          </p>
        </div>
      </section>

      {/* News content */}
      <main className="container mx-auto px-4 py-12 flex-grow">
        <div className="max-w-6xl mx-auto">
          {/* Latest News */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-orange-500 border-b border-gray-800 pb-2">
              Latest News
            </h2>

            {sortedNews.length > 0 ? (
              <div className="space-y-8">
                {sortedNews.map((item) => (
                  <div
                    key={item.id}
                    className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700"
                  >
                    <div className="p-6">
                      <div className="flex flex-col md:flex-row">
                        {item.image && (
                          <div className="md:w-1/4 mb-4 md:mb-0 md:mr-6">
                            <img
                              src={item.image}
                              alt={item.title}
                              className="w-full h-64 rounded-lg object-cover"
                            />
                          </div>
                        )}
                        <div className="flex-1">
                          <Link
                            to={`/news/${item.id}`}
                            className="hover:text-orange-400"
                          >
                            <h3 className="text-xl font-bold text-orange-400 mb-2">
                              {item.title}
                            </h3>
                          </Link>
                          <p className="text-sm text-gray-400 mb-3">
                            {item.date} • {item.category || "Valve News"}
                          </p>
                          <p className="text-gray-300 mb-4">
                            {item.content[0]}
                          </p>
                          <Link
                            to={`/news/${item.id}`}
                            className="text-orange-500 hover:text-orange-400 text-sm font-medium"
                          >
                            Read more →
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-400">
                No news articles available at this time.
              </p>
            )}
          </section>

          {/* News by Category */}
          <section>
            <h2 className="text-2xl font-bold mb-8 text-orange-500 border-b border-gray-800 pb-2">
              Browse by Category
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(groupedNews).map(([category, items]) => (
                <div
                  key={category}
                  className="bg-gray-800 p-6 rounded-lg border border-gray-700"
                >
                  <h3 className="text-xl font-bold mb-4 text-orange-400">
                    {category}
                  </h3>
                  <ul className="space-y-3">
                    {items.map((item) => (
                      <li
                        key={item.id}
                        className="border-b border-gray-700 last:border-0 pb-3 last:pb-0"
                      >
                        <Link
                          to={`/news/${item.id}`}
                          className="hover:text-orange-400"
                        >
                          <p className="font-medium">{item.title}</p>
                          <p className="text-xs text-gray-400">{item.date}</p>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NewsPage;
