import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import React from "react";

type MobileDrawerProps = {
  isDrawerOpen: boolean;
  setIsDrawerOpen: any;
  children: React.ReactNode;
};
const CustomDrawer = ({
  isDrawerOpen,
  setIsDrawerOpen,
  children,
}: MobileDrawerProps) => {
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
      {children}
    </SwipeableDrawer>
  );
};

export default CustomDrawer;
