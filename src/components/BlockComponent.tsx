import TextContentComponent from "../components/TextContentComponent";
import { Block } from "../models/block";
import { BlockView } from "../view/Block";
import { BlockContainer } from "../view/BlockContainer";

export interface BlockProps {
  block: Block;
}

const BlockComponent: React.FC<BlockProps> = ({ block }) => {
  return (
    <BlockView>
      {block.content ? (
        <TextContentComponent content={block.content} />
      ) : (
        <BlockContainer direction={block.subBlockInfo?.direction}>
          {block.subBlockInfo?.blocks.map((block) => (
            <BlockComponent block={block} />
          ))}
        </BlockContainer>
      )}
    </BlockView>
  );
};

export default BlockComponent;
