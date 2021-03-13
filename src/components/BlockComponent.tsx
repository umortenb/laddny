import TextContentComponent from "../components/TextContentComponent";
import { Block } from "../models/block";
import { BlockContainer } from "../view/BlockContainer";

export interface BlockProps {
  block: Block;
}

const BlockComponent: React.FC<BlockProps> = ({ block }) => {
  return (
    <BlockContainer direction={block.subBlockInfo?.direction}>
      {block.content ? (
        <TextContentComponent content={block.content} />
      ) : (
        block.subBlockInfo?.blocks.map((block) => (
          <BlockComponent block={block} />
        ))
      )}
    </BlockContainer>
  );
};

export default BlockComponent;
