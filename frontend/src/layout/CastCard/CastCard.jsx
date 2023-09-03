import React from "react";
import "./CastCard.css";
const CastCard = ({imageLink,imageAlt=" ",actorName,actorRole=""}) => {
  return (
    <div className="castCard">
      <img
        src={imageLink}
        alt={imageAlt}
      />
      <span>{actorName}</span>
      <span>{actorRole}</span>
    </div>
  );
};

export default CastCard;
