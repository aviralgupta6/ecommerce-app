import "./header.style.scss";
import { ReactComponent as Logo } from "../../assets/icon.svg";
import { Link } from "react-router-dom";

const Header = () => (
  <div className="header">
    <Link to="/" className="logo-container">
      <Logo className="logo"></Logo>
    </Link>
    <div className="options">
      <Link to="/shop" className="option">
        SHOP
      </Link>
      <Link to="/contact" className="option">
        CONTACT
      </Link>
      <Link to="/signin" className="option">
        LOGIN
      </Link>
    </div>
  </div>
);

export default Header;
