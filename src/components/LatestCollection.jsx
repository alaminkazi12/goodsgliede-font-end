import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    setLatestProducts(products.slice(0, 10));
  }, []);

  console.log(latestProducts);
  return (
    <div className="my-10 px-4">
      <div className=" text-center py-8 text-3xl">
        <Title text1={"LATEST"} text2={"COLLECTION"}></Title>
        <p className="w-2/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Refresh your wardrobe with our newest arrivals! Discover stylish
          clothing, footwear, and accessories designed for any occasion. Shop
          now and elevate your look with the season’s top picks!
        </p>
      </div>
      {/* rendering products */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 gap-y-6">
        {latestProducts.map((item, idx) => (
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

export default LatestCollection;
