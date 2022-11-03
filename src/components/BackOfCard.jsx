import BackOfCardDetails from "./BackOfCardDetails";
import backOfCardImage from "../images/bg-card-back.png";

const BackOfCard = (props) => {
  return (
    <div className="back-of-card">
      <img
        className="back-of-card-img"
        src={backOfCardImage}
        alt="back of a credit card"
      />
      <BackOfCardDetails cardCvc={props.cardCvc} />
    </div>
  );
};

export default BackOfCard;
