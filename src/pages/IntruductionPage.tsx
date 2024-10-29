import { useState } from "react";
import logo from "/logo.png";
import { InoButton } from "ino-ui-tv";

const IntroductionPage = () => {
  const [activeTab, setActiveTab] = useState("npm");

  const commands = {
    npm: "npm install ino-tv-ui",
    Yarn: "yarn add ino-tv-ui",
    PNPM: "pnpm add ino-tv-ui",
    Bun: "bun add ino-tv-ui",
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(commands[activeTab]);
    alert("Command copied to clipboard!");
  };

  return (
    <div className="p-8 bg-white shadow-md rounded-lg">
      <h1 className="text-3xl font-bold mb-6 text-center text-primary">
        Welcome to inoTV UI
      </h1>

      <p className="text-lg text-gray-700 mb-4 text-center">
        inoTV UI is a library for building TV applications.
      </p>
      <div className="flex justify-center mb-6">
        <img
          src={logo}
          alt="Ino TV UI Logo"
          className="w-32 h-32"
        />
      </div>
      <div className="mt-6">
        <h2 className="text-2xl font-semibold mb-2">Installation</h2>
        <div className="flex space-x-4 mb-4">
          {["npm", "Yarn", "PNPM", "Bun"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded ${
                activeTab === tab ? "bg-primary text-white" : "bg-gray-200"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="bg-gray-900 p-4 rounded-lg shadow-lg border flex justify-between items-center">
          <code className="text-sm text-black">{`$ ${commands[activeTab]}`}</code>
          <button
            onClick={handleCopy}
            className="ml-4 bg-primary text-white px-2 py-1 rounded"
          >
            Copy
          </button>
        </div>
      </div>
    </div>
  );
};

export default IntroductionPage;
