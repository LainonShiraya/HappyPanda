import React, { useEffect, useRef } from "react";
import "../../../styles/pages/RestaurantsPage/ContactFranchise.scss";
const ContactFranchise = ({
  makePandaHappyClicked,
  setmakePandaHappyClicked,
}) => {
  // close menu if clicked outside
  let menuRef = useRef();
  useEffect(() => {
    let handler = event => {
      if (!menuRef.current.contains(event.target)) {
        setmakePandaHappyClicked(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });
  // close menu if clicked outside

  return (
    <div
      className="contact-franchise"
      style={{ display: makePandaHappyClicked ? "flex" : "none" }}
    >
      <div className="contact-franchise-display" ref={menuRef}>
        <div className="contact-franchise-display-title">
          <h1>Make Panda Happy</h1>
          <p>Fill the form, we will contact you </p>
        </div>
        <div className="contact-franchise-display-inputs">
          <input
            type="text"
            className="input-primary"
            placeholder="Full name"
            name="fullname"
          />
          <input
            type="text"
            className="input-primary"
            placeholder="Phone Number"
            name="phone"
          />
          <input
            type="text"
            className="input-primary"
            placeholder="Adress Email"
            name="email"
          />
          <input
            type="text"
            className="input-primary"
            placeholder="Prefered city"
            name="prefCity"
          />
        </div>
        <div className="contact-franchise-display-agreement">
          <input type="checkbox" className="input-primary" />
          <span>
            I'm aware it is just a website project and I should not share my
            real data by any reasons.
          </span>
        </div>
        <div className="contact-franchise-display-button">
          <button className="button-primary">Send</button>
        </div>
      </div>
    </div>
  );
};

export default ContactFranchise;
