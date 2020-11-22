import { createContext, useEffect, useState } from "react";
import { getUserCustomData, loginEmailPassword, logOutUser } from "../../lib/realm";

export const AuthContext = createContext({user: null, loginUser: null, logoutUser: null})

export const AuthContextProvider = ({children}) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    initUser();
  }, [])

  const initUser = () => {
    setUser(getUserCustomData());
  }

  const loginUser = (email, password) => {
    loginEmailPassword(email, password).then(userData => setUser(userData));
  }

  const logoutUser = () => {
    logOutUser().then(() => setUser(null));
  }

  return (
    <AuthContext.Provider value={{user, loginUser, logoutUser}}>
      {children}
    </AuthContext.Provider>
  )
}