import { FormEvent, useState } from "react";
import { resendConfirmationEmail } from "../../lib/realm";
import { AuthFormContainer } from "../../view/AuthFormContainer";
import { ErrorMessage } from "../../view/ErrorMessage";
import { FlexContainer } from "../../view/FlexContainer";
import { StyledButton } from "../../view/StyledButton";
import { StyledInput } from "../../view/StyledInput";

export interface ResendConfirmationFormProps {
  
}
 
const ResendConfirmationForm: React.FC<ResendConfirmationFormProps> = () => {
  const [email, setEmail] = useState("");

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const submitResendConfirmationEmailForm = async (e: FormEvent): Promise<void> => {
    e.preventDefault();
    setLoading(true);
    try {
      await resendConfirmationEmail(email);
      setStatus("emailSent")
    }
    catch (err) {
      console.log({...err});
      setStatus(err.errorCode);
    }
    setLoading(false);
  }
  
  if (status === "emailSent") {
    return (
      <div>Confirmation E-Mail resent!</div>
    )
  }
  else {
    return (
        <AuthFormContainer as="form" onSubmit={(e) => submitResendConfirmationEmailForm(e)}>
          <StyledInput type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
          <StyledButton type="submit">Resend confirmation mail</StyledButton>
          {status === "UserNotFound" ? (
            <ErrorMessage>User not found.</ErrorMessage>
          ) : null}
        </AuthFormContainer>
    );
  }
}
 
export default ResendConfirmationForm;