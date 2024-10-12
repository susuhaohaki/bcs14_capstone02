import React, { useContext, useState } from "react";
import Title from "../components/Title";
import CartTotal from "../components/CartTotal";
import { assets } from "../assets/assets";
import { toast } from "react-toastify";
import { ShopContext } from "../context/ShopContext";

const PlaceOrder = () => {
  const { navigate, setCartItems } = useContext(ShopContext);
  const [method, setMethod] = useState("cod");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    toast.success("order success");
    setCartItems({});
    navigate("/");
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t dark:bg-dark dark:text-white"
    >
      {/* ---------- left side ---------- */}
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
        <div className="text-xl sm:text-2xl my-3">
          <Title text1={"DELIVERY"} text2={"INFORMATION"} />
        </div>
        <div className="flex gap-3">
          <input
            required
            name="firstName"
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full dark:border-gray-600"
            type="text"
            placeholder="First name"
          />
          <input
            required
            name="lastName"
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full dark:border-gray-600"
            type="text"
            placeholder="Last name"
          />
        </div>
        <input
          required
          name="email"
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full dark:border-gray-600"
          type="email"
          placeholder="Email address"
        />
        <input
          required
          name="street"
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full dark:border-gray-600"
          type="text"
          placeholder="Street"
        />
        <div className="flex gap-3">
          <input
            required
            name="city"
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full dark:border-gray-600"
            type="text"
            placeholder="City"
          />
          <input
            required
            name="state"
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full dark:border-gray-600"
            type="text"
            placeholder="State"
          />
        </div>
        <div className="flex gap-3">
          <input
            required
            name="zipcode"
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full dark:border-gray-600"
            type="number"
            placeholder="Zip code"
          />
          <input
            required
            name="country"
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full dark:border-gray-600"
            type="text"
            placeholder="Country"
          />
        </div>
        <input
          required
          name="phone"
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full dark:border-gray-600"
          type="number"
          placeholder="Phone"
        />
      </div>
      {/* ---------- right side ----------  */}
      <div className="mt-8">
        <div className="mt-8 min-w-80">
          <CartTotal />
        </div>
        <div className="mt-8">
          <Title text1={"PAYMENT"} text2={"METHOD"} />
          {/* ---------- Payment method Selection ---------- */}
          <div className="flex gap-3 flex-col md:flex-row">
            <div
              onClick={() => setMethod("stripe")}
              className="flex items-center gap-3 border p-2 px-3 cursor-pointer dark:border-gray-600"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method === "stripe" ? "bg-green-400" : ""
                }`}
              ></p>
              <img src={assets.stripe_logo} className="h-5 mx-4" alt="" />
            </div>
            <div
              onClick={() => setMethod("razorpay")}
              className="flex items-center gap-3 border p-2 px-3 cursor-pointer dark:border-gray-600"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method === "razorpay" ? "bg-green-400" : ""
                }`}
              ></p>
              <img src={assets.razorpay_logo} className="h-5 mx-4" alt="" />
            </div>
            <div
              onClick={() => setMethod("cod")}
              className="flex items-center gap-3 border p-2 px-3 cursor-pointer dark:border-gray-600"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method === "cod" ? "bg-green-400" : ""
                }`}
              ></p>
              <p>Cash on delivery</p>
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="bg-black text-white mt-8 px-8 py-3 dark:bg-gray-600"
        >
          PLACE ORDER
        </button>
      </div>
    </form>
  );
};

export default PlaceOrder;
