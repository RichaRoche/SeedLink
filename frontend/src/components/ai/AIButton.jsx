import React, { useState } from "react";

const AIButton = () => {
  const [open, setOpen] = useState(false);

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
        <div className="fixed top-0 right-0 w-1/2 h-full bg-white shadow-xl z-[9998] flex items-center justify-center text-black text-3xl font-bold border-l-2 border-gray-300">
          AI
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
