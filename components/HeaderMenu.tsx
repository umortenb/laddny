import { useRouter } from "next/router";
import { FlexContainer } from "../view/FlexContainer";
import { Header } from "../view/Header";
import PageLink from "./PageLink";
import AuthButton from "./auth/AuthButton";

export interface HeaderMenuProps {}

const HeaderMenu: React.FC<HeaderMenuProps> = () => {
  return (
    <Header>
      <FlexContainer alignItems="center" justifyContent="space-between">
        <PageLink />
        <AuthButton></AuthButton>
      </FlexContainer>
    </Header>
  );
};

export default HeaderMenu;
