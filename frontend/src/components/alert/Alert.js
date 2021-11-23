import { Cancel } from "@material-ui/icons";
import React from "react";
import "./alert.css";

const Alert = () => {
  return (
    <div className="alert">
      <div class="alert-box">
        <Cancel className="alert-img" style={{ fontSize: "3rem" }} />
        <p class="alert-msg">Error message</p>
      </div>
    </div>
  );
};

export default Alert;
