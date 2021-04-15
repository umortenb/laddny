import PageLink from "./PageLink";
import AuthButton from "../auth/AuthButton";
import Link from "next/link";
import styled from "styled-components";
import { Flex } from "../generic/containers/Flex";
import { NavLink } from "../generic/links/NavLink";

export interface HeaderMenuProps {}

export const headerHeight = "60px";

export const Style = styled(Flex).attrs((props) => ({
  alignItems: "center",
  justifyContent: "space-between",
}))`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: ${headerHeight};
  width: initial;
  padding-left: 16px;
  padding-right: 16px;
  background-color: ${(props) => props.theme.headerBackgroundColor};
`;

const HeaderMenu: React.FC<HeaderMenuProps> = () => {
  return (
    <Style>
      <PageLink />
      <Flex alignItems="center" justifyContent="flex-end">
        <Link href="/" locale="en-US">
          <NavLink>EN</NavLink>
        </Link>
        <Link href="/" locale="de-DE">
          <NavLink>DE</NavLink>
        </Link>
        <AuthButton></AuthButton>
      </Flex>
    </Style>
  );
};

export default HeaderMenu;
