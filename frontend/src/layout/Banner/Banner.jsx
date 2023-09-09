import React from "react";
import './Banner.css'
const Banner = ({ imageLink,imageAlt }) => {
  return (
    <div className="banner">
      <img
        src={imageLink}
        alt={imageAlt}
        width="100%"
        height="100%"
      />
    </div>
  );
};

export default Banner;
