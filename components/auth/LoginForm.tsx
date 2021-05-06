import { FormEvent, useContext, useState } from "react";
import { loginEmailPassword } from "../../lib/realm";
import FormTextInput from "../generic/inputs/FormTextInput";
import { Heading } from "../generic/headings/Heading";
import { Button } from "../generic/buttons/Button";
import { AuthContext } from "./AuthContextProvider";
import { AuthForm } from "./AuthForm";
import useTranslation from "next-translate/useTranslation";

export interface LoginFormProps {}

const LoginForm: React.FC<LoginFormProps> = () => {
  const { t } = useTranslation("common");

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
      <Heading>{t("Login")}</Heading>
      <FormTextInput
        label={t("Mail")}
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <FormTextInput
        label={t("Password")}
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button type="submit">{t("Login")}</Button>
    </AuthForm>
  );
};

export default LoginForm;
