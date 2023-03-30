import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React from "react";
import promotions from "../../assets/menu-icons/promotions.png";
import dumplings from "../../assets/menu-icons/dumplings.png";
import noodles from "../../assets/menu-icons/noodles.png";
import ramen from "../../assets/menu-icons/ramen.png";
import shashlik from "../../assets/menu-icons/shashlik.png";
import springRolls from "../../assets/menu-icons/spring-rolls.png";
const MenuSelectionBar = () => {
  const buttons = [
    { url: promotions, text: "Promotions" },
    { url: dumplings, text: "Dumplings" },
    { url: noodles, text: "Noodles" },
    { url: ramen, text: "Ramen" },
    { url: shashlik, text: "Appetizers" },
    { url: springRolls, text: "Sushi" },
  ];
  return (
    <Grid
      container
      spacing={1}
      sx={{
        width: { xs: "100%", lg: "80%" },
        justifyContent: "space-evenly",
        borderRadius: "0.375rem",
        backgroundColor: "white",
        display: { md: "flex", xs: "none" },
      }}
    >
      {buttons.map((button, key) => (
        <Grid item xs={2} key={key}>
          <Button
            sx={{ display: "flex", flexDirection: "column" }}
            key={key}
            onClick={() => {
              if (!!document?.getElementById(button.text.toLowerCase())) {
                document
                  ?.getElementById(button.text.toLowerCase())!
                  .scrollIntoView();
              }
            }}
          >
            <img src={button.url} alt="menu-button" width="80px" />
            <Typography sx={{ color: "black" }} variant="subtitle1" key={key}>
              {" "}
              {button.text}
            </Typography>
          </Button>
        </Grid>
      ))}
    </Grid>
  );
};

export default MenuSelectionBar;
