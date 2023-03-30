import { ProductDTO } from "./ProductDTO";

export interface ProductCategoryDTO {
  id: string;
  categoryName: string;
  productCategoryIcon: { url: string };
  products: ProductDTO[];
}
