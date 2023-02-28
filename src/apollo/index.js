import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
	uri:"https://api.cyberconnect.dev/testnet/",
});

const authLink = setContext((_, { headers }) => {
	const token = localStorage.getItem("accessToken");

	return {
		headers: {
			...headers,
			Authorization: token ? `bearer ${token}` : "",
			"X-API-KEY": "TaamTms07ouHt2qVkUhECainyoch0qxK",
		},
	};
});

export const apolloClient = new ApolloClient({
	link: authLink.concat(httpLink),
	cache: new InMemoryCache(),
});