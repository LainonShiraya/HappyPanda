import { React } from "react";
import "../../styles/components/Navbar.scss";
import Logo from "../../assets/panda_iconv2.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <p className="navbar-container__logo">
          <Link to="../">
            <img src={Logo} alt="logo" />
          </Link>
        </p>
        <ul className="navbar-container__list">
		<Link to="../menu" className="link">Menu </Link>
		<Link to="../contact" className="link"> Contact</Link>
		<Link to="../cart" className="link"> 
              <i class="fa-solid fa-basket-shopping"></i>
			</Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
