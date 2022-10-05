import React from "react";
import virtualize from "../../assets/virtualize.png";

import "./logo.css";

const Logo = () => {
  return (
    <>
      <div className="logo">
        <img src={virtualize} alt="virtualize" />
      </div>
    </>
  );
};

export default Logo;
