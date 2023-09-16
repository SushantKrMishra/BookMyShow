import React, { useState, useEffect } from "react";
import "./Card.css";
import { useNavigate } from "react-router-dom";

const Card = ({ movieData }) => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  const handleCardClick = () => {
    navigate(`/movie/${movieData.name}`, { state: { movieData } });
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
    <div className="cardContainer-main">
      <div
        className={`mainCard ${isVisible ? "fade-in visible" : "fade-in"}`}
        onClick={handleCardClick}
      >
        <div className="card">
          <img src={movieData?.image} alt={movieData?.name} />
        </div>
        <div className="cardDescription">
          <span>{movieData?.name}</span>
          <span>{movieData?.category}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
