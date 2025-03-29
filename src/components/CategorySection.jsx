import React, { useState } from "react";
import FindingCard from "./FindingCard";

const CategorySection = ({ category, findings }) => {
  const [expanded, setExpanded] = useState(false);

  // Show only a limited number of findings initially
  const displayedFindings = expanded ? findings : findings.slice(0, 3);

  return (
    <div className="mb-12">
      <div className="flex items-center mb-6">
        <span className="text-2xl mr-3">{category.icon}</span>
        <h2 className="text-2xl font-bold text-orange-500">{category.name}</h2>
      </div>

      <div className="space-y-6">
        {displayedFindings.map((finding) => (
          <FindingCard key={finding.id} finding={finding} />
        ))}
      </div>

      {findings.length > 3 && (
        <div className="mt-6 text-center">
          <button
            className="bg-gray-800 hover:bg-gray-700 text-orange-500 font-semibold py-2 px-4 rounded transition-colors"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded
              ? "Show Less"
              : `View ${findings.length - 3} More Findings`}
          </button>
        </div>
      )}
    </div>
  );
};

export default CategorySection;
