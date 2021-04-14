import { useState } from "react";
import { ContainerBlock, ContentType } from "../models/block";
import AddBlockButton, { AddBlockButtonView } from "../view/AddBlockButton";
import { BlockContainer } from "../view/BlockContainer";
import { FlexContainer } from "../view/FlexContainer";
import BlockComponent from "./BlockComponent";
import styled from "styled-components";

export interface BlockContainerComponentProps {
  block: ContainerBlock;
}

const ButtonContainer = styled(FlexContainer).attrs((props) => ({
  justifyContent: "center",
  alignItems: "center",
}))`
  padding: 4px;
  ${AddBlockButtonView} {
    display: none;
  }

  :hover {
    ${AddBlockButtonView} {
      display: block;
    }
  }
`;

const BlockContainerComponent: React.FC<BlockContainerComponentProps> = ({
  block,
}) => {
  const [blockState, setBlockState] = useState<ContainerBlock>(block);

  const addSubBlock = (): void => {
    let newBlockState = { ...blockState };
    newBlockState.content = [
      ...blockState.content,
      { block: { type: ContentType.Text } },
    ];

    setBlockState(newBlockState);
  };

  return (
    <>
      <BlockContainer>
        {blockState.content.map((subBlockData, index) => (
          <BlockComponent key={index} block={subBlockData.block} />
        ))}
      </BlockContainer>
      <ButtonContainer>
        <AddBlockButton onClick={addSubBlock} />
      </ButtonContainer>
    </>
  );
};

export default BlockContainerComponent;
