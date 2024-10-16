import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import CartTotal from "../components/CartTotal.jsx";

const Cart = () => {
  const { products, currency, cartItems, updateQuantity, navigate } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);
  useEffect(() => {
    console.log("🚀 ~ Cart ~ products:", products);
    console.log("🚀 ~ Cart ~ cartItems:", cartItems);

    const tempData = [];
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item]) {
          tempData.push({
            id: items,
            size: item,
            quantity: cartItems[items][item],
          });
        }
      }
    }
    setCartData(tempData);
    console.log("cartItems", cartData);
  }, [cartItems, products]);

  return (
    <div className="border-t pt-14 bg-white dark:bg-dark text-gray-900 dark:text-gray-300 dark:dark:border-gray-600">
      <div className="text-2xl mb-3">
        <Title text1={"YOUR"} text2={"CART"} />
      </div>
      <div>
        {cartData.map((item, index) => {
          console.log(products);
          const productData = products.find((product) => Number(product.id) === Number(item.id));
          return (
            <div
              key={index}
              className="py-4 border-t border-b text-gray-700 dark:text-gray-300 dark:dark:border-gray-600 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4"
            >
              <div className="flex items-start gap-6">
                <img src={productData.image} className="w-16 sm:w-20" alt="" />
                <div>
                  <p className="text-xs sm:text-lg font-medium">{productData.name}</p>
                  <div className="flex items-center gap-5 m-2">
                    <p>
                      {currency}
                      {productData.price}
                    </p>
                    <p className="px-2 sm:px-3 sm:py-1 border bg-slate-50 dark:bg-gray-800 dark:border-gray-700">
                      {item.size}
                    </p>
                  </div>
                </div>
              </div>
              <input
                onChange={(e) =>
                  e.target.value === "" || e.target.value === "0"
                    ? null
                    : updateQuantity(item.id, item.size, Number(e.target.value))
                }
                className="border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1 bg-transparent dark:text-white dark:border-gray-700"
                type="number"
                min={1}
                defaultValue={item.quantity}
              />
              <div
                onClick={() => updateQuantity(item.id, item.size, 0)}
                className="w-4 sm:w-5 mr-4 cursor-pointer"
                src={assets.bin_icon}
                alt=""
              >
                <i className="fa-solid fa-trash dark:bg-gray-500"></i>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-end my-20">
        <div className="w-full sm:w-[450px]">
          <CartTotal />
          <div className="w-full text-end">
            <button
              onClick={() => navigate("/place-order")}
              className="bg-black text-white text-sm my-8 px-8 py-3 dark:bg-gray-700"
            >
              PROCEED TO
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
