import React, { useState } from "react";

const AIButton = () => {
  const [open, setOpen] = useState(false);
  
  // API endpoint for AI model
  const AI_MODEL_URL = "http://localhost:5000";

  return (
    <>
      {/* Floating Button - Highest Layer */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-5 right-5 bg-green-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-green-700 transition z-[9999]"
      >
        {open ? "Close AI" : "AI"}
      </button>

      {/* AI Right Panel */}
      {open && (
        <div className="fixed top-0 right-0 w-1/2 h-full bg-white shadow-xl z-[9998] border-l-2 border-gray-300 flex flex-col">
          {/* AI Panel Header */}
          <div className="bg-green-600 text-white p-4 flex items-center justify-between shadow-md">
            <div className="flex items-center space-x-3">
              <h2 className="text-xl font-bold">🌱 SeedLink AI</h2>
              <span className="text-sm bg-green-700 px-2 py-1 rounded">Crop Recognition</span>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="hover:bg-green-700 px-3 py-1 rounded transition"
            >
              ✕
            </button>
          </div>
          
          {/* AI Interface iframe */}
          <iframe
            src={AI_MODEL_URL}
            className="w-full h-full border-0"
            title="SeedLink AI Crop Recognition"
            allow="camera; microphone"
          />
        </div>
      )}

      {/* Shift Website Left When AI Panel is Open */}
      <div
        className={`transition-all duration-500 ${
          open ? "mr-[50vw]" : "mr-0"
        }`}
      ></div>
    </>
  );
};

export default AIButton;
