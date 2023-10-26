import bgCardFront from "../images/bg-card-front.png";
import cardLogo from "../images/card-logo.svg";

const FrontOfCard = (props) => {
  return (
    <div className="front-of-card">
      <img
        className="front-of-card-img"
        src={bgCardFront}
        alt="The front of a credit card"
      />
      <div className="front-of-card-details">
        <img className="card-logo" src={cardLogo} alt="credit card logo" />
        <p className="sample-card-number card-details">
          {props.details.cardNumber}
        </p>
        <div className="card-bottom-row">
          <p className="sample-card-holder card-details">
            {props.details.cardHolder}
          </p>
          <p className="sample-expiration card-details">
            {props.details.expirationMonth}/{props.details.expirationYear}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FrontOfCard;
