import { useState } from "react";
import styled from "styled-components";
import { ContainerBlock, ContentType } from "../../models/block";
import { Flex } from "../generic/containers/Flex";
import AddBlockButton, { Style as AddBlockButtonStyle } from "./AddBlockButton";
import Block from "./Block";

export interface BlockContainerProps {
  block: ContainerBlock;
}

export const Style = styled.div`
  min-height: 80vh;
  width: 80%;
  margin: auto;

  background-color: ${(props) => props.theme.neutralColor[100]};
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.3);
`;

const ButtonContainer = styled(Flex).attrs((props) => ({
  justifyContent: "center",
  alignItems: "center",
}))`
  padding: 4px;
  ${AddBlockButtonStyle} {
    display: none;
  }

  :hover {
    ${AddBlockButtonStyle} {
      display: block;
    }
  }
`;

const BlockContainer: React.FC<BlockContainerProps> = ({ block }) => {
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
    <Style>
      <Flex direction="column">
        {blockState.content.map((subBlockData, index) => (
          <Block key={index} block={subBlockData.block} />
        ))}
      </Flex>
      <ButtonContainer>
        <AddBlockButton onClick={addSubBlock} />
      </ButtonContainer>
    </Style>
  );
};

export default BlockContainer;
