import Container from "@mui/material/Container";
import AppBar from "@mui/material/AppBar";
import React, { useState } from "react";
import Toolbar from "@mui/material/Toolbar";
import Logo from "../../../assets/panda_icon.png";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import "./Navbar.scss";
import NavbarMobile from "./NavbarMobile/NavbarMobile";
import MenuIcon from "@mui/icons-material/Menu";
const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <NavbarMobile
        isDrawerOpen={isDrawerOpen}
        setIsDrawerOpen={setIsDrawerOpen}
      />
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: "var(--background-color-dark)",
          borderBottom: "1px solid var(--font-color-light-900)",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar
            disableGutters
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Button>
                <img src={Logo} alt="logo" className="navbar-icon" />
              </Button>
            </Box>
            <Button
              onClick={() => {
                setIsDrawerOpen(true);
              }}
              sx={{
                display: { xs: "flex", sm: "none" },
                margin: "0",
                color: "var(--font-color-light-300)",
              }}
            >
              <MenuIcon fontSize="large" />
            </Button>
            <Box sx={{ display: { xs: "none", sm: "flex" }, gap: "1rem" }}>
              <Button sx={{ color: "#fff", fontSize: "1.2rem" }} size="large">
                Menu
              </Button>
              <Button sx={{ color: "#fff", fontSize: "1.2rem" }}>
                Contact
              </Button>
              <Button sx={{ color: "#fff", fontSize: "1.2rem" }}>
                Promotions
              </Button>
              <Button sx={{ color: "#fff", fontSize: "1.2rem", gap: "0.5rem" }}>
                Cart{" "}
                <AddShoppingCartIcon
                  sx={{ color: "var(--font-color-light-500)" }}
                />
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Navbar;
