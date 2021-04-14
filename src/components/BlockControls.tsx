import styled from "styled-components";
import { FlexContainer } from "../view/FlexContainer";

const controlHeight = 32;

export interface BlockControlsProps {}

const Wrapper = styled(FlexContainer)`
  position: absolute;
  top: ${-controlHeight}px;
  right: 0;
  left: 0;

  height: ${controlHeight}px;
  z-index: 1;

  background-color: ${(props) => props.theme.neutralColor[200]};
  border-color: ${(props) => props.theme.neutralColor[300]};
`;

const BlockControls: React.FC<BlockControlsProps> = () => {
  return <Wrapper></Wrapper>;
};

export default BlockControls;
