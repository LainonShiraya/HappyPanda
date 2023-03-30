import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import VerifyAdressMenu from "../../../Shared/Components/VerifyAdressMenu/VerifyAdressMenu";
import { useNavigate } from "react-router-dom";
const FindRestaurantMenu = () => {
  const navigate = useNavigate();
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      <VerifyAdressMenu />
      <Container sx={{ textAlign: "center" }}>
        <Typography component="h5" variant="h5">
          Would you like to check our offer?
        </Typography>
        <Button
          variant="contained"
          size="large"
          sx={{
            width: { sm: "50%", xs: "100%" },
            marginTop: "1rem",
          }}
          onClick={() => {
            navigate("../menu");
          }}
        >
          Check Menu
        </Button>
      </Container>
    </Box>
  );
};

export default FindRestaurantMenu;
