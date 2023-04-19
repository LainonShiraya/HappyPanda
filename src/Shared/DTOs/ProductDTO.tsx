export interface ProductDTO {
  id: string;
  productName: string;
  productPrice: number;
  productDescription: string;
  productImage: { url: string };
  maximumQuantity?: number;
}
