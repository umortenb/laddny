import styled from "styled-components";
import { AddBlockButtonView } from "./AddBlockButton";
import { BlockView } from "./Block";
import { FlexContainer } from "./FlexContainer";

export const BlockContainer = styled(FlexContainer).attrs((props) => ({
  direction: "column",
}))`
  /* > ${AddBlockButtonView} {
    display: block;
    left: 50%;
    transform: translate(-50%, -50%);
  } */
`;
