export interface RestaurantDTO {
  id: string;
  city: string;
  street: string;
  streetNumber: string;
  deliveryDistance: number;
  restaurantImage: { url: string };
  description: string;
}
