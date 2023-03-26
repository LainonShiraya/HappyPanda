import { GraphQLClient, gql } from "graphql-request";
import { PromotionShowcaseDTO } from "../../Shared/DTOs/PromotionShowcaseDTO";
const graphcms = new GraphQLClient(
  process.env.REACT_APP_API_KEY_GRAPHQL as string
);

async function getPromotionShowcases() {
  const QUERY = gql`
    {
      promotionShowcases {
        slug
        title
        coverPhoto {
          url
        }
        promotionCode {
          promotionCode
        }
      }
    }
  `;
  const { promotionShowcases }: { promotionShowcases: PromotionShowcaseDTO[] } =
    await graphcms.request(QUERY);
  console.log("this is promotion showcases type");
  console.log(promotionShowcases);
  return promotionShowcases;
}

export { getPromotionShowcases };
