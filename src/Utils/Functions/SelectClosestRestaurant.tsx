import { RestaurantDTO } from "../../Shared/DTOs/RestaurantDTO";
import { UserAdressDTO } from "../../Shared/DTOs/UserAdressDTO";

async function getClosestRestaurant(restaurants: RestaurantDTO[]) {
  const localStorageAdresses = JSON.parse(
    localStorage.getItem("HappyPandaAdress")!
  );

  if (!localStorageAdresses) return;

  const userAdress: UserAdressDTO = localStorageAdresses.userAdress;

  if (!userAdress) return;

  const closestRestaurants = restaurants.filter(
    (restaurant: RestaurantDTO) => restaurant.city === userAdress.city
  );
  const restaurantsWithoutClosest = restaurants.filter(
    (restaurant) => !closestRestaurants.includes(restaurant)
  );
  return {
    closestRestaurants: closestRestaurants,
    restaurants: restaurantsWithoutClosest,
  };
}

export default getClosestRestaurant;
