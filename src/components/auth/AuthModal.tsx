import { useContext, useState } from "react";
import { FlexContainer } from "../../view/FlexContainer";
import Modal from "../../view/Modal";
import { AuthContext } from "./AuthContextProvider";
import LoginForm from "./LoginForm";
import RegistrationForm from "./RegistrationForm";
import { TextLink } from "../../view/TextLink";

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
      <FlexContainer direction="column">
        {!user ? authForms() : <div>Logged in successfully!</div>}
      </FlexContainer>
    </Modal>
  );
};

export default AuthModal;
