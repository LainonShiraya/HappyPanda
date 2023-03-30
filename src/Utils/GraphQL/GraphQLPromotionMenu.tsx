import { GraphQLClient, gql } from "graphql-request";
import { PromotionCodeDTO } from "../../Shared/DTOs/PromotionCodeDTO";
const graphcms = new GraphQLClient(
  process.env.REACT_APP_API_KEY_GRAPHQL as string
);

async function getPromotionCodes() {
  const QUERY = gql`
    {
      promotionCodes {
        id
        minimumOrderPrice
        minimumProductCopies
        priceReducedBy
        promotionCode
        promotionShowcase {
          title
          description
          coverPhoto {
            url
          }
        }
      }
    }
  `;
  const { promotionCodes }: { promotionCodes: PromotionCodeDTO[] } =
    await graphcms.request(QUERY);
  return promotionCodes;
}

export { getPromotionCodes };
