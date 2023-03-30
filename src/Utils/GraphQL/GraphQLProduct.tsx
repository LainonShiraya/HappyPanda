import { GraphQLClient, gql } from "graphql-request";
import { ProductDTO } from "../../Shared/DTOs/ProductDTO";
const graphcms = new GraphQLClient(
  process.env.REACT_APP_API_KEY_GRAPHQL as string
);

async function getProducts() {
  const QUERY = gql`
    {
      products {
        id
        productName
        productPrice
		productDescription
		productCategory
        productImage {
          url
        }
        promotionCodes {
          promotionCode
        }
      }
    }
  `;
  const { products }: { products: ProductDTO[] } = await graphcms.request(
    QUERY
  );
  return products;
}

export { getProducts };
