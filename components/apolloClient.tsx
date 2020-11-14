import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import * as Realm from "realm-web";

const appID = "laddny-api-zjqdu";

const graphql_url = `https://realm.mongodb.com/api/client/v2.0/app/${appID}/graphql`;
const app = new Realm.App(appID);

// Get a valid Realm user access token to authenticate requests
async function getValidAccessToken() {
  if (!app.currentUser) {
    // If no user is logged in, log in an anonymous user
    await app.logIn(Realm.Credentials.anonymous());
  } else {
    // The logged in user's access token might be stale,
    // Refreshing custom data also refreshes the access token
    await app.currentUser.refreshCustomData();
  }
  // Get a valid access token for the current user
  return app.currentUser.accessToken;
}

export const apolloClient = new ApolloClient({
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