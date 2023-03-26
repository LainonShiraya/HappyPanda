import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import React from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const SideMenu = () => {
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
        {["Menu", "Contact", "Promotions"].map((text, index) => (
          <ListItem key={text}>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem key={"Cart"}>
          <ListItemButton>
            <ListItemText primary="Cart" />
            <ListItemIcon>
              <AddShoppingCartIcon
                sx={{ color: "var(--font-color-light-500)" }}
              />
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
};

export default SideMenu;
