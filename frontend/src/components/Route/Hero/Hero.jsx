import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";

const Hero = () => {
  return (
    <div
      className={`relative min-h-[80vh] w-full bg-cover bg-center bg-no-repeat flex items-center justify-center`}
      style={{
        backgroundImage: `url(https://am-ag.com/website/wp-content/uploads/2022/04/agricultural-solutions-banner.jpg)`,
      }}
    >
      {/* Overlay for contrast */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative text-center px-6 800px:px-0">
        <h1 className="text-white text-[40px] 800px:text-[70px] font-bold leading-tight drop-shadow-lg">
          Connect. Trade.{" "}
          <span className="text-[#EEC044]">Grow.</span>
        </h1>
        <p className="text-gray-200 text-[18px] mt-4 font-light tracking-wide">
          Empowering farmers through smart digital commerce.
        </p>
        <Link to="/products" className="inline-block mt-8">
          <div className="bg-[#4BAF47] hover:bg-[#3e9c3d] transition-all duration-300 text-white font-semibold py-3 px-10 rounded-full shadow-md hover:shadow-lg">
            Explore Marketplace
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
