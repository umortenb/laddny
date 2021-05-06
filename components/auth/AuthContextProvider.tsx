import { createContext, useEffect, useState } from "react";
import { refreshUserCustomData } from "../../lib/realm";

export const AuthContext = createContext({ user: null, refreshUser: null });

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // get initial user
    refreshUser();
  }, []);

  const refreshUser = async (userData = null): Promise<void> => {
    if (!userData) {
      userData = await refreshUserCustomData();
    }
    setUser(userData);
  };

  return (
    <AuthContext.Provider value={{ user, refreshUser }}>
      {children}
    </AuthContext.Provider>
  );
};
