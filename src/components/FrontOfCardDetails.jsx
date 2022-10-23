import cardLogo from "../images/card-logo.svg";

const FrontOfCardDetails = (props) => {
  return (
    <div className="front-of-card-details">
      <img className="card-logo" src={cardLogo} alt="credit card logo" />
      <p className="sample-card-number card-details">{props.cardNumber}</p>
      <div className="card-bottom-row">
        <p className="sample-card-holder card-details">{props.cardHolder}</p>
        <p className="sample-expiration card-details">{props.cardExpiration}</p>
      </div>
    </div>
  );
};

export default FrontOfCardDetails;
