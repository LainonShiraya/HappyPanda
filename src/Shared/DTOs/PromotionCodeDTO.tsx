import { PromotionShowcaseDTO } from "./PromotionShowcaseDTO";

export interface PromotionCodeDTO {
  id: string;
  minimumProductCopies: number;
  minimumOrderPrice: number;
  priceReducedBy: number;
  promotionCode: string;
  promotionShowcase: PromotionShowcaseDTO;
}
