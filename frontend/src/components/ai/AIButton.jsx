import React, { useState } from "react";

const AIButton = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  // API endpoint for AI model
  const AI_MODEL_URL = "http://localhost:5000";

  const handleIframeError = () => {
    setError("Unable to load AI interface. Please ensure the AI server is running on port 5000.");
  };

  const handleIframeLoad = () => {
    setLoading(false);
    setError(null);
  };

  return (
    <>
      {/* Floating Button - Highest Layer */}
      <button
        onClick={() => {
          setOpen(!open);
          if (!open) {
            setLoading(true);
            setError(null);
          }
        }}
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
          
          {/* Loading Indicator */}
          {loading && !error && (
            <div className="flex items-center justify-center h-full">
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
                <p className="text-gray-600">Loading AI Interface...</p>
                <p className="text-sm text-gray-500 mt-2">Make sure Flask server is running on port 5000</p>
              </div>
            </div>
          )}

          {/* Error Message */}
          {error && (
            <div className="flex items-center justify-center h-full">
              <div className="text-center p-8">
                <div className="text-red-500 text-6xl mb-4">⚠️</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Connection Error</h3>
                <p className="text-gray-600 mb-4">{error}</p>
                <div className="bg-gray-100 p-4 rounded-lg text-left max-w-md">
                  <p className="text-sm font-semibold mb-2">To fix this:</p>
                  <ol className="text-sm text-gray-700 space-y-1 ml-4 list-decimal">
                    <li>Open terminal in <code className="bg-gray-200 px-1 rounded">SeedLink-airecognition-main</code> folder</li>
                    <li>Activate virtual environment: <code className="bg-gray-200 px-1 rounded">venv\Scripts\activate</code></li>
                    <li>Run: <code className="bg-gray-200 px-1 rounded">python app.py</code></li>
                    <li>Wait for "Running on http://127.0.0.1:5000"</li>
                    <li>Click AI button again</li>
                  </ol>
                </div>
                <button
                  onClick={() => {
                    setLoading(true);
                    setError(null);
                  }}
                  className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
                >
                  Retry
                </button>
              </div>
            </div>
          )}
          
          {/* AI Interface iframe */}
          <iframe
            src={AI_MODEL_URL}
            className="w-full h-full border-0"
            title="SeedLink AI Crop Recognition"
            allow="camera; microphone"
            onLoad={handleIframeLoad}
            onError={handleIframeError}
            style={{ display: loading || error ? 'none' : 'block' }}
          />
        </div>
      )}
    </>
  );
};

export default AIButton;
