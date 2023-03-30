export interface ProductDTO {
  id: string;
  productName: string;
  productPrice: number;
  productDescription: string;
  productCategory: string;
  productImage: { url: string };
}
