import React from "react";
import FrontOfCard from "./FrontOfCard";
import BackOfCard from "./BackOfCard";

const CardImagesContainer = (props) => {
  return (
    <div className="card-images-container">
      <BackOfCard cardCvc={props.cardCvc} />
      <FrontOfCard
        cardHolder={props.cardHolder}
        cardNumber={props.cardNumber}
        cardExpiration={props.cardExpiration}
      />
    </div>
  );
};

export default CardImagesContainer;
