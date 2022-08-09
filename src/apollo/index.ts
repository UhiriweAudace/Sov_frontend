import { ApolloClient, InMemoryCache } from "@apollo/client";

const { REACT_APP_BACKEND_API_URL } = process.env;

export const client = new ApolloClient({
	uri: REACT_APP_BACKEND_API_URL,
	cache: new InMemoryCache(),
});
