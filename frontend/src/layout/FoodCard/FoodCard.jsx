import React, { useState } from "react";
import "./FoodCard.css";
const FoodCard = ({ item, addToBill }) => {
  const [count, setCount] = useState(0);

  const handleAddToBill = () => {
    addToBill(item, count + 1);
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      addToBill(item, count - 1);
      setCount(count - 1);
    }
  };
  return (
    <div className="food-item-container">
      <div className="food-item">
        <img src={item.imageLink} alt={item.name} />
        <span>
          <h3>{item.name}</h3>
          <p>{item.description}</p>

          <div className="itemPrice">
            <span> ₹ {item.price}</span>
            {item.originalPrice > 0 && (
              <span
                style={{
                  textDecoration: "line-through",
                  color: "#dc3558ff",
                }}
              >
                ₹ {item.originalPrice}
              </span>
            )}
          </div>
          {count > 0 ? (
            <div className="countUpdater">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#dc3558ff"
                className="w-6 h-6 countUpdater-icons"
                onClick={handleAddToBill}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              {count}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#dc3558ff"
                className="w-6 h-6 countUpdater-icons"
                onClick={handleDecrement}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          ) : (
            <div className="addToBill" onClick={handleAddToBill}>
              Add
            </div>
          )}
        </span>
      </div>
    </div>
  );
};

export default FoodCard;
