import styled from "styled-components";
import { BlockView } from "./Block";
import { FlexContainer } from "./FlexContainer";

export const BlockContainer = styled(FlexContainer).attrs((props) => ({
  direction: props.direction,
}))`
  > ${BlockView} {
    margin: ${(props) =>
      props.direction === "row" ? "0px 4px 0px 4px" : "4px 0px 4px 0px"};

    &:first-of-type {
      ${(props) =>
        props.direction === "row" ? "margin-left: 0px" : "margin-top: 0px"};
    }

    &:last-of-type {
      ${(props) =>
        props.direction === "row" ? "margin-right: 0px" : "margin-bottom: 0px"};
    }
  }
`;
