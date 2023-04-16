import { ProductDTO } from "./ProductDTO";
import { PromoProductDTO } from "./PromoProductDTO";

export interface CategoryWithProductsDTO {
  id: string;
  categoryName: string;
  products: ProductDTO[] | PromoProductDTO[];
}
