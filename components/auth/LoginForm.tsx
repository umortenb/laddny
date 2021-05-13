import { FormEvent, useState } from "react";
import FormTextInput from "../generic/inputs/FormTextInput";
import { Heading } from "../generic/headings/Heading";
import { Button } from "../generic/buttons/Button";
import { AuthForm } from "./AuthForm";
import useTranslation from "next-translate/useTranslation";
import supabase from "../../lib/supabase/supabase";
import { Message } from "../generic/alerts/Message";

export interface LoginFormProps {}

const LoginForm: React.FC<LoginFormProps> = () => {
  const { t } = useTranslation("common");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [message, setMessage] = useState(null);

  const submitLoginForm = async (e: FormEvent): Promise<void> => {
    e.preventDefault();
    const { error } = await supabase.auth.signIn({ email, password });
    if (error) {
      handleLoginError(error);
    }
  };

  const handleLoginError = (error: Error): void => {
    switch (error.message) {
      case "Invalid email or password":
        setMessage({ type: "error", msg: t("InvalidMailOrPassword") });
        break;
      default:
        setMessage({ type: "error", msg: t("SomethingWentWrong") });
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
      {message ? <Message type={message.type}>{message.msg}</Message> : null}
    </AuthForm>
  );
};

export default LoginForm;
