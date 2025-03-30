// src/utils/newsParser.js

import newsData from "../data/newsData";

// Get all news items
export const getAllNews = () => {
  return newsData;
};

// Get news by ID
export const getNewsById = (newsId) => {
  return newsData.find((item) => item.id === newsId);
};

// Get news by category
export const getNewsByCategory = (category) => {
  return newsData.filter((item) => item.category === category);
};

// Get latest news (limited by count)
export const getLatestNews = (count = 3) => {
  // Sort by date (newest first) and return the requested number
  return [...newsData]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, count);
};

// Group news by time periods with custom month groupings
export const getNewsGroupedByPeriod = () => {
  const periodMap = new Map();

  newsData.forEach((item) => {
    const date = new Date(item.date);
    const month = date.getMonth();
    const year = date.getFullYear();

    // Custom month groupings starting from February
    const months = [
      ["February", "March"],
      ["April", "May"],
      ["June", "July"],
      ["August", "September"],
      ["October", "November"],
      ["December"],
    ];

    // Determine which period this belongs to
    let periodName = "";
    let foundPeriod = false;

    // Handle December specially since it's alone
    if (month === 11) {
      // December is month 11 (0-indexed)
      periodName = `${months[5][0]} ${year}`;
      foundPeriod = true;
    } else {
      // For the other paired months
      for (let i = 0; i < 5; i++) {
        // Check if month matches either month in the pair
        if (
          getMonthIndex(months[i][0]) === month ||
          (months[i][1] && getMonthIndex(months[i][1]) === month)
        ) {
          periodName = `${months[i][0]} - ${months[i][1]} ${year}`;
          foundPeriod = true;
          break;
        }
      }
    }

    // If we didn't find a matching period, use a default
    if (!foundPeriod) {
      periodName = `Other ${year}`;
    }

    // Add to period map
    if (!periodMap.has(periodName)) {
      periodMap.set(periodName, {
        id: periodName.toLowerCase().replace(/\s+/g, "-"),
        period: periodName,
        items: [],
      });
    }

    periodMap.get(periodName).items.push(item);
  });

  // Convert map to array and sort by date (newest first)
  return Array.from(periodMap.values()).sort((a, b) => {
    // Extract year from period
    const yearA = parseInt(a.period.match(/\d{4}/)[0]);
    const yearB = parseInt(b.period.match(/\d{4}/)[0]);

    if (yearA !== yearB) return yearB - yearA;

    // If same year, compare months (use first month of period)
    const monthA = a.period.split(" ")[0];
    const monthB = b.period.split(" ")[0];

    return getMonthIndex(monthB) - getMonthIndex(monthA);
  });
};

// Helper function to get month index
function getMonthIndex(monthName) {
  const months = {
    January: 0,
    February: 1,
    March: 2,
    April: 3,
    May: 4,
    June: 5,
    July: 6,
    August: 7,
    September: 8,
    October: 9,
    November: 10,
    December: 11,
  };

  return months[monthName] || 0;
}

export default {
  getAllNews,
  getNewsById,
  getNewsByCategory,
  getLatestNews,
  getNewsGroupedByPeriod,
};
