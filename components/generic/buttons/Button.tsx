import styled from "styled-components";

export const Button = styled.button`
  padding: 7px;
  border: 1px solid transparent;
  border-radius: 5px;
  background-color: transparent;
  font-size: 1.125rem;
  transition: all 0.2s;

  display: flex;
  justify-content: center;

  cursor: pointer;

  &:hover,
  &:focus {
    outline: none;
    color: ${(props) => props.theme.primaryColor[100]};
    background-color: ${(props) => props.theme.primaryColor[700]};
  }
`;
