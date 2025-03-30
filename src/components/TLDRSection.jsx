import React from "react";

const TLDRSection = () => {
  const keyFindings = [
    "References in Deadlock bug reporter ('HLX') and FSR 3 integration suggest late-stage Half-Life 3 development.",
    "Code for plug detachment sounds and interactions.",
    "Advanced Gravity Gun mechanics with grab/punt, mass/size overrides, and orientation control.",
    "Non-standard gravity systems for AI and Xen-like environments.",
    "Assets and navigation hints for classic enemies (e.g., Houndeye, Gorilla, Jellyfish).",
    "AI LOD, destructible parts with health tracking, and behavior scripting.",
    "Advanced vehicle system with physics, passenger handling, and airborne capabilities.",
    "Procedural speech animations and mood-based NPC expressiveness.",
    "Detailed physics settings for simulation and environmental interactions.",
  ];

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-6 text-orange-500">
        Key Discoveries At A Glance
      </h2>

      <div className="bg-gray-800 p-6 rounded-lg border border-orange-900">
        <ul className="space-y-3">
          {keyFindings.map((finding, index) => (
            <li key={index} className="flex items-start">
              <span className="text-orange-500 mr-2 mt-1 text-lg">λ</span>
              <span className="text-gray-200">{finding}</span>
            </li>
          ))}
        </ul>
        <div className="mt-6 pt-4 border-t border-gray-700">
          <p className="text-gray-400 text-sm italic">
            These key discoveries represent the most significant evidence
            suggesting Half-Life 3 development based on our analysis of leaked
            code and references.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TLDRSection;
