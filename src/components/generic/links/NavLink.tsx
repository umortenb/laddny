import styled from "styled-components";

export const NavLink = styled.a`
  color: ${(props) => props.theme.neutralColor[900]};
  cursor: pointer;
  font-weight: 600;
  transition: opacity 0.2s;
  margin: 8px;

  &:hover,
  &:focus {
    outline: none;
    opacity: 0.8;
  }
`;
