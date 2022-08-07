import { React } from "react";
import "../../styles/components/Navbar.scss";
import Logo from "../../assets/panda_icon.png";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <p className="navbar-container__logo">
          <img src={Logo} alt="logo" />
        </p>
        <ul className="navbar-container__list">
          <li className="link">Menu</li>
          <li className="link">Promotions</li>
          <li className="link">Favorites</li>
          <li className="link">Login</li>
          <li>
            <a href="#cart">
              <i class="fa-solid fa-basket-shopping"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
