import Grid from "@mui/material/Grid";
import React, { useEffect, useState } from "react";
import DialogTemplate from "../DialogTemplate/DialogTemplate";
import { RestaurantDTO } from "../../DTOs/RestaurantDTO";
import SelectClosestRestaurant from "../../../Utils/Functions/SelectClosestRestaurant";
import { getRestaurants } from "../../../Utils/GraphQL/GraphQLRestaurants";
import ImgCard from "../ImgCard/ImgCard";
import { useNavigate } from "react-router-dom";

interface restaurantsFilteredProps {
  closestRestaurants: RestaurantDTO[] | undefined;
  restaurants: RestaurantDTO[];
}
const RestaurantSelectionDialog = ({ open, setOpen }: any) => {
  const [restaurants, setRestaurants] = useState<restaurantsFilteredProps>();
  const navigate = useNavigate();
  useEffect(() => {
    async function setFilteredRestaurants() {
      const restaurantsFromAPI = await getRestaurants();
      const restaurantsFiltered = SelectClosestRestaurant(restaurantsFromAPI);
      setRestaurants(await restaurantsFiltered);
    }
    setFilteredRestaurants();
  }, [open]);

  const buttonOnClick = (restaurant: RestaurantDTO) => {
    const pandaAdress = JSON.parse(localStorage.getItem("HappyPandaAdress")!);
    pandaAdress.restaurant = restaurant;
    localStorage.setItem("HappyPandaAdress", JSON.stringify(pandaAdress));
    navigate("../menu");
  };
  return (
    <DialogTemplate
      open={open}
      setOpen={setOpen}
      title={"Select your restaurant"}
    >
      <Grid
        container
        rowSpacing={2}
        columnSpacing={4}
        justifyContent="space-between"
        sx={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {restaurants?.closestRestaurants?.map((closestRestaurant, key) => (
          <Grid item xs={12} key={key} md={5}>
            <ImgCard
              key={closestRestaurant.id}
              img={closestRestaurant.restaurantImage.url}
              title={`${closestRestaurant.city} ${closestRestaurant.street} ${closestRestaurant.streetNumber} `}
              description={closestRestaurant.description}
              buttonText={"Select"}
              buttonOnClick={() => {
                buttonOnClick(closestRestaurant);
              }}
            />
          </Grid>
        ))}
        {restaurants?.restaurants?.map((restaurant, key) => (
          <Grid
            item
            xs={12}
            md={5}
            key={key}
            sx={{ justifyContent: "center", display: "flex" }}
          >
            <ImgCard
              key={restaurant.id}
              img={restaurant.restaurantImage.url}
              title={`${restaurant.city} ${restaurant.street} ${restaurant.streetNumber} `}
              description={restaurant.description}
              buttonText={"Select"}
              buttonOnClick={() => {
                buttonOnClick(restaurant);
              }}
            />
          </Grid>
        ))}
      </Grid>
    </DialogTemplate>
  );
};

export default RestaurantSelectionDialog;
