import styled from "styled-components";

export const BlockView = styled.div`
  background-color: ${(props) => props.theme.neutralColor[100]};
  width: 100%;

  &:hover {
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.3);
  }
`;
