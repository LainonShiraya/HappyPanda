import { GraphQLClient, gql } from "graphql-request";
import { RestaurantDTO } from "../../Shared/DTOs/RestaurantDTO";
const graphcms = new GraphQLClient(
  process.env.REACT_APP_API_KEY_GRAPHQL as string
);

async function getRestaurants() {
  const QUERY = gql`
    {
      restaurants {
        id
        city
        deliveryDistance
        street
        streetNumber
        description
        restaurantImage {
          url
        }
      }
    }
  `;
  const { restaurants }: { restaurants: RestaurantDTO[] } =
    await graphcms.request(QUERY);
  return restaurants;
}

export { getRestaurants };
