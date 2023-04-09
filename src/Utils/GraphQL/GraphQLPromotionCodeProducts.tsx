import { GraphQLClient, gql } from "graphql-request";
import { PromotionCodeProductsDTO } from "../../Shared/DTOs/PromotionCodeProductsDTO";
const graphcms = new GraphQLClient(
  process.env.REACT_APP_API_KEY_GRAPHQL as string
);

async function getPromotionCodeProducts(code: string) {
  const QUERY = gql`
    {
		promotionCode(where: {promotionCode: "${code}"}) {
			id
			maximumProductCopies
			priceReducedBy
			promotionCode
			productCategory {
				categoryName
			  }
			products {
			  id
			  productName
			  productPrice
			  productDescription
			  productImage {
				url
		 		}
			}
	 	}
    }
  `;
  const { promotionCode }: { promotionCode: PromotionCodeProductsDTO } =
    await graphcms.request(QUERY);
  return promotionCode;
}

export { getPromotionCodeProducts };
