import styled from "styled-components";

export const NavLink = styled.a`
  color: ${(props) => (props.active ? "#424242" : "#1d1d1d")};
  cursor: pointer;
  font-weight: 600;
`;
