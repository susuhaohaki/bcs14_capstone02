import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";

const CartTotal = () => {
  const { getCartAmount, currency } = useContext(ShopContext);
  return (
    <div className="w-full bg-white dark:bg-dark text-gray-900 dark:text-gray-300">
      <div className="text-2xl">
        <Title text1={"CART"} text2={"TOTALS"} />
      </div>
      <div className="flex flex-col gap-2 mt-2 text-sm">
        <div className="flex justify-between">
          <p>Subtotal</p>
          <p>
            {currency}
            {getCartAmount()}.00
          </p>
        </div>
        <hr className="border-gray-300 dark:border-gray-700" />
        <div className="flex justify-between">
          <p>Shipping Fee</p>
          <p>{currency}0</p>
        </div>
        <hr className="border-gray-300 dark:border-gray-700" />
        <div className="flex justify-between">
          <b>Total</b>
          <b>
            {currency}
            {getCartAmount() === 0 ? 0 : getCartAmount()}
          </b>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
