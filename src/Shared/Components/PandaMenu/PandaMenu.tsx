import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import React from "react";
import Logo from "../../../assets/panda_iconv2.png";

const PandaMenu = (props: any) => {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        margin: "auto",
        maxWidth: props.width,
        padding: "1rem",
        paddingTop: "2rem",
        borderRadius: "0.375rem",
        gap: "2rem",
      }}
    >
      <Box
        sx={{
          position: "relative",
          margin: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "2rem",
        }}
      >
        <img
          src={Logo}
          alt="logo"
          style={{ position: "absolute", marginTop: "-6rem" }}
        />
      </Box>

      <Box sx={{ textAlign: "center" }}>
        <Typography
          component="h2"
          variant="h2"
          sx={{ color: "var(--font-color-light-700)" }}
        >
          {" "}
          {props.title}
        </Typography>
        <Typography component="h5" variant="h5" sx={{ color: "black" }}>
          {" "}
          {props.subtitle}
        </Typography>
      </Box>
      {props.children}
    </Box>
  );
};

export default PandaMenu;
