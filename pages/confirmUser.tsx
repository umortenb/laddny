import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import ResendConfirmationForm from "../components/auth/ResendConfirmationForm";
import { confirmUser } from "../lib/realm";
import { ConfirmUserContainer } from "../view/ConfirmUserContainer";
import { FlexContainer } from "../view/FlexContainer";

const ConfirmUserPage = () => {
  const { query: { token, tokenId } } = useRouter();
  const [confirmationStatus, setConfirmationStatus] = useState("loading");

  useEffect(() => {
    const attemptConfirmUser = async (): Promise<void> => {
      console.log(token);
      console.log(tokenId)
      // check that inputs are not of string[] type
      if (typeof token === "string" && typeof tokenId === "string") {
        try {
          await confirmUser(token, tokenId);
          setConfirmationStatus("success");
        } catch (err) {
          console.log({ ...err });
          if (err.errorCode === "UserpassTokenInvalid") {
            setConfirmationStatus("expiredOrInvalid");
          }
        }
      } else {
        setConfirmationStatus("expiredOrInvalid")
      }
    }

    attemptConfirmUser();
  }, [token, tokenId])

  if (confirmationStatus === "success") {
    return (
      <div>Registration successful</div>
    )
  } else if (confirmationStatus === "expiredOrInvalid") {
    return (
      <FlexContainer direction="column" alignItems="center">
        <ConfirmUserContainer>
          <div>Your confirmation URL is expired or invalid.</div>
          <ResendConfirmationForm />
        </ConfirmUserContainer>
      </FlexContainer>
    )
  } else {
    return (
      <div>loading...</div>
    )
  }
}

export default ConfirmUserPage;