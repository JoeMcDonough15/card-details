import backOfCardImage from "../images/bg-card-back.png";

const BackOfCard = (props) => {
  return (
    <div className="back-of-card">
      <img
        className="back-of-card-img"
        src={backOfCardImage}
        alt="back of a credit card"
      />
      <p className="back-of-card-details card-details">
        {props.details.cardCvc}
      </p>
    </div>
  );
};

export default BackOfCard;
