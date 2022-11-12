import {GraphQLClient, gql} from 'graphql-request';

const graphcms = new GraphQLClient(process.env.REACT_APP_API_KEY_GRAPHQL);

async function getPromotions () {
	const QUERY = gql`
{
	promotions{
		slug,
		title,
		description,
		coverPhoto{
		url
		}
	}
}
`
	const {promotions} = await graphcms.request(QUERY);
	console.log(promotions);
	return promotions;
	}

export {getPromotions};