import { FlexContainer } from "../view/FlexContainer";
import { Header } from "../view/Header";
import PageLink from "./PageLink";
import AuthButton from "./auth/AuthButton";
import Link from "next/link";
import { NavLink } from "../view/NavLink";

export interface HeaderMenuProps {}

const HeaderMenu: React.FC<HeaderMenuProps> = () => {
  return (
    <Header>
      <FlexContainer alignItems="center" justifyContent="space-between">
        <PageLink />
        <FlexContainer alignItems="center" justifyContent="flex-end">
          <Link href="/" locale="en-US">
            <NavLink>EN</NavLink>
          </Link>
          <Link href="/" locale="de-DE">
            <NavLink>DE</NavLink>
          </Link>
          <AuthButton></AuthButton>
        </FlexContainer>
      </FlexContainer>
    </Header>
  );
};

export default HeaderMenu;
