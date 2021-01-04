import { FormEvent, useContext, useState } from "react";
import { loginEmailPassword } from "../../lib/realm";
import { Heading } from "../../view/Heading";
import { AuthFormContainer } from "../../view/AuthFormContainer";
import { StyledButton } from "../../view/StyledButton";
import { StyledInput } from "../../view/StyledInput";
import { AuthContext } from "./AuthContextProvider";

export interface LoginFormProps {
  
}
 
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
  }

  return (
    <AuthFormContainer as="form" onSubmit={(e) => submitLoginForm(e)}>
      <Heading>Login</Heading>
      <StyledInput type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
      <StyledInput type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <StyledButton type="submit">Login</StyledButton>
    </AuthFormContainer>
   );
}
 
export default LoginForm;