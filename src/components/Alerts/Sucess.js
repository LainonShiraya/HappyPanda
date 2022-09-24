import React from "react";
import "../../styles/components/Alert.scss";
import { useClickOutside } from "../../hooks/ClickOutsideToClose";
const Sucess = ({ isSuceed, setIsSuceed, text }) => {
  let menuRef = useClickOutside(() => {
    setIsSuceed(false);
  });

  return (
    <div className="alert" style={{ display: isSuceed ? "flex" : "none" }}>
      <div className="alert-display" ref={menuRef}>
        <div className="alert-display-title-sucess">
          <h1>Sucess</h1>
          <p>{text}</p>
        </div>
        <div className="alert-display-button">
          <button
            className="button-primary"
            onClick={() => {
              setIsSuceed(false);
            }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sucess;
