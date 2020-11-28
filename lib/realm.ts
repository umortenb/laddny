import * as RealmWeb from "realm-web";

const appID: string = "laddny-api-zjqdu";

export const graphql_url: string = `https://realm.mongodb.com/api/client/v2.0/app/${appID}/graphql`;

const app: Realm.App = RealmWeb.getApp(appID);

export async function loginEmailPassword(email: string, password: string) {
  // Create a credential
  const credentials: Realm.Credentials = RealmWeb.Credentials.emailPassword(email, password);
  try {
    // Authenticate the user
    const user: Realm.User = await app.logIn(credentials);

    return user.customData
  } catch(err) {
    console.error("Failed to log in", err);
  }
}

export async function logOutUser() {
  return await app.currentUser.logOut();
}

export async function loginAnonymous() {
  // Create an anonymous credential
  const credentials: Realm.Credentials = RealmWeb.Credentials.anonymous();
  try {
    // Authenticate the user
    const user = await app.logIn(credentials);
    
    return user.customData;
  } catch(err) {
    console.error("Failed to log in", err);
  }
}

export function getUserCustomData() {
  return app.currentUser?.customData;
}

// Get a valid Realm user access token to authenticate requests
export async function getValidAccessToken() {
  if (!app.currentUser) {
    // If no user is logged in, log in an anonymous user
    await app.logIn(RealmWeb.Credentials.anonymous());
  } else {
    // The logged in user's access token might be stale,
    // Refreshing custom data also refreshes the access token
    await app.currentUser.refreshCustomData();
  }
  // Get a valid access token for the current user
  return app.currentUser.accessToken;
}