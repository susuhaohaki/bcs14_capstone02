import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {
  const [currentState, setCurrentState] = useState("Login");
  const { token, setToken, navigate, backendUrl } = useContext(ShopContext);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState(true); // true for male, false for female

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token, navigate]);

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      if (currentState === "Sign Up") {
        const response = await axios.post(backendUrl + "/api/Users/signup", {
          name,
          email,
          password,
          phone,
          gender,
        });
        console.log("🚀 ~ onSubmitHandler ~ response:", response);
        toast.success(response.data.message);
      } else {
        const response = await axios.post(backendUrl + "/api/Users/signin", {
          email,
          password,
        });
        toast.success(response.data.message);
        setToken(response.data.content.accessToken);
        localStorage.setItem("token", response.data.content.accessToken);
      }
    } catch (error) {
      const errorMessage = error.response?.data?.message || error.message;
      toast.error(errorMessage);
    }
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800 dark:text-white"
    >
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="prata-regular text-3xl">{currentState}</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800 dark:bg-gray-400" />
      </div>
      <input
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        className="w-full px-3 py-2 border border-gray-800 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
        placeholder="Email"
        required
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        className="w-full px-3 py-2 border border-gray-800 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
        placeholder="Password"
        required
      />
      {currentState === "Login" ? null : (
        <>
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            className="w-full px-3 py-2 border border-gray-800 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
            placeholder="Name"
            required
          />
          <input
            onChange={(e) => setPhone(e.target.value)}
            type="text"
            className="w-full px-3 py-2 border border-gray-800 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
            placeholder="Phone"
            required
          />
          <div className="flex my-2">
            <label className="mr-4">
              <input
                type="radio"
                value="true"
                onChange={() => setGender(true)}
                className="mr-1"
                checked={gender === true}
              />
              Male
            </label>
            <label>
              <input
                type="radio"
                value="false"
                name="gender"
                onChange={() => setGender(false)}
                className="mr-1"
                checked={gender === false}
              />
              Female
            </label>
          </div>
        </>
      )}

      <div className="w-full flex justify-between text-sm mt-[-8px]">
        <p>Forgot your password?</p>
        {currentState === "Login" ? (
          <p
            onClick={() => setCurrentState("Sign Up")}
            className="cursor-pointer"
          >
            Create Account
          </p>
        ) : (
          <p
            onClick={() => setCurrentState("Login")}
            className="cursor-pointer"
          >
            Login Here
          </p>
        )}
      </div>
      <button className="bg-black text-white font-light px-8 py-2 mt-4 w-full active:bg-gray-500 dark:bg-gray-600">
        {currentState === "Login" ? "Sign In" : "Sign Up"}
      </button>
    </form>
  );
};

export default Login;
