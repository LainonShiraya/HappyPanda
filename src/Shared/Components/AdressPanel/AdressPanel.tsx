import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import React, { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Typography from "@mui/material/Typography";

interface AdressPanelProps {
  darkMode?: boolean;
}
const AdressPanel = ({ darkMode }: AdressPanelProps) => {
  const adressFromLocalStorage = JSON.parse(
    localStorage.getItem("HappyPandaAdress")!
  );
  const [showAdress, setShowAdress] = useState<boolean>(false);
  return adressFromLocalStorage?.userAdress ? (
    <Alert
      severity="success"
      icon={false}
      variant={darkMode ? "outlined" : "standard"}
      sx={
        darkMode
          ? showAdress
            ? {
                border: "none",
                "& .MuiAlert-message": {
                  display: "flex",
                  flexDirection: "column",
                  wordBreak: "break-word",
                },
              }
            : {
                border: "none",
                "& .MuiAlert-message": {
                  display: "flex",
                  flexDirection: "row-reverse",
                  margin: "auto",
                },
              }
          : {
              border: "none",
              "& .MuiAlert-message": {
                display: "flex",
              },
            }
      }
    >
      <Button
        onClick={() => {
          setShowAdress(!showAdress);
        }}
      >
        <VisibilityIcon
          sx={
            darkMode
              ? {
                  color: "var(--font-color-light-300)",
                }
              : {
                  color: "var(--font-color-light-700)",
                }
          }
        />
      </Button>
      <Typography
        component="span"
        variant="body1"
        sx={
          darkMode
            ? {
                textAlign: "center",
                margin: "auto",
                display: "inline-block",
                verticalAlign: "middle",
                color: "var(--font-color-light-300)",
              }
            : {
                textAlign: "center",
                margin: "auto",
                display: "inline-block",
                verticalAlign: "middle",
              }
        }
      >
        {showAdress
          ? `${adressFromLocalStorage.userAdress.city}  ${adressFromLocalStorage.userAdress.street}  ${adressFromLocalStorage.userAdress.number}`
          : "Your Adress is hidden"}
      </Typography>
    </Alert>
  ) : (
    <Alert severity="warning">
      Full Adress is required to confirm the delivery distance and pricing
    </Alert>
  );
};

export default AdressPanel;
