import React, { useState } from "react";
import { Link } from "react-router-dom";

const FindingCard = ({ finding }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-gray-800 rounded overflow-hidden hover:shadow-lg transition-shadow border border-gray-700 mb-6">
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2 text-orange-400">
          {finding.title}
        </h3>
        <p className="text-gray-300 mb-4">{finding.description}</p>

        {finding.codeSnippet && (
          <div className="bg-gray-900 p-3 rounded overflow-x-auto mb-4">
            <pre className="text-gray-400 text-sm">
              <code>{finding.codeSnippet}</code>
            </pre>
          </div>
        )}

        {expanded && finding.additionalInfo && (
          <div className="mt-4">
            <h4 className="text-lg font-semibold mb-2 text-gray-200">
              Additional Information
            </h4>
            <p className="text-gray-300">{finding.additionalInfo}</p>
          </div>
        )}
      </div>

      <div className="px-4 py-2 bg-gray-700 flex justify-between items-center">
        <span className="text-xs text-gray-400">
          Category: <span className="text-orange-300">{finding.category}</span>
        </span>

        {finding.additionalInfo && (
          <div className="flex items-center space-x-3">
            <button
              className="text-orange-500 hover:text-orange-400 text-sm"
              onClick={() => setExpanded(!expanded)}
            >
              {expanded ? "Show Less" : "Read More"}
            </button>

            <Link
              to={`/finding/${finding.id}`}
              className="text-orange-500 hover:text-orange-400 text-sm"
            >
              View Details →
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default FindingCard;
