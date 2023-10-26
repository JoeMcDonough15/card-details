import React from "react";
import FrontOfCard from "./FrontOfCard";
import BackOfCard from "./BackOfCard";

const CardImagesContainer = (props) => {
  return (
    <div className="card-images-container">
      <BackOfCard details={props.cardDetails} />
      <FrontOfCard details={props.cardDetails} />
    </div>
  );
};

export default CardImagesContainer;
