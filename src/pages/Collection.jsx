import React, { useContext, useEffect, useState, useMemo } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";

const Collection = () => {
  const { products } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [sortType, setSortType] = useState("relevant");
  const [search, setSearch] = useState("");

  const toggleCategory = (e) => {
    if (selectedCategory.includes(e.target.value)) {
      setSelectedCategory((prev) =>
        prev.filter((item) => item !== e.target.value)
      );
    } else {
      setSelectedCategory((prev) => [...prev, e.target.value]);
    }
  };

  const filterAndSortProducts = useMemo(() => {
    let productsCopy = products.slice();

    // Apply search filter
    if (search) {
      productsCopy = productsCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Apply category filter
    if (selectedCategory.length > 0) {
      productsCopy = productsCopy.filter((product) => {
        try {
          const productCategories = JSON.parse(product.categories || "[]");
          return productCategories.some((categoryItem) =>
            selectedCategory.includes(categoryItem.category)
          );
        } catch (error) {
          console.error("Error parsing categories:", error);
          return false; // Skip this product if parsing fails
        }
      });
    }

    // Apply sorting
    switch (sortType) {
      case "low-high":
        return productsCopy.sort((a, b) => a.price - b.price);
      case "high-low":
        return productsCopy.sort((a, b) => b.price - a.price);
      default:
        return productsCopy; // Keep it unchanged for "relevant"
    }
  }, [products, search, selectedCategory, sortType]);

  useEffect(() => {
    setFilterProducts(filterAndSortProducts);
  }, [filterAndSortProducts]);

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t dark:border-gray-700">
      {/* filter option */}
      <div className="min-w-60">
        <p
          className="my-2 text-xl flex items-center cursor-pointer gap-2 dark:text-gray-200"
          onClick={() => setShowFilter(!showFilter)}
        >
          FILTERS
          <img
            className={`h-3 sm:hidden ${showFilter ? "rotate-90" : ""}`}
            src="./src/assets/dropdown_icon.png"
            alt="Toggle Filters"
          />
        </p>
        {/* category Filter */}
        <div
          className={`border border-gray-300 dark:border-gray-600 pl-5 py-3 mt-6 ${
            showFilter ? `` : "hidden"
          } sm:block `}
        >
          <p className="mb-3 text-sm font-medium dark:text-gray-200">
            CATEGORIES
          </p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700 dark:text-gray-200">
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"VANS_CONVERSE"}
                onChange={toggleCategory}
              />{" "}
              VANS_CONVERSE
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"NIKE"}
                onChange={toggleCategory}
              />{" "}
              NIKE
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"ADIDAS"}
                onChange={toggleCategory}
              />{" "}
              ADIDAS
            </p>
          </div>
        </div>
        {/* SubCategory Filter */}
        <div
          className={`border border-gray-300 pl-5 py-3 my-5 dark:border-gray-600 ${
            showFilter ? `` : "hidden"
          } sm:block `}
        >
          <p className="mb-3 text-sm font-medium dark:text-gray-200">Sort by</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700 dark:text-gray-200">
            <label>
              <input
                type="radio"
                value="relevant"
                checked={sortType === "relevant"}
                onChange={(e) => setSortType(e.target.value)}
                className="mr-2"
              />
              Sort by: Relevant
            </label>
            <label>
              <input
                type="radio"
                value="low-high"
                checked={sortType === "low-high"}
                onChange={(e) => setSortType(e.target.value)}
                className="mr-2"
              />
              Sort by: Low to High
            </label>
            <label>
              <input
                type="radio"
                value="high-low"
                checked={sortType === "high-low"}
                onChange={(e) => setSortType(e.target.value)}
                className="mr-2"
              />
              Sort by: High to Low
            </label>
          </div>
        </div>
      </div>
      {/* RIGHT SIDE */}
      <div className="flex-1">
        <div className="flex-col lg:flex-row flex justify-between text-base sm:text-2xl mb-4">
          <Title text1={"ALL"} text2={"COLLECTION"} />
          {/* PRODUCT SORT */}
          <div className="flex items-center border border-gray-300 p-2 dark:border-gray-600">
            <input
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              className="border-none focus:outline-none bg-transparent dark:text-gray-200 w-full"
              placeholder="Tìm kiếm..." // Thêm placeholder nếu cần
            />
            <img
              src="./src/assets/search_icon.png"
              alt="Search"
              className="w-5"
            />
          </div>
        </div>
        {/* Map Product */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {filterProducts.map((item, index) => (
            <ProductItem
              key={index}
              id={item.id}
              name={item.name}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
