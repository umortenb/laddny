import { useContext, useState } from "react";
import { Flex } from "../generic/containers/Flex";
import Modal from "../generic/modal/Modal";
import { TextLink } from "../generic/links/TextLink";
import { AuthContext } from "./AuthContextProvider";
import LoginForm from "./LoginForm";
import RegistrationForm from "./RegistrationForm";
import useTranslation from "next-translate/useTranslation";
import Trans from "next-translate/Trans";

export interface AuthModalProps {
  closeModal: () => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ closeModal }) => {
  const { t } = useTranslation("common");

  const [showRegistration, setShowRegistration] = useState(false);
  const { user } = useContext(AuthContext);

  const authForms = () => {
    if (!showRegistration) {
      return (
        <>
          <LoginForm />
          <div>
            <Trans
              i18nKey="common:AskRegister"
              components={[
                <TextLink onClick={() => setShowRegistration(true)} />,
              ]}
            />
          </div>
        </>
      );
    } else {
      return (
        <>
          <RegistrationForm />
          <div>
            <Trans
              i18nKey="common:AskLogin"
              components={[
                <TextLink onClick={() => setShowRegistration(false)} />,
              ]}
            />
          </div>
        </>
      );
    }
  };
  return (
    <Modal closeModal={() => closeModal()}>
      <Flex direction="column">
        {!user ? authForms() : <div>{t("LoginSuccess")}</div>}
      </Flex>
    </Modal>
  );
};

export default AuthModal;
