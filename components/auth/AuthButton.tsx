import { useContext, useState } from "react";
import { logOutUser } from "../../lib/realm";
import { NavLink } from "../../view/NavLink";
import { AuthContext } from "./AuthContextProvider";
import AuthModal from "./AuthModal";

export interface AuthBottonProps {
  
}
 
const AuthBotton: React.FC<AuthBottonProps> = () => {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const { user, refreshUser } = useContext(AuthContext);

  const authButtonClick = (): void => {
    if (user) {
      logout();
    } else {
      setShowAuthModal(true);
    }
  }

  const logout = async (): Promise<void> => {
    await logOutUser();
    refreshUser();
  }

  return ( 
    <>
      <NavLink onClick={() => authButtonClick()}>{!user ? <span>Account</span> : <span>Logout</span>}</NavLink>
      {showAuthModal ? <AuthModal closeModal={() => setShowAuthModal(false)}/> : null}
    </>  
   );
}
 
export default AuthBotton;