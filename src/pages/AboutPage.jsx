import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import InfoAlert from "../components/InfoAlert";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 flex flex-col">
      <Header />

      {/* About header */}
      <section className="bg-gradient-to-b from-black to-gray-900 py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-4">
            <a href="/" className="text-orange-500 hover:underline mr-4">
              Home
            </a>
            <span className="text-gray-500 mx-2">→</span>
            <span className="text-gray-300">About</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-orange-500">
            About This Project
          </h1>
          <p className="mt-4 text-xl text-gray-300 max-w-4xl">
            An archive documenting potential evidence of Half-Life 3's
            development
          </p>
        </div>
      </section>

      {/* Main content */}
      <main className="container mx-auto px-4 py-12 flex-grow">
        <div className="max-w-4xl mx-auto">
          <InfoAlert type="info">
            <p>
              This project is a community effort to document and analyze code
              snippets, references, and files that may suggest the development
              of Half-Life 3. It is not affiliated with Valve Corporation.
            </p>
          </InfoAlert>

          <div className="bg-gray-800 p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-bold mb-4 text-orange-400">
              Methodology
            </h2>
            <p className="mb-4">
              The findings presented on this site come from various sources,
              including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Code references in other Valve games</li>
              <li>Source 2 SDK leaked code</li>
              <li>Publicly available Valve resources</li>
              <li>Community investigations</li>
            </ul>
            <p className="mt-4 text-gray-400">
              <strong>Important note:</strong> We cannot confirm with certainty
              that these references are definitively for Half-Life 3. Some
              features could be shared between projects or represent
              experimental or abandoned concepts.
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-orange-400">
              Contributing
            </h2>
            <p className="mb-4">
              This project is community-driven, and contributions are welcome.
              If you have additional findings, evidence, or insights to share,
              please contact us or submit your data through the appropriate
              channels.
            </p>
            <p className="text-gray-400">
              All contributions will be reviewed for accuracy and relevance
              before being added to the archive.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;
