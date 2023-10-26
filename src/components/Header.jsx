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
      <CardImagesContainer {...props} />
    </header>
  );
};

export default Header;
