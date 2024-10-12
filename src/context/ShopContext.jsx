import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [products, setProducts] = useState([]);
  const [token, setToken] = useState("");
  const [cartItems, setCartItems] = useState({});
  const [loading, setLoading] = useState(true); // Thêm loading state
  const navigate = useNavigate();
  const currency = "$";

  useEffect(() => {
    if (!token && localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
    }

    const storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  const getProductsData = async () => {
    try {
      const response = await axios.get(backendUrl + "/api/Product");
      if (response.data.message === "Thành công!") {
        const productsData = response.data.content;
        setProducts(productsData);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false); // Đảm bảo tắt trạng thái loading
    }
  };

  useEffect(() => {
    getProductsData();
  }, []);

  const addToCart = async (itemId, size) => {
    let cartData = structuredClone(cartItems);
    if (!size) {
      toast.error("Select Product Size");
      return;
    }
    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }
    setCartItems(cartData);
    localStorage.setItem("cartItems", JSON.stringify(cartData));
  };

  const getCartCount = () => {
    let totalCount = 0;
    for (const size in cartItems) {
      for (const count in cartItems[size]) {
        try {
          if (cartItems[size][count] > 0) {
            totalCount += cartItems[size][count];
          }
        } catch (error) {}
      }
    }
    return totalCount;
  };

  const updateQuantity = async (itemId, size, quantity) => {
    let cartData = structuredClone(cartItems);
    cartData[itemId][size] = quantity;

    setCartItems(cartData);
    localStorage.setItem("cartItems", JSON.stringify(cartData));
  };

  const getCartAmount = () => {
    let totalAmount = 0;
    for (const items in cartItems) {
      let itemInfo = products.find((product) => product.id === Number(items));
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalAmount += itemInfo.price * cartItems[items][item];
          }
        } catch (error) {}
      }
    }
    return totalAmount;
  };

  const value = {
    products,
    currency,
    token,
    navigate,
    backendUrl,
    setToken,
    cartItems,
    addToCart,
    getCartCount,
    updateQuantity,
    getCartAmount,
    setCartItems,
    loading, // Thêm loading state vào context
  };

  return (
    <ShopContext.Provider value={value}>
      {loading ? <p>Loading...</p> : props.children}{" "}
      {/* Hiển thị khi đang tải */}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
