import React from "react";
import { toast } from "react-toastify";

const Contact = () => {
  const onSubmitHandler = (e) => {
    e.preventDefault();
    toast.success("send message success");
  };
  return (
    <div className="mb-16 pt-8 border-t dark:border-gray-700 flex justify-center">
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 md:flex md:justify-between md:max-w-4xl w-full">
        <div className="md:w-1/2 mb-6 md:mb-0">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
            Contact us
          </h2>
          <form onSubmit={onSubmitHandler}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label
                  htmlFor="first-name"
                  className="block text-gray-700 dark:text-gray-300"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="first-name"
                  name="first-name"
                  required
                  className="mt-1 p-2 w-full border border-gray-300 bg-transparent dark:text-white dark:border-gray-600 rounded-md focus:outline-none focus:ring focus:ring-blue-300 dark:focus:ring-blue-600"
                  placeholder="First Name"
                />
              </div>
              <div>
                <label
                  htmlFor="last-name"
                  className="block text-gray-700 dark:text-gray-300"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="last-name"
                  name="last-name"
                  required
                  className="mt-1 p-2 w-full border border-gray-300 bg-transparent dark:text-white dark:border-gray-600 rounded-md focus:outline-none focus:ring focus:ring-blue-300 dark:focus:ring-blue-600"
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div className="mb-4">
              <label
                htmlFor="phone"
                className="block text-gray-700 dark:text-gray-300"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                className="mt-1 p-2 w-full border bg-transparent dark:text-white border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring focus:ring-blue-300 dark:focus:ring-blue-600"
                placeholder="Phone Number"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-gray-700 dark:text-gray-300"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                className="mt-1 p-2 w-full border bg-transparent dark:text-white border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring focus:ring-blue-300 dark:focus:ring-blue-600"
                rows={4}
                placeholder="Message"
              />
            </div>
            <div className="mb-4 flex items-center">
              <input
                type="checkbox"
                id="privacy"
                name="privacy"
                required
                className="mr-2"
              />
              <label
                htmlFor="privacy"
                className="text-gray-600 dark:text-gray-300"
              >
                You agree to our{" "}
                <a href="#" className="text-blue-500 underline">
                  Privacy Policy
                </a>
                .
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white font-semibold py-2 rounded-md hover:bg-gray-800 dark:bg-gray-600 dark:hover:bg-gray-500"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>
        <div className="md:w-1/2 pl-8">
          <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
            Get in Touch
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-2">
            Connect with us We'd love to hear from you! If you have any
            questions or need further product advice, leave your details and
            we'll get back to you as soon as possible.
          </p>
          <p className="text-gray-600 dark:text-gray-400 mb-2">
            <strong>Phone:</strong> +1(424) 535 3523
          </p>
          <p className="text-gray-600 dark:text-gray-400 mb-2">
            <strong>Email:</strong> nguyenhai2@mail.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
