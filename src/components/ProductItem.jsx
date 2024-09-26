import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

const ProductItem = ({
  product_id,
  product_image,
  product_title,
  product_price,
}) => {
  const { currency } = useContext(ShopContext);
  return (
    <Link
      className="text-gray-700 cursor-pointer"
      to={`/product/${product_id}`}
    >
      <div className=" overflow-hidden">
        <img
          className=" hover:scale-110 transition ease-in-out"
          src={product_image}
          alt=""
        />
      </div>
      <p className="pt-3 pb-1 text-sm">{product_title}</p>
      <p className="text-sm font-medium">
        {currency}
        {product_price}
      </p>
    </Link>
  );
};

export default ProductItem;
