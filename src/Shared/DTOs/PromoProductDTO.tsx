export interface PromoProductDTO {
  id: string;
  productName: string;
  productPrice: number;
  productDescription: string;
  productImage: { url: string };
  productOldPrice: number;
  maximumQuantity: number;
  promoProduct: boolean;
}

// Type '{ priceReducedBy: number; maximumQuantity: number; id: string; productName: string; productPrice: number; productDescription: string;
// 	 productImage: { url: string; }; }[]' has no signatures for which the type argument list is applicable.
