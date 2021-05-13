import { User } from "@supabase/gotrue-js";
import { createContext, useContext, useEffect, useState } from "react";
import supabase from "../../lib/supabase/supabase";

const AuthContext = createContext<{
  user: User | null;
  loading: boolean;
}>({ user: null, loading: true });

export const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const updateUser = () => {
      setUser(supabase.auth.user());
      setLoading(false);
    };

    supabase.auth.onAuthStateChange((event, session) => {
      updateUser();
    });

    updateUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
