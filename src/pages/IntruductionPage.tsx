import { useState } from "react";
import logo from "/logo.png";

const IntroductionPage = () => {
  const [activeTab, setActiveTab] = useState("npm");
  const [email, setEmail] = useState("");
  const [subscribeStatus, setSubscribeStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);

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

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setSubscribeStatus("Please enter an email address");
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch("http://localhost:5000/api/subscribe", {
        method: "POST",
        body: JSON.stringify({ email }),
        headers: { "Content-Type": "application/json" },
      });

      const data = await response.json();

      if (data.success) {
        setSubscribeStatus(data.message);
        setEmail("");
      } else {
        setSubscribeStatus(data.message);
      }
    } catch (error) {
      setSubscribeStatus("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
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
      <p className="text-gray-600 text-center mb-6 mt-12">
        Subscribe to receive updates and news about inoTV UI
      </p>
      <form
        onSubmit={handleSubscribe}
        className="max-w-md mx-auto"
      >
        <div className="flex gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            disabled={isLoading}
          />
          <button
            type="submit"
            className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 disabled:opacity-50"
            disabled={isLoading}
          >
            {isLoading ? "Subscribing..." : "Subscribe"}
          </button>
        </div>
        {subscribeStatus && (
          <p
            className={`mt-2 text-center ${
              subscribeStatus.includes("error")
                ? "text-red-500"
                : "text-green-500"
            }`}
          >
            {subscribeStatus}
          </p>
        )}
      </form>
    </div>
  );
};

export default IntroductionPage;
