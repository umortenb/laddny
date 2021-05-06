import { Trans } from "@lingui/macro";
import useTranslation from "next-translate/useTranslation";
import { useContext, useState } from "react";
import { logOutUser } from "../../lib/realm";
import { NavLink } from "../generic/links/NavLink";
import { AuthContext } from "./AuthContextProvider";
import AuthModal from "./AuthModal";

export interface AuthBottonProps {}

const AuthBotton: React.FC<AuthBottonProps> = () => {
  const { t } = useTranslation("common");

  const [showAuthModal, setShowAuthModal] = useState(false);
  const { user, refreshUser } = useContext(AuthContext);

  const authButtonClick = (): void => {
    if (user) {
      logout();
    } else {
      setShowAuthModal(true);
    }
  };

  const logout = async (): Promise<void> => {
    await logOutUser();
    refreshUser();
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
