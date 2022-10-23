import bgMainMobile from "../images/bg-main-mobile.png";
import bgMainDesktop from "../images/bg-main-desktop.png";
import CardImagesContainer from "./CardImagesContainer";

const Header = (props) => {
  return (
    <header className="header">
      <img
        className="background-header-img mobile-header-img"
        src={bgMainMobile}
        alt="header background of a purple gradient"
      />
      <img
        className="background-header-img desktop-header-img"
        src={bgMainDesktop}
        alt="header background of a purple gradient"
      />
      {props.formIsComplete ? (
        <CardImagesContainer
          cardCvc="123"
          cardHolder="Felicia Leire"
          cardNumber="9591 6489 6389 1011"
          cardExpiration="09/26"
        />
      ) : (
        <CardImagesContainer
          cardCvc="000"
          cardHolder="Jane Appleseed"
          cardNumber="0000 0000 0000 0000"
          cardExpiration="00/00"
        />
      )}
    </header>
  );
};

export default Header;
