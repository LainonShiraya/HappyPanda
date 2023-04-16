import { ProductDTO } from "./ProductDTO";

export interface PromotionCodeProductsDTO {
  id: string;
  priceReducedBy: number;
  promotionCode: string;
  products: ProductDTO[];
  productCategory: { categoryName: string };
  maximumProductCopies: number;
}
