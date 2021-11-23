import React from "react";
import "./home.css";
import NavbarUpper from "../../components/navbar/NavbarUpper";
import lightLogo from "../../assets/light-logo.png";
import womenCollection from "../../assets/women-collection.png";
import menCollection from "../../assets/men-collection.png";
import accessoriesCollection from "../../assets/accessories-collection.png";
import Products from "../../components/products/Products";
import { Link } from "react-router-dom";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <div>
      <NavbarUpper />
      <header className="hero-section">
        <div className="content">
          <img src={lightLogo} className="logo" alt="" />
          <p className="sub-heading">best fashion collection of all time</p>
        </div>
      </header>
      <section className="product">
        <h2 className="product-category">best selling</h2>
      </section>
      <Products />
      {/* collection */}
      <section className="collection-container">
        <Link to="/collection/women" className="collection">
          <img src={womenCollection} alt="" />
          <p className="collection-title">
            women <span>apparels</span>
          </p>
        </Link>
        <Link to="/collection/men" className="collection">
          <img src={menCollection} alt="" />
          <p className="collection-title">
            men <span>apparels</span>
          </p>
        </Link>
        <Link to="/collection/accessories" className="collection">
          <img src={accessoriesCollection} alt="" />
          <p className="collection-title">accessories</p>
        </Link>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
