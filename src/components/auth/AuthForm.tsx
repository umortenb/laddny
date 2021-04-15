import styled from "styled-components";
import { Flex } from "../generic/containers/Flex";

export const AuthForm = styled(Flex).attrs((props) => ({
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
