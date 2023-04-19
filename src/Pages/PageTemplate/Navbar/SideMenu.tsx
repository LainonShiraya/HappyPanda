import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import React from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import AdressPanel from "../../../Shared/Components/AdressPanel/AdressPanel";
import { useNavigate } from "react-router-dom";
import CartBadge from "../../../Shared/Components/CartBadge/CartBadge";

const SideMenu = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        width: "80vw",
        margin: "auto",
        color: "var(--font-color-light-300)",
      }}
      role="presentation"
      textAlign="center"
    >
      <Typography
        component="h2"
        variant="h2"
        sx={{ fontFamily: "var(--font-family-bold)", fontWeight: "700" }}
      >
        Menu
      </Typography>
      <List>
        {["Menu", "Contact"].map((text, index) => (
          <ListItem key={text}>
            <ListItemButton
              onClick={() => {
                navigate(`../${text.toLowerCase()}`);
              }}
            >
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem key={"Cart"}>
          <ListItemButton>
            <ListItemText primary="Cart" />
            <ListItemIcon>
              <CartBadge>
                <AddShoppingCartIcon
                  sx={{ color: "var(--font-color-light-500)" }}
                />
              </CartBadge>
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
        <ListItem key={"adress"}>
          <AdressPanel darkMode />
        </ListItem>
      </List>
    </Box>
  );
};

export default SideMenu;
