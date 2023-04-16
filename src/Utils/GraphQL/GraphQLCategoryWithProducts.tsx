import { GraphQLClient, gql } from "graphql-request";
import { CategoryWithProductsDTO } from "../../Shared/DTOs/CategoryWithProductsDTO";
const graphcms = new GraphQLClient(
  process.env.REACT_APP_API_KEY_GRAPHQL as string
);

async function getCategoriesWithProducts() {
  const QUERY = gql`
    {
      productCategories {
        id
        categoryName
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
  const {
    productCategories,
  }: { productCategories: CategoryWithProductsDTO[] } = await graphcms.request(
    QUERY
  );
  return productCategories;
}

export { getCategoriesWithProducts };
