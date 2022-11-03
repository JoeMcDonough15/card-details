import FrontOfCardDetails from "./FrontOfCardDetails";
import bgCardFront from "../images/bg-card-front.png";

const FrontOfCard = (props) => {
  return (
    <div className="front-of-card">
      <img
        className="front-of-card-img"
        src={bgCardFront}
        alt="The front of a credit card"
      />
      <FrontOfCardDetails
        cardNumber={props.cardNumber}
        cardHolder={props.cardHolder}
        cardExpiration={props.cardExpiration}
      />
    </div>
  );
};

export default FrontOfCard;
