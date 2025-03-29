import leakData from "../data/leakData";

// Get all categories
export const getCategories = () => {
  return leakData.categories;
};

// Get category by ID
export const getCategoryById = (categoryId) => {
  return leakData.categories.find((category) => category.id === categoryId);
};

// Get all findings
export const getAllFindings = () => {
  return leakData.findings;
};

// Get findings by category
export const getFindingsByCategory = (categoryId) => {
  return leakData.findings.filter((finding) => finding.category === categoryId);
};

// Get featured findings (limit by count)
export const getFeaturedFindings = (count = 3) => {
  // For this simple implementation, we'll just return the first N findings
  // In a real app, you might want to mark certain findings as featured
  return leakData.findings.slice(0, count);
};

// Get a single finding by ID
export const getFindingById = (findingId) => {
  return leakData.findings.find((finding) => finding.id === findingId);
};

// Search findings by keyword
export const searchFindings = (keyword) => {
  if (!keyword || keyword.trim() === "") {
    return [];
  }

  const lowercaseKeyword = keyword.toLowerCase();

  return leakData.findings.filter(
    (finding) =>
      finding.title.toLowerCase().includes(lowercaseKeyword) ||
      finding.description.toLowerCase().includes(lowercaseKeyword) ||
      (finding.additionalInfo &&
        finding.additionalInfo.toLowerCase().includes(lowercaseKeyword)) ||
      (finding.codeSnippet &&
        finding.codeSnippet.toLowerCase().includes(lowercaseKeyword))
  );
};

export default {
  getCategories,
  getCategoryById,
  getAllFindings,
  getFindingsByCategory,
  getFeaturedFindings,
  getFindingById,
  searchFindings,
};
