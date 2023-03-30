import React from "react";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

const LoadingPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        color: "black",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        minHeight: "600px",
      }}
    >
      <CircularProgress color="secondary" size="8rem" sx={{ margin: "auto" }} />
    </Box>
  );
};

export default LoadingPage;
