import styled from "styled-components";

export const StyledButton = styled.button`
  padding: 7px;
  border: 1px solid transparent;
  border-radius: 5px;
  background-color: ${(props) => props.theme.primaryColor[100]};
  font-size: 1.125rem;
  color: ${(props) => props.theme.primaryColor[900]};
  transition: all 0.2s;

  display: flex;
  justify-content: center;

  cursor: pointer;

  &:hover,
  &:focus {
    outline: none;
    background-color: ${(props) => props.theme.primaryColor[300]};
    border-color: ${(props) => props.theme.primaryColor[400]};
  }
`;
