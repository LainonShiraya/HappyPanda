import React, { useState } from "react";
import "../../../styles/pages/RestaurantsPage/ContactFranchise.scss";
import { useClickOutside } from "../../../hooks/ClickOutsideToClose";
import Sucess from "../../../components/Alerts/Sucess";
const ContactFranchise = ({
  makePandaHappyClicked,
  setmakePandaHappyClicked,
}) => {
  let menuRef = useClickOutside(() => {
    setmakePandaHappyClicked(false);
  });

  const [sucessfullySent, setSucessfulySent] = useState(false);
  return (
    <>
      <Sucess
        isSuceed={sucessfullySent}
        setIsSuceed={setSucessfulySent}
        text={
          "Mail has been sent sucessfuly, We try our best to respond within 72 hours - weekends not included "
        }
      />
      <div
        className="contact-franchise"
        style={{ display: makePandaHappyClicked ? "flex" : "none" }}
      >
        <form
          className="contact-franchise-display"
          ref={menuRef}
          method="POST"
          onSubmit={e => {
            e.preventDefault();
            setmakePandaHappyClicked(false);
            setSucessfulySent(true);
          }}
          // to be added sucess alert
          // onsubmit="notifySucessful();return false;"
        >
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
              pattern="[a-zA-Z ]+"
              required
            />
            <input
              type="tel"
              className="input-primary"
              placeholder="Phone Number"
              name="phone"
              pattern="[0-9]{9}"
            />
            <input
              type="email"
              className="input-primary"
              placeholder="Adress Email"
              name="email"
              pattern="[A-Za-z0-9._+-]+@[A-Za-z0-9 -]+\.[a-z]+"
              required
            />
            <input
              type="text"
              className="input-primary"
              placeholder="Prefered city"
              name="prefCity"
              pattern="[a-zA-Z]+"
              required
            />
          </div>
          <div className="contact-franchise-display-agreement">
            <input type="checkbox" className="input-primary" required />
            <span>
              I'm aware it is just a website project and I should not share my
              real data by any reasons.
            </span>
          </div>
          <div className="contact-franchise-display-button">
            <button className="button-primary">Send</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ContactFranchise;
