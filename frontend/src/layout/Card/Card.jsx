import React, { useState, useEffect } from "react";
import "./Card.css";
import { useNavigate } from "react-router-dom";

const Card = ({ imageLink, imageAlt, movieName = " ", category = " " }) => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  const handleCardClick = () => {
    navigate(`/movie/${movieName}/:id`);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const scrollListener = () => {
      const cardElement = document.querySelector(".mainCard");
      if (cardElement) {
        const cardPosition = cardElement.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (cardPosition < windowHeight) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", scrollListener);
    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  return (
    <div
      className={`mainCard ${isVisible ? "fade-in visible" : "fade-in"}`}
      onClick={handleCardClick}
    >
      <div className="card">
        <img src={imageLink} alt={imageAlt} width="100%" height="100%" />
      </div>
      <div className="cardDescription">
        <span>{movieName}</span>
        <span>{category}</span>
      </div>
    </div>
  );
};

export default Card;
