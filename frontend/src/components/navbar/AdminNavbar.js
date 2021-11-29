import React from "react";
import "./adminNavbar.css";
import { Link } from "react-router-dom";
// import logo from "../../assets/dark-logo.png";
import { LineStyle, Add, Widgets } from "@material-ui/icons";

const AdminNavbar = () => {
  return (
    <div className="sideBar">
      <div className="wrapper">
        <div className="menu">
          <h2>Dashboard</h2>
          <ul className="lists">
            <Link to="/" className="link">
              <li className="listItem ">
                <LineStyle className="icon" />
                Home
              </li>
            </Link>
            <Link to="/admin/product/create" className="link">
              <li className="listItem">
                <Add className="icon" />
                Add Product
              </li>
            </Link>
            <Link to="/admin/products" className="link">
              <li className="listItem ">
                <Widgets className="icon" />
                Get Product
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminNavbar;
