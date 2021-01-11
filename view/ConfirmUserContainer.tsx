import styled from "styled-components";
import { AuthFormContainer } from "./AuthFormContainer";
import { FlexContainer } from "./FlexContainer";

export const ConfirmUserContainer = styled(FlexContainer)`
  flex-direction: column;
  align-items: center;
  max-width: 384px;
  padding: 32px;

  ${AuthFormContainer} {
    margin-top: 16px;
  }
`;
