import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const CreditsPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 flex flex-col">
      <Header />

      {/* Credits header */}
      <section className="bg-gradient-to-b from-black to-gray-900 py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-4">
            <a href="/" className="text-orange-500 hover:underline mr-4">
              Home
            </a>
            <span className="text-gray-500 mx-2">→</span>
            <span className="text-gray-300">Credits</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-orange-500">
            Credits & Acknowledgments
          </h1>
          <p className="mt-4 text-xl text-gray-300 max-w-4xl">
            This project is made possible by the collective efforts of the
            Half-Life community.
          </p>
        </div>
      </section>

      {/* Main content */}
      <main className="container mx-auto px-4 py-12 flex-grow">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-800 p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-bold mb-6 text-orange-400">
              Project Contributors
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-700 p-4 rounded">
                <h3 className="text-xl font-semibold mb-2 text-orange-300">
                  Research & Data Collection
                </h3>
                <ul className="list-disc pl-6 space-y-1 text-gray-300">
                  <li>
                    Source engine modders tweaking 20-year-old code like it’s
                    their therapy
                  </li>
                  <li>Anonymous contributors and dataminers</li>
                </ul>
              </div>

              <div className="bg-gray-700 p-4 rounded">
                <h3 className="text-xl font-semibold mb-2 text-orange-300">
                  Technical Analysis
                </h3>
                <ul className="list-disc pl-6 space-y-1 text-gray-300">
                  <li>Game development spastics</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-bold mb-4 text-orange-400">
              Special Thanks
            </h2>
            <p className="mb-4 text-gray-300">
              A special acknowledgment to all Half-Life fans who have patiently
              waiting for Half-Life 3 like it’s the Second Coming. Your
              masochistic loyalty is basically the only reason this project
              didn’t die in a ditch.
            </p>
            <p className="text-gray-300">
              We also want to thank Valve for creating the Half-Life universe
              and the Source engine so we could waste our lives modding while
              they sip cocktails on a yacht made of CS2 skins. Cheers to that,
              you glorious bastards.
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-orange-400">
              Disclaimer
            </h2>
            <p className="text-gray-300">
              This site is a fan project and is not affiliated with Valve
              Corporation. Half-Life and all related trademarks are the property
              of Valve Corporation. The findings and information presented on
              this site are based on community research and may not represent
              actual Valve projects or plans.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CreditsPage;
