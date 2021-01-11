import styled from "styled-components";

export const StyledInput = styled.input`
  padding: 7px;
  border: 1px solid black;
  border-radius: 5px;
  background: transparent;

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.accentColor};
  }
`;
