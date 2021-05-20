import BlockContainer from "../components/blocks/BlockContainer";
import { Block, ContentType } from "../models/block";
import { Flex } from "../components/generic/containers/Flex";
import PageLayout from "../components/layout/PageLayout";
import styled from "styled-components";

const newBlock: Block = {
  type: ContentType.Container,
  content: [
    {
      block: {
        type: ContentType.Text,
      },
    },
    {
      block: {
        type: ContentType.Text,
      },
    },
  ],
};

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
        <BlockContainer block={newBlock} />
      </HomeLayout>
    </PageLayout>
  );
};

export default HomePage;
