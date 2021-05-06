import BlockContainer from "../components/blocks/BlockContainer";
import { Block, ContentType } from "../models/block";

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

const HomePage = () => {
  return <BlockContainer block={newBlock} />;
};

export default HomePage;
