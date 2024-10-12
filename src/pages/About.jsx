import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";

const About = () => {
  return (
    <div className="bg-white dark:bg-dark text-gray-900 dark:text-gray-300">
      <div className="mb-16 pt-8 border-t dark:border-gray-700">
        <div className="flex flex-col-reverse lg:flex-row lg:items-center gap-8">
          {/* Nội dung giới thiệu */}
          <div className="lg:w-1/2">
            <h1 className="text-4xl font-bold mb-4">
              <Title text1={"ABOUT"} text2={"US"} />
            </h1>
            <p className="text-lg leading-relaxed mb-6">
              Welcome to our shoe store, where we believe that footwear is not
              just a necessity but an expression of your unique personality.
              With over a decade of experience in the fashion industry, we offer
              a curated collection of high-quality shoes for every occasion.
              Whether you're looking for the latest trends or classic designs,
              we've got something to fit your style and comfort.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Our mission is to provide you with the best footwear shopping
              experience, from the moment you browse our collection to when your
              new favorite shoes arrive at your doorstep. We pride ourselves on
              excellent customer service and a seamless shopping experience.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Join us on this journey of style and comfort. Your perfect pair is
              waiting for you!
            </p>
          </div>
          {/* Hình ảnh */}
          <div className="lg:w-1/2">
            <img
              src={assets.about_img}
              alt="Shoe Collection"
              className="w-full "
            />
          </div>
        </div>
      </div>

      <div className="text-4xl py-4">
        <Title text1={"WHY"} text2={"CHOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border dark:border-gray-700 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className=" text-gray-600 dark:text-gray-400">
            We carefully handpick and thoroughly inspect each product to ensure
            it meets our high standards of quality and durability. Your
            satisfaction with the product's craftsmanship is guaranteed.
          </p>
        </div>
        <div className="border dark:border-gray-700 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className=" text-gray-600 dark:text-gray-400">
            Our seamless and intuitive shopping experience allows you to browse,
            order, and receive your items effortlessly. With a user-friendly
            interface, shopping with us has never been easier.
          </p>
        </div>
        <div className="border dark:border-gray-700 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className=" text-gray-600 dark:text-gray-400">
            Our dedicated team is always ready to assist you, from product
            inquiries to after-purchase support. We prioritize your satisfaction
            and are committed to providing outstanding service every step of the
            way.
          </p>
        </div>
      </div>
      <NewsletterBox />
    </div>
  );
};

export default About;
