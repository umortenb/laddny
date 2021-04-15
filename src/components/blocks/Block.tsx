import { useState } from "react";
import TextContentComponent from "./content/TextContent";
import { ContentBlock, ContentType } from "../../models/block";
import styled from "styled-components";
import BlockControls from "./BlockControls";

export interface BlockProps {
  block: ContentBlock;
}

const Style = styled.div`
  position: relative;
  padding: 4px;

  background-color: ${(props) => props.theme.neutralColor[100]};

  ${(props) =>
    props.type !== ContentType.Container
      ? `
  &:hover {
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.3);
  }
  `
      : null}
`;

const Block: React.FC<BlockProps> = ({ block }) => {
  const [active, setActive] = useState<boolean>(false);
  return (
    <Style
      type={block.type}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      {active ? <BlockControls /> : null}
      {block.type === ContentType.Text ? (
        <TextContentComponent content={block.content} />
      ) : null}
    </Style>
  );
};

export default Block;
