import axios from "axios";
import React, { useEffect, useState } from "react";
import Product from "./product/Product";
import "./products.css";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const { data } = await axios.get("/products");
        setProducts(data.products);
      } catch (error) {
        console.log(error.message);
      }
    };
    getProduct();
  }, []);

  console.log(products);

  return (
    <div className="products">
      {products &&
        products.map((product, i) => <Product key={i} product={product} />)}
    </div>
  );
};

export default Products;
