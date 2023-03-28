import React, { useEffect, useState } from "react";
import PandaMenu from "../../../Shared/Components/PandaMenu/PandaMenu";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { UserAdressDTO } from "../../DTOs/UserAdressDTO";
import AdressPanel from "../AdressPanel/AdressPanel";
import RestaurantSelectionDialog from "../RestaurantSelectionDialog/RestaurantSelectionDialog";
const VerifyAdressMenu = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [adress, setAdress] = useState<UserAdressDTO>({
    city: "",
    street: "",
    number: "",
  });
  const checkAdressIsNotEmpty = () => {
    if (!adress?.city || !adress?.street || !adress?.number) return true;
    return false;
  };
  useEffect(() => {
    const pandaAdress = JSON.parse(localStorage.getItem("HappyPandaAdress")!);
    if (!!pandaAdress?.userAdress) setAdress(pandaAdress.userAdress);
  }, []);
  const inputAdress = (value: string, field: string) => {
    setAdress({ ...adress, [field]: value });
  };
  const saveAdressToLocalStorage = () => {
    localStorage.setItem(
      "HappyPandaAdress",
      JSON.stringify({ userAdress: adress, restaurant: {} })
    );
    setOpen(true);
  };
  return (
    <>
      <RestaurantSelectionDialog open={open} setOpen={setOpen} />
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
              onChange={(e) => {
                inputAdress(e.target.value, "city");
              }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              id="filled-basic"
              label="Street"
              variant="filled"
              fullWidth
              onChange={(e) => {
                inputAdress(e.target.value, "street");
              }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              id="filled-basic"
              label="Number"
              variant="filled"
              fullWidth
              onChange={(e) => {
                inputAdress(e.target.value, "number");
              }}
            />
          </Grid>
        </Grid>
        <AdressPanel />
        <Button
          variant="contained"
          size="large"
          sx={{
            width: { sm: "50%", xs: "100%" },
          }}
          onClick={saveAdressToLocalStorage}
          disabled={checkAdressIsNotEmpty()}
        >
          Save & Find Location
        </Button>
      </PandaMenu>
    </>
  );
};

export default VerifyAdressMenu;
