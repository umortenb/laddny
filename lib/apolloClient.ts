import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { getValidAccessToken, graphql_url } from './realm';

export const getApolloClient = new ApolloClient({
  link: new HttpLink({
    uri: graphql_url,
    fetch: async (uri, options: any) => {
      const accessToken = await getValidAccessToken();
      options.headers.Authorization = `Bearer ${accessToken}`;
      return fetch(uri, options);
    },
  }),
  cache: new InMemoryCache()
});

