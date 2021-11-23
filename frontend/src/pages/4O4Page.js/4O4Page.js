import React from "react";
import "./page4O4.css";
import { Link } from "react-router-dom";
import image4O4 from "../../assets/error.png";
import NavbarUpper from "../../components/navbar/NavbarUpper";

const Page4O4 = () => {
  return (
    <div>
      <NavbarUpper />
      <img src={image4O4} className="four-0-four-image" alt="" />
      <p className="four-0-four-msg">
        look like you are lost. Head to beack to our
        <Link to="/"> homepage</Link>
      </p>
    </div>
  );
};

export default Page4O4;
