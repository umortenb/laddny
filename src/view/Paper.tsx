import styled from "styled-components";

export const Paper = styled.div`
  min-height: 80vh;
  width: 80%;
  margin: auto;

  background-color: ${(props) => props.theme.neutralColor[100]};
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.3);
`;
