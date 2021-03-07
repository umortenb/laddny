import { useState } from "react";
import { registerUser } from "../../lib/realm";
import { ErrorMessage } from "../../view/ErrorMessage";
import { AuthFormContainer } from "../../view/AuthFormContainer";
import { Heading } from "../../view/Heading";
import { StyledInput } from "../../view/StyledInput";
import { StyledButton } from "../../view/StyledButton";

export interface RegistrationFormProps {}

const RegistrationForm: React.FC<RegistrationFormProps> = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmationPassword, setConfirmationPassword] = useState("");

  const [errorMessage, setErrorMessage] = useState(null);

  const [awaitConfirmation, setAwaitConfirmation] = useState(false);
  const [loading, setLoading] = useState(false);

  const submitRegistrationForm = async (e): Promise<void> => {
    e.preventDefault();
    if (password.length > 128) {
      setErrorMessage("Password can have at most 128 characters.");
    } else if (password.length < 6) {
      setErrorMessage("Password must have at least 6 characters.");
    } else {
      setLoading(true);

      try {
        await registerUser(email, password);
        setAwaitConfirmation(true);
      } catch (err) {
        console.log({ ...err });
        handleRegistrationError(err.errorCode);
      }

      setLoading(false);
    }
  };

  const handleRegistrationError = (errorCode: string): void => {
    if (errorCode === "AccountNameInUse") {
      setErrorMessage("E-Mail adress already in use.");
    }
  };

  if (!loading) {
    return (
      <AuthFormContainer as="form" onSubmit={(e) => submitRegistrationForm(e)}>
        <Heading>Register</Heading>
        <StyledInput
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <StyledInput
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <StyledButton>Register</StyledButton>
        {errorMessage ? <ErrorMessage>{errorMessage}</ErrorMessage> : null}
      </AuthFormContainer>
    );
  } else {
    return <div>loading</div>;
  }
};

export default RegistrationForm;
