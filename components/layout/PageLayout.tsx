import styled from "styled-components";
import HeaderMenu, { headerHeight } from "./HeaderMenu";

export interface PageLayoutProps {
  withHeader?: boolean;
}

const Style = styled.div`
  margin-top: ${(props) => (props.withHeader ? headerHeight + "px" : "0px")};
`;

const PageLayout: React.FC<PageLayoutProps> = (props) => {
  return (
    <Style withHeader={props.withHeader}>
      {props.withHeader ? <HeaderMenu /> : null}

      {props.children}
    </Style>
  );
};

export default PageLayout;
