import styled from "styled-components";
import { ContentType } from "../models/block";

export const BlockView = styled.div`
  position: relative;
  padding: 4px;

  background-color: ${(props) => props.theme.neutralColor[100]};

  ${(props) =>
    props.type !== ContentType.Container
      ? `
  &:hover {
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.3);
  }
  `
      : null}
`;
