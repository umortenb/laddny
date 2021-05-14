import styled from "styled-components";

export const Message = styled.div`
  padding: 10px;
  background-color: ${(props) =>
    props.type === "error"
      ? props.theme.errorColor[200]
      : props.theme.accentColor[200]};
  border: 1px solid;
  border-color: ${(props) =>
    props.type === "error"
      ? props.theme.errorColor[300]
      : props.theme.accentColor[300]};
  border-radius: 5px;

  display: flex;
  justify-content: center;
`;
