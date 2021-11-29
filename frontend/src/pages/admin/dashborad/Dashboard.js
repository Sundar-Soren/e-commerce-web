import React from "react";
import "./dashboard.css";
import { Link } from "react-router-dom";
import logo from "../../../assets/dark-logo.png";
import AdminNavbar from "../../../components/navbar/AdminNavbar";

const Dashboard = () => {
  return (
    <div className="admin-dashboard">
      <AdminNavbar />
    </div>
  );
};

export default Dashboard;
