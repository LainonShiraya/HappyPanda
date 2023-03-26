import React from "react";
import PandaMenu from "../../../Shared/Components/PandaMenu/PandaMenu";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

const FindRestaurantMenu = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      <PandaMenu
        width={"md"}
        title="Verify your adress"
        subtitle="and we will select restaurant for you"
      >
        <Grid
          container
          spacing={2}
          sx={{
            flexDirection: { sm: "row", xs: "column" },
            justifyContent: "center",
          }}
        >
          <Grid item xs={12} sm={4}>
            <TextField
              id="filled-basic"
              label="City"
              variant="filled"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              id="filled-basic"
              label="Street"
              variant="filled"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              id="filled-basic"
              label="Number"
              variant="filled"
              fullWidth
            />
          </Grid>
        </Grid>
        <Alert severity="warning">
          Adress is required to confirm the delivery distance and pricing
        </Alert>
        <Button
          variant="contained"
          size="large"
          sx={{
            width: { sm: "50%", xs: "100%" },
          }}
        >
          Find Location
        </Button>
      </PandaMenu>
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
        >
          Check Menu
        </Button>
      </Container>
    </Box>
  );
};

export default FindRestaurantMenu;
