import React, { useContext, useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import Title from "./Title";
import { ShopContext } from "../context/ShopContext";

const RelatedProducts = ({ productRelatedId }) => {
  const { products } = useContext(ShopContext);
  const [productsRelated, setProductsRelated] = useState([]);
  useEffect(() => {
    const filteredProducts = products.filter((product) =>
      productRelatedId.includes(product.id)
    );
    setProductsRelated(filteredProducts);
  }, [productRelatedId]);
  useEffect(() => {}, [productsRelated]);
  return (
    <div className="my-24">
      <div className="text-center text-3xl py-2">
        <Title text1={"RELATED"} text2={"PRODUCTS"} />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 gap-y-6">
        {productsRelated.map((item, index) => (
          <ProductItem
            key={index}
            name={item.name}
            id={item.id}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
