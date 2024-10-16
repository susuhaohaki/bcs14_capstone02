import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
  const { token, navigate, setToken, getCartCount, setCartItems } = useContext(ShopContext);
  const [visible, setVisible] = useState(false);
  // ---------- Logout user ---------
  const logoutUser = () => {
    navigate("/login");
    localStorage.removeItem("cartItems");
    setCartItems({});
    localStorage.removeItem("token");
    setToken("");
  };
  const [theme, setTheme] = useState(null);
  useEffect(() => {
    if (window.matchMedia("prefer-color-scheme: dark").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);
  useEffect(() => {
    console.log("🚀 ~ useEffect ~ theme:", theme);
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div className="flex items-center justify-between py-5 font-medium bg-white text-gray-700 dark:bg-dark dark:text-gray-200 transition-all ">
      {/* nav logo  */}
      <Link to="/">
        <h1 className="text-5xl">Shoes</h1>
      </Link>
      {/* nav menu  */}
      <ul className="hidden sm:flex gap-5 text-sm">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>HOME</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 dark:bg-gray-400 hidden" />
        </NavLink>
        <NavLink to="/collection" className="flex flex-col items-center gap-1">
          <p>COLLECTION</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 dark:bg-gray-400 hidden" />
        </NavLink>
        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p>ABOUT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 dark:bg-gray-400 hidden" />
        </NavLink>
        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p>CONTACT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 dark:bg-gray-400 hidden" />
        </NavLink>
      </ul>
      <div className="flex items-center gap-6">
        <div>
          <img
            className="cursor-pointer dark:hidden"
            src={assets.icon_moon}
            alt="Dark Mode"
            onClick={() => setTheme("dark")}
          />
          <img
            className="cursor-pointer hidden dark:block"
            src={assets.icon_sun}
            alt="Light Mode"
            onClick={() => setTheme("light")}
          />
        </div>
        <div className="group relative">
          <div
            onClick={() => (token ? null : navigate("/login"))}
            src={assets.profile_icon}
            className="w-5 cursor-pointer"
            alt=""
          >
            <i className="fa-regular fa-user text-xl dark:text-gray-500"></i>
          </div>
          {/* ---------- Dropdown user ---------- */}
          {token && (
            <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
              <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 dark:bg-gray-800 dark:text-gray-200 rounded">
                <p className="cursor-pointer hover:text-black dark:hover:text-white">My Profile</p>
                <p
                  onClick={() => navigate("/orders")}
                  className="cursor-pointer hover:text-black dark:hover:text-white"
                >
                  Orders
                </p>
                <p onClick={logoutUser} className="cursor-pointer hover:text-black dark:hover:text-white">
                  Logout
                </p>
              </div>
            </div>
          )}
        </div>
        <Link to="/cart" className="relative">
          <div className="w-5 min-w-5" alt="">
            <i className="fa-solid fa-cart-shopping text-xl dark:text-gray-500"></i>
          </div>
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px] dark:bg-white dark:text-black">
            {getCartCount()}
          </p>
        </Link>
        <div onClick={() => setVisible(true)} className="w-5 cursor-pointer sm:hidden  dark:text-gray-500">
          <i className="fa-solid fa-bars" />
        </div>
      </div>
      {/* sidebar menu for small screen */}
      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white dark:bg-gray-900 transition-all ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col text-gray-600 dark:text-gray-300">
          <div onClick={() => setVisible(false)} className="flex items-center gap-4 p-3 cursor-pointer ">
            <img src={assets.dropdown_icon} className="h-4 rotate-180" alt="Back" />
            <p>back</p>
          </div>
          <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border dark:border-gray-700" to="/">
            HOME
          </NavLink>
          <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border dark:border-gray-700" to="/collection">
            COLLECTION
          </NavLink>
          <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border dark:border-gray-700" to="/about">
            ABOUT
          </NavLink>
          <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border dark:border-gray-700" to="/contact">
            CONTACT
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
