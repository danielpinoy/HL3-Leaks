import React, { useState } from "react";

const NewsSection = () => {
  const [expandedItem, setExpandedItem] = useState(null);

  const newsItems = [
    {
      id: 1,
      period: "February - March 2025",
      items: [
        {
          id: 101,
          title: "RealBiome's Co-Founder confirms collaboration with Valve",
          content:
            "RealBiome's Co-Founder has confirmed their collaboration with Valve since 2022, suggesting potential integration of their technology in upcoming Valve products. The partnership focuses on advanced biometric feedback systems that could be implemented in future hardware.",
          imageUrl: "https://i.imgur.com/nI4IMID.jpg",
          date: "March 15, 2025",
          details:
            "According to RealBiome's co-founder, the company has been working closely with Valve for several years on technology that could 'revolutionize how players physically interact with games.' While specific applications weren't disclosed, this partnership suggests Valve may be exploring biometric feedback for enhanced immersion in upcoming titles or hardware.",
        },
        {
          id: 102,
          title: "ASUS to collaborate with Valve on SteamOS",
          content:
            "ASUS is now the second company to collaborate with Valve regarding implementation of SteamOS, potentially bringing the gaming-focused OS to more hardware platforms beyond the Steam Deck.",
          imageUrl: "https://i.imgur.com/WniR5tx.jpg",
          date: "March 3, 2025",
          details:
            "Following Lenovo's partnership announcement in January, ASUS has now confirmed they're working with Valve to bring SteamOS to select gaming laptops. This expansion of SteamOS to major PC manufacturers signals Valve's commitment to establishing their Linux-based gaming platform as a viable alternative to Windows for PC gaming.",
        },
        {
          id: 103,
          title: "Deckard's $1,200 Proof of Concept revealed",
          content:
            "Leaked information about Valve's VR headset codenamed 'Deckard' shows a $1,200 proof of concept device using a Qualcomm SM8650 (Snapdragon 8 Gen 3) chip, 2.8\" LCD panels with 2160x2160 resolution per eye at 120Hz.",
          imageUrl: "https://i.imgur.com/Zq3Dai9.jpg",
          date: "February 28, 2025",
          details:
            "Technical specifications for Valve's 'Deckard' VR headset have leaked, revealing a standalone device powered by Qualcomm's Snapdragon 8 Gen 3 processor. The headset features 2.8\" LCD panels at 2160x2160 per eye running at 120Hz, four SLAM cameras for inside-out tracking, plus two eye-tracking cameras. The leaked information suggests a $1,200 price point for the 'proof of concept' model, positioning it between the Meta Quest Pro and Apple Vision Pro. Sources caution these specs may change before final release.",
        },
      ],
    },
  ];

  const toggleItem = (id) => {
    if (expandedItem === id) {
      setExpandedItem(null);
    } else {
      setExpandedItem(id);
    }
  };

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-6 text-orange-500">
        Latest Valve News
      </h2>

      <div className="space-y-6">
        {newsItems.map((period) => (
          <div
            key={period.id}
            className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700"
          >
            <div className="p-4 bg-gray-800 font-semibold text-xl text-orange-400">
              {period.period}
            </div>

            <div className="divide-y divide-gray-700">
              {period.items.map((item) => (
                <div key={item.id} className="p-4 hover:bg-gray-750">
                  <div className="flex flex-col md:flex-row gap-6">
                    {item.imageUrl && (
                      <div className="md:w-1/3 mb-3 md:mb-0 flex-shrink-0">
                        <img
                          src={item.imageUrl}
                          alt={item.title}
                          className="rounded-md w-full object-cover h-auto max-h-48"
                        />
                      </div>
                    )}
                    <div className="flex-grow">
                      <h3 className="text-xl font-semibold text-orange-400 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-300 mb-3">{item.content}</p>

                      {expandedItem === item.id && (
                        <div className="mt-3 bg-gray-700 p-3 rounded">
                          <p className="text-gray-200">{item.details}</p>
                        </div>
                      )}

                      <div className="flex items-center justify-between mt-3">
                        <span className="text-sm text-gray-500">
                          {item.date}
                        </span>

                        <button
                          onClick={() => toggleItem(item.id)}
                          className="text-orange-500 hover:text-orange-400 text-sm"
                        >
                          {expandedItem === item.id ? "Show Less" : "Read More"}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewsSection;
