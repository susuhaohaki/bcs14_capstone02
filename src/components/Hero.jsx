import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

const Hero = () => {
  const { navigate } = useContext(ShopContext);
  return (
    <div className="flex flex-col-reverse md:flex-row items-center bg-gray-100 dark:bg-dark py-12 px-4 md:px-16">
      {/* Content */}
      <div className="w-full md:w-1/2 md:pl-12 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-100 mb-4">
          Discover the Trendiest Shoe Collection
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-6">
          Modern, stylish, and comfortable shoes await you. The perfect choice
          for fashion and comfort.
        </p>
        <div
          className="inline-block bg-black text-white text-lg font-medium py-3 px-6 rounded-lg shadow  dark:bg-gray-700 transition duration-300 cursor-pointer
          hover:bg-gray-500"
          onClick={() => navigate("/collection")}
        >
          Shop Now
        </div>
      </div>
      {/* Image */}
      <div className="w-full md:w-1/2 mb-6 md:mb-0">
        <img
          src="https://giaybaohohans.com/wp-content/uploads/2022/01/giay-bao-ho-hans-hs93-hero.png"
          alt="Shoes"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Hero;
