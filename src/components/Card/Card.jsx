import React from "react";
import "./card.module.css";

const Card = ({ image, description, price }) => {
  return (
    <div className="card">
      <img src={image} alt="Card" className="card-image" />
      <div className="card-content">
        <p className="card-description">{description}</p>
        <p className="card-price">R$ {price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Card;