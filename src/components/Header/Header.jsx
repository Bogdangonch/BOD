import iconAirbnb from "../../assets/headerImage/airbnb.png"
import "./Header.css"

const Header = () => {
  return (
      <header className="header">
        <div className="wrapper wrapperHeader">
        <img src={iconAirbnb} alt="icon" />
        </div>
        </header>
  );
};

export default Header;
