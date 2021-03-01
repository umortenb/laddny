import styled from "styled-components";

export const headerHeight = "60px";

export const Header = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: ${headerHeight};
  padding-left: 16px;
  padding-right: 16px;
  background-color: ${(props) => props.theme.headerBackgroundColor};
`;
