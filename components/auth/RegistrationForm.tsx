import { useState } from "react";
import { Button } from "../generic/buttons/Button";
import FormTextInput from "../generic/inputs/FormTextInput";
import { Heading } from "../generic/headings/Heading";
import { AuthForm } from "./AuthForm";
import useTranslation from "next-translate/useTranslation";
import supabase from "../../lib/supabase/supabase";
import { Message } from "../generic/alerts/Message";

export interface RegistrationFormProps {}

const RegistrationForm: React.FC<RegistrationFormProps> = () => {
  const { t } = useTranslation("common");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const submitRegistrationForm = async (e): Promise<void> => {
    e.preventDefault();

    if (password.length < 6) {
      setMessage({
        type: "error",
        msg: t("PasswordMinCharacters", { count: 6 }),
      });
      return;
    }

    setLoading(true);

    const { user, error } = await supabase.auth.signUp({ email, password });

    if (error) {
      handleRegistrationError(error);
    } else if (!user) {
      setMessage({ type: "success", msg: t("ConfirmationMailSent") });
    }

    setLoading(false);
  };

  const handleRegistrationError = (error: Error): void => {
    switch (error.message) {
      case "A user with this email address has already been registered":
        setMessage({ type: "error", msg: t("MailInUse") });
        break;
      default:
        setMessage({ type: "error", msg: t("SomethingWentWrong") });
    }
  };

  if (!loading) {
    return (
      <AuthForm as="form" onSubmit={(e) => submitRegistrationForm(e)}>
        <Heading>{t("Register")}</Heading>
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
        <Button>{t("Register")}</Button>
        {message ? <Message type={message.type}>{message.msg}</Message> : null}
      </AuthForm>
    );
  } else {
    return <div>loading...</div>;
  }
};

export default RegistrationForm;
