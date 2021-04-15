import { useContext, useState } from "react";
import { Flex } from "../generic/containers/Flex";
import Modal from "../generic/modal/Modal";
import { TextLink } from "../generic/links/TextLink";
import { AuthContext } from "./AuthContextProvider";
import LoginForm from "./LoginForm";
import RegistrationForm from "./RegistrationForm";

export interface AuthModalProps {
  closeModal: () => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ closeModal }) => {
  const [showRegistration, setShowRegistration] = useState(false);
  const { user } = useContext(AuthContext);

  const authForms = () => {
    if (!showRegistration) {
      return (
        <>
          <LoginForm />
          <div>
            No Account yet?{" "}
            <TextLink onClick={() => setShowRegistration(true)}>
              Register
            </TextLink>
            .
          </div>
        </>
      );
    } else {
      return (
        <>
          <RegistrationForm />
          <div>
            Have Account already?{" "}
            <TextLink onClick={() => setShowRegistration(false)}>
              Login
            </TextLink>
            .
          </div>
        </>
      );
    }
  };
  return (
    <Modal closeModal={() => closeModal()}>
      <Flex direction="column">
        {!user ? authForms() : <div>Logged in successfully!</div>}
      </Flex>
    </Modal>
  );
};

export default AuthModal;
