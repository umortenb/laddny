import styled from "styled-components";
import { accentColor, errorColor } from "../../styles/colorPalettes";

export const Message = styled.div`
  padding: 10px;
  background-color: ${(props) =>
    props.type === "error" ? errorColor[200] : accentColor[200]};
  border: 1px solid;
  border-color: ${(props) =>
    props.type === "error" ? errorColor[300] : accentColor[300]};
  border-radius: 5px;

  display: flex;
  justify-content: center;
`;
