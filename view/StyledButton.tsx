import styled from "styled-components";

export const StyledButton = styled.button`
  padding: 7px;
  border: 1px solid black;
  border-radius: 5px;
  background-color: transparent;

  display: flex;
  justify-content: center;

  cursor: pointer;

  &:hover,
  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.accentColor[700]};
  }
`;
