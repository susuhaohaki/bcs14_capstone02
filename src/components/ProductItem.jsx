import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";
const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);
  return (
    <Link
      className="text-gray-700 dark:text-gray-200 cursor-pointer"
      to={`/product/${id}`}
    >
      <div className="overflow-hidden bg-[#e8eaec] dark:bg-gray-800">
        <img
          className="hover:scale-110 transition ease-in-out"
          src={image}
          alt={name}
        />
      </div>
      <p className="pt-3 pb-1 text-sm dark:text-gray-400">{name}</p>
      <p className="text-sm font-medium dark:text-gray-300">
        {currency}
        {price}
      </p>
    </Link>
  );
};

export default ProductItem;
