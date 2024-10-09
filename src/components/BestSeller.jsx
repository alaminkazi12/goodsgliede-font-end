import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    const bestProduct = products.filter((item) => item.best_seller);
    setBestSeller(bestProduct.slice(0, 5));
  }, []);
  return (
    <div className="my-10">
      <div className="text-center text-3xl py-8">
        <Title text1={"BEST"} text2={"SELLERS"}></Title>
        <p className="w-2/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Shop our top picks! These best-selling items have been tried, tested,
          and loved by our customers. Find the perfect piece to add to your
          collection today.
        </p>
      </div>

      <div className="grid gird-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-4 gap-y-6">
        {bestSeller.map((item, idx) => (
          <ProductItem
            key={idx}
            product_id={item.product_id}
            product_image={item.product_image}
            product_price={item.product_price}
            product_title={item.product_title}
          ></ProductItem>
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
