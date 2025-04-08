import React from "react";

const ProductCard = ({ name, price }) => {
  return (
    <div className="product-card">
      <h2>{name}</h2>
      <p>Price: ${price}</p>
    </div>
  );
};

export default ProductCard;
