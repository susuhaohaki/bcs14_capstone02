import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import RelatedProducts from "../components/RelatedProducts";

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart, token, navigate } =
    useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");
  const fetchProductData = async () => {
    await products.map((item) => {
      if (item.id === Number(productId)) {
        setProductData(item);
        setImage(item.image);
        return null;
      }
    });
  };
  useEffect(() => {
    fetchProductData();
  }, [products, productId]);
  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100 dark:border-gray-700">
      {/* PRODUCT DETAIL  */}
      <div className="flex flex-col sm:flex-row">
        {/* Product Image  */}
        <div className="flex-1 flex items-center justify-center">
          <div className="w-full sm:w-[70%]">
            <img src={image} className="w-full h-auto " alt="" />
          </div>
        </div>
        {/* Product Info  */}
        <div className="flex-1 ">
          <h1 className="font-medium text-2xl mt-2 dark:text-gray-200">
            {productData.name}
          </h1>
          <div className="flex items-center gap-1 mt-2">
            <img src={assets.star_icon} alt="" className="w-3" />
            <img src={assets.star_icon} alt="" className="w-3" />
            <img src={assets.star_icon} alt="" className="w-3" />
            <img src={assets.star_icon} alt="" className="w-3" />
            <img src={assets.star_icon} alt="" className="w-3" />
            <p className="pl-2 dark:text-gray-200">(122)</p>
          </div>
          <p className="mt-5 text-3xl font-medium dark:text-gray-200">
            {currency}
            {productData.price}
          </p>
          <p className="mt-5 text-gray-500 md:w-4/5">
            {productData.shortDescription}
          </p>
          {/* Sellect size  */}
          <div className="flex flex-col gap-4 my-8">
            <p className="dark:text-gray-200">Select Size</p>
            <div className="flex gap-2">
              {JSON.parse(productData.size).map((item, index) => (
                <button
                  key={index}
                  onClick={() => setSize(item)}
                  className={`py-2 px-4  border ${
                    item === size
                      ? "bg-blue-500 text-white border-blue-500"
                      : " bg-gray-100"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          {/* Add to cart */}
          <button
            onClick={() => {
              token ? addToCart(productData.id, size) : navigate("/login");
            }}
            className="bg-black text-white px-8 py-3 active:bg-gray-700 dark:bg-gray-700"
          >
            ADD TO CART
          </button>
          <hr className="mt-8 sm:w-4/5 dark:border-gray-700" />
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>100% Original product.</p>
            <p>Cash on delivery is available on this product. </p>
            <p>Easy return and exchange policy within 7 days. </p>
          </div>
        </div>
      </div>
      {/* Description & Review Section  */}
      <div className="mt-20">
        <div className="flex">
          <b className="border px-5 py-3 text-sm text-gray-500  dark:border-gray-700">
            Description
          </b>
          <p className="border px-5 py-3 text-sm text-gray-500  dark:border-gray-700">
            Reviews (122)
          </p>
        </div>
        <div className="flex flex-col gap-4 border px-6 py-6 text-sm  text-gray-500 dark:border-gray-700">
          <p>{productData.description}</p>
        </div>
      </div>

      {/* ---------- DISPLAY RELATED PRODUCT ---------- */}
      <RelatedProducts
        productRelatedId={JSON.parse(productData.relatedProducts)}
      />
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
