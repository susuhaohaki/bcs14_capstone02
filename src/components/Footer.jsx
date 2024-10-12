import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-white dark:bg-dark text-gray-700 dark:text-gray-300">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* footer left */}
        <div>
          <Link to="/">
            <h1 className="text-5xl">Shoes</h1>
          </Link>
          <p className="w-full md:w-2/3">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        {/* footer center */}
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1">
            <li>HOME</li>
            <li>ABOUT</li>
            <li>DELIVERY</li>
            <li>PRIVACY POLICY</li>
          </ul>
        </div>
        {/* footer right  */}
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1">
            <li>+84 000-000-0000</li>
            <li>nguyenhai250203@gmail.com</li>
            <li></li>
          </ul>
        </div>
      </div>
      {/* copyright  */}
      <div>
        <hr className="border-gray-300 dark:border-gray-700" />
        <p className="py-5 text-sm text-center">
          Copyright 2024@ nguyenhai.dev - All Right Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
