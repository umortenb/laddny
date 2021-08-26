import BlockContainer from "../components/blocks/BlockContainer";
import { Flex } from "../components/generic/containers/Flex";
import PageLayout from "../components/layout/PageLayout";
import styled from "styled-components";

const HomeLayout = styled(Flex).attrs((props) => ({
  direction: "row",
}))`
  max-width: 1500px;
  padding: 16px;
`;

const HomePage = () => {
  return (
    <PageLayout withHeader>
      <HomeLayout>
        <BlockContainer />
      </HomeLayout>
    </PageLayout>
  );
};

export default HomePage;
