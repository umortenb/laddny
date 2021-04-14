import { useState } from "react";
import TextContentComponent from "../components/TextContentComponent";
import { Block, ContentType } from "../models/block";
import { BlockView } from "../view/Block";
import BlockControls from "./BlockControls";

export interface BlockProps {
  block: Block;
}

const BlockComponent: React.FC<BlockProps> = ({ block }) => {
  const [active, setActive] = useState<boolean>(false);
  return (
    <BlockView
      type={block.type}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      {active ? <BlockControls /> : null}
      {block.type === ContentType.Text ? (
        <TextContentComponent content={block.content} />
      ) : null}
    </BlockView>
  );
};

export default BlockComponent;
