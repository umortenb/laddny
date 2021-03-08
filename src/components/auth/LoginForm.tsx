import { FormEvent, useContext, useState } from "react";
import { loginEmailPassword } from "../../lib/realm";
import { Heading } from "../../view/Heading";
import { AuthFormContainer } from "../../view/AuthFormContainer";
import { StyledButton } from "../../view/StyledButton";
import { AuthContext } from "./AuthContextProvider";
import FormTextInput from "../../view/FormTextInput";

export interface LoginFormProps {}

const LoginForm: React.FC<LoginFormProps> = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { refreshUser } = useContext(AuthContext);

  const submitLoginForm = async (e: FormEvent): Promise<void> => {
    e.preventDefault();
    try {
      const userData = await loginEmailPassword(email, password);
      refreshUser(userData);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <AuthFormContainer as="form" onSubmit={(e) => submitLoginForm(e)}>
      <Heading>Login</Heading>
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
      <StyledButton type="submit">Login</StyledButton>
    </AuthFormContainer>
  );
};

export default LoginForm;
