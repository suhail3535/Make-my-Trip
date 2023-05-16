import React from "react";
import "./OfferSlider.css";

const PromotionCard = ({ image, text, about }) => {
  return (
    <div className="promotionBody">
        <div className="promotionImg">
          <img src={image} height="134" width="134" alt="" />{" "}
        </div>
        <div className="promotionText">
          <div className="promotionHotel">{text}</div>
          <p className="promotionHotel1">{about}</p>
        </div>{" "}
    </div>
  );
};

export default PromotionCard;
