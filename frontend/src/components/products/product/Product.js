import React from "react";
import "./product.css";
import cart1 from "../../../assets/card1.png";

const Product = ({ product }) => {
  return (
    <div className="product-container">
      <div className="product-card">
        <div className="product-image">
          <span className="discount-tag">50% off</span>
          <img src={product.image} className="product-thumb" alt="" />
          <button className="card-btn">add to whislist</button>
        </div>
        <div className="product-info">
          <h2 className="product-brand">{product.name}</h2>
          <p className="product-short-des">{product.description}</p>
          <span className="price">{product.price}</span>
        </div>
      </div>
    </div>
  );
};

export default Product;
