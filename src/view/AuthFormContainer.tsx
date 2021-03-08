import { removeClientSetsFromDocument } from "@apollo/client/utilities";
import styled from "styled-components";
import { FlexContainer } from "./FlexContainer";

export const AuthFormContainer = styled(FlexContainer).attrs((props) => ({
  direction: "column",
}))`
  width: 100%;

  h3 {
    margin-bottom: 24px;
  }

  input {
    margin-bottom: 16px;
  }

  button {
    margin-bottom: 16px;
    margin-top: 16px;
  }
`;
