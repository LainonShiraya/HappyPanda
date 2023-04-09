import { GraphQLClient, gql } from "graphql-request";
import { ProductCategoriesDTO } from "../../Shared/DTOs/ProductCategoriesDTO";
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
      }
    }
  `;
  const { productCategories }: { productCategories: ProductCategoriesDTO[] } =
    await graphcms.request(QUERY);
  return productCategories;
}

export { getProductCategories };
