import { React, useRef, useEffect } from "react";
import "../../styles/components/Navbar.scss";
const Navbar = () => {
  // navbar scrolling fix ( navbar does not overlap with sections) START
  const navbarRef = useRef(null);
  useEffect(() => {
    console.log(navbarRef.current.offsetHeight);
    document.documentElement.style.setProperty(
      "--scroll-padding",
      navbarRef.current.offsetHeight + "px"
    );
  }, [navbarRef]);
  // navbar scrolling fix ( navbar does not overlap with sections) END
  return (
    <div ref={navbarRef} className="navbar">
      <div ref={navbarRef} className="navbar-container">
        <p className="navbar-container__logo">
          MagicShop - Magic Tricks And World's Finest Playing Cards
        </p>
        <ul className="navbar-container__list">
          <li className="link">support</li>
          <li className="link">login</li>
          <li>
            <a href="#cart">
              <i class="fa-solid fa-cart-shopping"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
