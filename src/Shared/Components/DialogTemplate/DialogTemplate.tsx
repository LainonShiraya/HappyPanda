import { Button, DialogContent, Typography, useTheme } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import useMediaQuery from "@mui/material/useMediaQuery";
import React from "react";
import CancelIcon from "@mui/icons-material/Cancel";
const DialogTemplate = ({ open, setOpen, children, title }: any) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Dialog
      fullScreen={fullScreen}
      open={open}
      onClose={handleClose}
      aria-labelledby="responsive-dialog-title"
      fullWidth
      maxWidth="md"
    >
      <Button
        onClick={handleClose}
        sx={{ marginRight: "0", marginTop: "0.5rem" }}
        size="small"
      >
        <CancelIcon
          fontSize="large"
          sx={{ color: "var(--font-color-light-700)" }}
        />
      </Button>
      <Typography
        component="h4"
        variant="h4"
        sx={{
          color: "var(--font-color-dark-700)",
          fontWeight: "900",
          fontFamily: "var(--font-family-bold)",
          margin: "0.5rem 2rem",
        }}
      >
        {title}
      </Typography>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
};

export default DialogTemplate;
