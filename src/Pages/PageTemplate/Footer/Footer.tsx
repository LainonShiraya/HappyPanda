import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "2rem",
        paddingBlock: "4rem",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          margin: "auto",
          gap: "2rem",
        }}
      >
        <Button
          sx={{
            color: "var(--font-color-light-300)",
            margin: "0 !important",
          }}
        >
          About Us
        </Button>
        <Button
          sx={{
            color: "var(--font-color-light-300)",
            margin: "0 !important",
          }}
        >
          Restaurants
        </Button>
        <Button
          sx={{ color: "var(--font-color-light-300)", margin: "0 !important" }}
        >
          Privacy Policy
        </Button>
      </Box>
      <Typography component="h5" variant="h5">
        Follow us on
      </Typography>
      <Box
        sx={{
          display: "flex",
          gap: "1rem",
        }}
      >
        <Link to="../#FacebookLinkPage">
          <FacebookIcon fontSize="large" />
        </Link>
        <Link to="../#InstagramLinkPage">
          <InstagramIcon fontSize="large" />
        </Link>
      </Box>
      <Typography>
        <Link to="https://github.com/LainonShiraya" target="_blank">
          Done by @LainonShiraya
        </Link>
      </Typography>
      <Typography sx={{ padding: "0.5rem", textAlign: "center" }}>
        <Link to="../#freepik subpage">
          Special thanks to all freepik users can be found here
        </Link>
      </Typography>
    </Box>
  );
};

export default Footer;
