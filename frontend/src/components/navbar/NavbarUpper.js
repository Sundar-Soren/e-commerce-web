import React from "react";
import "./navbarUpper.css";
import logo from "../../assets/dark-logo.png";
import {
  AccountCircleRounded,
  AddShoppingCartOutlined,
  Dashboard,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

const NavbarUpper = () => {
  return (
    <>
      <div className="navbar">
        <div className="nav">
          <img src={logo} className="brand-logo" alt="" />
          <div className="nav-items">
            <div className="search">
              <input
                type="text"
                className="search-box"
                placeholder="search brand, product"
              />
              <button className="search-btn">search</button>
            </div>
            <Link to="/signup" title="signup">
              <AccountCircleRounded />
            </Link>
            <Link to="/cart" title="cart">
              <AddShoppingCartOutlined />
            </Link>
            <Link to="/admin/dashboard" title="admin dashboard">
              <Dashboard />
            </Link>
          </div>
        </div>
        <ul className="links-container">
          <li className="link-item">
            <Link to="/" className="link">
              home
            </Link>
          </li>
          <li className="link-item">
            <Link to="/products/women" className="link">
              women
            </Link>
          </li>
          <li className="link-item">
            <Link to="/products/men" className="link">
              men
            </Link>
          </li>
          <li className="link-item">
            <Link to="/products/kids" className="link">
              kids
            </Link>
          </li>
          <li className="link-item">
            <Link to="/products/accessories" className="link">
              accessories
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavbarUpper;
