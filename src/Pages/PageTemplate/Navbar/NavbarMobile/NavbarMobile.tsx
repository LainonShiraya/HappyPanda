import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import React from "react";
import SideMenu from "./SideMenu";

type MobileDrawerProps = {
  isDrawerOpen: boolean;
  setIsDrawerOpen: any;
};
const NavbarMobile = ({ isDrawerOpen, setIsDrawerOpen }: MobileDrawerProps) => {
  return (
    <SwipeableDrawer
      anchor="left"
      open={isDrawerOpen}
      onOpen={() => setIsDrawerOpen(true)}
      onClose={() => setIsDrawerOpen(false)}
      PaperProps={{
        sx: {
          backgroundColor: "var(--background-color-dark)",
        },
      }}
    >
      <SideMenu />
    </SwipeableDrawer>
  );
};

export default NavbarMobile;
