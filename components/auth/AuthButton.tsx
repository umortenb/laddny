import useTranslation from "next-translate/useTranslation";
import { useState } from "react";
import supabase from "../../lib/supabase/supabase";
import { NavLink } from "../generic/links/NavLink";
import AuthModal from "./AuthModal";
import { useAuth } from "./AuthProvider";

export interface AuthBottonProps {}

const AuthBotton: React.FC<AuthBottonProps> = () => {
  const { t } = useTranslation("common");

  const [showAuthModal, setShowAuthModal] = useState(false);
  const { user } = useAuth();

  const authButtonClick = (): void => {
    if (user) {
      signOut();
    } else {
      setShowAuthModal(true);
    }
  };

  const signOut = async () => {
    try {
      await supabase.auth.signOut();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <NavLink onClick={() => authButtonClick()}>
        {!user ? t("Account") : t("Logout")}
      </NavLink>
      {showAuthModal ? (
        <AuthModal closeModal={() => setShowAuthModal(false)} />
      ) : null}
    </>
  );
};

export default AuthBotton;
