import { ProductDTO } from "./ProductDTO";
import { PromoProductDTO } from "./PromoProductDTO";

export interface ProductCartDTO {
  product: ProductDTO | PromoProductDTO;
  quantity: number;
}
