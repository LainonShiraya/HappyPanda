import { GraphQLClient, gql } from "graphql-request";
import { ProductCategoryDTO } from "../../Shared/DTOs/ProductCategoryDTO";
const graphcms = new GraphQLClient(
  process.env.REACT_APP_API_KEY_GRAPHQL as string
);

async function getProductCategories() {
  const QUERY = gql`
    {
      productCategories {
        id
        categoryName
        productCategoryIcon {
          url
        }
        products {
          ... on Product {
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
    }
  `;
  const { productCategories }: { productCategories: ProductCategoryDTO[] } =
    await graphcms.request(QUERY);
  return productCategories;
}

export { getProductCategories };
