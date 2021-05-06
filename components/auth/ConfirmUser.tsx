import { Flex } from "../generic/containers/Flex";
import { AuthForm } from "./AuthForm";
import styled from "styled-components";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { confirmUser } from "../../lib/realm";
import ResendConfirmationForm from "./ResendConfirmationForm";
import useTranslation from "next-translate/useTranslation";

export interface ConfirmUserProps {}

const Style = styled(Flex)`
  flex-direction: column;
  align-items: center;
  max-width: 384px;
  padding: 32px;

  ${AuthForm} {
    margin-top: 16px;
  }
`;

const ConfirmUser: React.FC<ConfirmUserProps> = () => {
  const { t } = useTranslation("common");
  const {
    query: { token, tokenId },
  } = useRouter();
  const [confirmationStatus, setConfirmationStatus] = useState("loading");

  useEffect(() => {
    const attemptConfirmUser = async (): Promise<void> => {
      console.log(token);
      console.log(tokenId);
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
        setConfirmationStatus("expiredOrInvalid");
      }
    };

    attemptConfirmUser();
  }, [token, tokenId]);

  return (
    <Style>
      {confirmationStatus === "success" ? (
        <div>{t("confirm-user:RegistrationSuccess")}</div>
      ) : confirmationStatus === "expiredOrInvalid" ? (
        <>
          <div>{t("confirm-user:URLExpiredOrInvalid")}</div>
          <ResendConfirmationForm />
        </>
      ) : (
        <div>loading...</div>
      )}
    </Style>
  );
};

export default ConfirmUser;
