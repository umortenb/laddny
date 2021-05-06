import { FormEvent, useState } from "react";
import { resendConfirmationEmail } from "../../lib/realm";
import { Button } from "../generic/buttons/Button";
import { ErrorMessage } from "../generic/alerts/ErrorMessage";
import FormTextInput from "../generic/inputs/FormTextInput";
import { AuthForm } from "./AuthForm";
import { t, Trans } from "@lingui/macro";
import useTranslation from "next-translate/useTranslation";

export interface ResendConfirmationFormProps {}

const ResendConfirmationForm: React.FC<ResendConfirmationFormProps> = () => {
  const { t } = useTranslation("common");

  const [email, setEmail] = useState("");

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const submitResendConfirmationEmailForm = async (
    e: FormEvent
  ): Promise<void> => {
    e.preventDefault();
    setLoading(true);
    try {
      await resendConfirmationEmail(email);
      setStatus("emailSent");
    } catch (err) {
      console.log({ ...err });
      setStatus(err.errorCode);
    }
    setLoading(false);
  };

  if (status === "emailSent") {
    return <div>{t("confirm-user:ConfirmationMailResent")}</div>;
  } else {
    return (
      <AuthForm
        as="form"
        onSubmit={(e) => submitResendConfirmationEmailForm(e)}
      >
        <FormTextInput
          label={t("Mail")}
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button type="submit">
          {t("confirm-user:ResendConfirmationMail")}
        </Button>
        {status === "UserNotFound" ? (
          <ErrorMessage>{t("confirm-user:UserNotFound")}</ErrorMessage>
        ) : null}
      </AuthForm>
    );
  }
};

export default ResendConfirmationForm;
