import styled from "styled-components";
import { Block } from "../models/block";
import { FlexContainer } from "./FlexContainer";

export interface BlockProps {
  block: Block;
}

export const BlockContainer = styled(FlexContainer).attrs((props) => ({
  direction: "column",
}))`
  padding: 4px;
  margin: 4px;
  background-color: ${(props) => props.theme.neutralColor[100]};
  border: 1px solid ${(props) => props.theme.neutralColor[800]};
  width: initial;
`;

export const BlockContainerRow = styled(FlexContainer).attrs((props) => ({
  direction: "row",
  wrap: "wrap",
}))`
  border: 1px solid ${(props) => props.theme.neutralColor[700]};
  border-radius: 8px;
  margin: 4px;
  width: initial;
`;

export const BlockContent = styled.div``;

const BlockComponent: React.FC<BlockProps> = ({ block }) => {
  return (
    <BlockContainer>
      {block.content ? (
        <BlockContent>{block.content}</BlockContent>
      ) : (
        block.rows.map((row) => (
          <BlockContainerRow>
            {row.blocks.map((block) => (
              <BlockComponent block={block} />
            ))}
          </BlockContainerRow>
        ))
      )}
    </BlockContainer>
  );
};

export default BlockComponent;
