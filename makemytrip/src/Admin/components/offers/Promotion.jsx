import React from "react";
import { lockData } from "./offerData";
import PromotionCard from "./PromotionCard";

const Promotion = () => {
  return (
    <div className="flex promotion" style={{display:"flex",}}>
      {lockData?.map((el) => (
        <PromotionCard key={el.id} {...el} />
      ))}
    </div>
  );
};

export default Promotion;
