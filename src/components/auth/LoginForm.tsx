import { FormEvent, useContext, useState } from "react";
import { loginEmailPassword } from "../../lib/realm";
import FormTextInput from "../generic/inputs/FormTextInput";
import { Heading } from "../generic/headings/Heading";
import { Button } from "../generic/buttons/Button";
import { AuthContext } from "./AuthContextProvider";
import { AuthForm } from "./AuthForm";

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
    <AuthForm as="form" onSubmit={(e) => submitLoginForm(e)}>
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
      <Button type="submit">Login</Button>
    </AuthForm>
  );
};

export default LoginForm;
