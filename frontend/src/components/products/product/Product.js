import React from "react";
import "./product.css";
import cart1 from "../../../assets/card1.png";

const Product = () => {
  return (
    <div className="product-container">
      <div className="product-card">
        <div className="product-image">
          <span className="discount-tag">50% off</span>
          <img src={cart1} className="product-thumb" alt="" />
          <button className="card-btn">add to whislist</button>
        </div>
        <div className="product-info">
          <h2 className="product-brand">brand</h2>
          <p className="product-short-des">a short line about the cloth..</p>
          <span className="price">$20</span>
          <span className="actual-price">$40</span>
        </div>
      </div>
    </div>
  );
};

export default Product;
