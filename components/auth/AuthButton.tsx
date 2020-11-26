import { useState } from "react";
import { NavLink } from "../../view/NavLink";
import AuthModal from "./AuthModal";

export interface AuthBottonProps {
  
}
 
const AuthBotton: React.FC<AuthBottonProps> = () => {
  const [showAuthModal, setShowAuthModal] = useState(false);

  return ( 
    <>
      <NavLink onClick={() => setShowAuthModal(true)}>Account</NavLink>
      {showAuthModal ? <AuthModal closeModal={() => setShowAuthModal(false)}/> : null}
    </>  
   );
}
 
export default AuthBotton;