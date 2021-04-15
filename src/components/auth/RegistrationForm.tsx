import { useState } from "react";
import { registerUser } from "../../lib/realm";
import { Button } from "../generic/buttons/Button";
import { ErrorMessage } from "../generic/alerts/ErrorMessage";
import FormTextInput from "../generic/inputs/FormTextInput";
import { Heading } from "../generic/headings/Heading";
import { AuthForm } from "./AuthForm";

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
      <AuthForm as="form" onSubmit={(e) => submitRegistrationForm(e)}>
        <Heading>Register</Heading>
        <FormTextInput
          label="Mail"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <FormTextInput
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button>Register</Button>
        {errorMessage ? <ErrorMessage>{errorMessage}</ErrorMessage> : null}
      </AuthForm>
    );
  } else {
    return <div>loading</div>;
  }
};

export default RegistrationForm;
