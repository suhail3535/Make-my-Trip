import React from "react";

export const OfferCard = ({
  img,
  hotelName,
  discountdesc,
  discountCategory,
  discountCond,
}) => {
  return (
    <div className="itemBody">
      <div className="itemChild">
        <div className="itemImg">
          <img src={img} height="134" width="134" alt="" />{" "}
        </div>
        <div className="itemText">
          <div className="hotel">{hotelName}</div>
          <p className="hotel1">{discountdesc}</p>
          <p className="hotel2">{discountCond}</p>
        </div>
      </div>
      <div className="itemDown">
        <span className="tc">T&C's Apply</span>
        <button> Book Now </button>
      </div>
    </div>
  );
};
