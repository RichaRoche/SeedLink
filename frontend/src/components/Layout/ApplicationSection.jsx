import React from "react";
import pic from "../assets/service-05.png";
import card3 from "../assets/th 1.png";
import card2 from "../assets/service-06.png";
import wheatbg from "../assets/wheats.webp.png";

const cards = [
  {
    img: pic,
    title: "Browse Tools & Seeds",
    desc: "Easily explore a wide range of agricultural tools, seeds, and supplies listed directly by farmers across the region.",
  },
  {
    img: card2,
    title: "Buy from Farmers",
    desc: "Skip the middlemen. Support local farming communities by buying high-quality products straight from verified farmers — at fair prices and with transparent details.",
  },
  {
    img: card3,
    title: "AI Integration",
    desc: "Identify Crops or Tools from an image upload",
  },
];

const ApplicationSection = () => {
  return (
    <div
      className="relative flex flex-col items-center pt-24"
      style={{
        height: "100vh",
        backgroundColor: "#F8F7F0",
      }}
    >
      {/* Stylish Heading */}
      <h2 className="text-4xl md:text-5xl font-extrabold text-green-800 mb-10 relative z-10">
        What We Offer
        <span className="block w-24 h-1 bg-green-600 mt-2 rounded-full mx-auto"></span>
      </h2>

      {/* Cards container */}
      <div className="flex gap-6 z-10">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="bg-white shadow-lg rounded-lg overflow-hidden w-64 flex flex-col items-center hover:scale-105 transform transition duration-300"
          >
            <img
              src={card.img}
              alt={card.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="font-bold mb-2">{card.title}</h3>
              <p>{card.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Grass image at bottom */}
      <img
        src={wheatbg}
        alt="grass"
        className="absolute bottom-0 w-full h-24 object-cover"
      />
    </div>
  );
};

export default ApplicationSection;
