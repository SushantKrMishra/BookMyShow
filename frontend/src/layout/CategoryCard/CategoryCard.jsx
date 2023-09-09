import React from "react";
import "./CategoryCard.css";
const CategoryCard = ({ imageLink, imageAlt }) => {
  return (
    <div class="categoryCard">
      <img src={imageLink} alt={imageAlt} />
    </div>
  );
};

export default CategoryCard;
