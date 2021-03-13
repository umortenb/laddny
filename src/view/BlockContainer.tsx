import styled from "styled-components";
import { FlexContainer } from "./FlexContainer";

const blockMargins = (direction) => `
  > ${BlockContainer} {
    margin: ${direction === "row" ? "0px 4px 0px 4px" : "4px 0px 4px 0px"};
    
    &:first-of-type {
      ${direction === "row" ? "margin-left: 0px" : "margin-top: 0px"};
    }

    &:last-of-type {
      ${direction === "row" ? "margin-right: 0px" : "margin-bottom: 0px"};
    }
  }
`;

export const BlockContainer = styled(FlexContainer).attrs((props) => ({
  direction: props.direction,
}))`
  border: 1px solid black;
  background-color: ${(props) => props.theme.neutralColor[100]};
  width: initial;
  height: initial;

  ${(props) => blockMargins(props.direction)}
`;
