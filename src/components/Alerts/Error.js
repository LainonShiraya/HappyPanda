import React from "react";
import "../../styles/components/Alert.scss";
import { useClickOutside } from "../../hooks/ClickOutsideToClose";
const Error = ({ isError, setIsError, text }) => {
  let menuRef = useClickOutside(() => {
    setIsError(false);
  });

  return (
    <div className="alert" style={{ display: isError ? "flex" : "none" }}>
      <div className="alert-display" ref={menuRef}>
        <div className="alert-display-title-error">
          <h1>Sucess</h1>
          <p>{text}</p>
        </div>
        <div className="alert-display-button">
          <button
            className="button-primary"
            onClick={() => {
              setIsError(false);
            }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Error;
