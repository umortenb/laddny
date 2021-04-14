import { HTMLProps } from "react";
import styled from "styled-components";

const buttonRadius = 16;

export const AddBlockButtonView = styled.button`
  position: relative;
  width: ${2 * buttonRadius}px;
  height: ${2 * buttonRadius}px;

  border: 1px solid;
  border-color: ${(props) => props.theme.neutralColor[200]};
  border-radius: ${2 * buttonRadius}px;

  background-color: ${(props) => props.theme.neutralColor[100]};
  transition: background-color 0.2s;
  transition: border-color 0.2s;

  cursor: pointer;

  &:hover,
  &:focus {
    outline: none;
    background-color: ${(props) => props.theme.neutralColor[200]};
    border-color: ${(props) => props.theme.neutralColor[300]};
  }
`;

const Line = styled.span`
  position: absolute;
  height: 3px;
  width: 50%;
  top: 50%;
  left: 50%;
  background-color: ${(props) => props.theme.neutralColor[600]};
`;

const VerticalLine = styled(Line)`
  transform: translate(-50%, -50%);
`;

const HorizontalLine = styled(Line)`
  transform: translate(-50%, -50%) rotate(90deg);
`;

const AddBlockButton: React.FC<HTMLProps<HTMLButtonElement>> = (props) => {
  return (
    <AddBlockButtonView {...props}>
      <VerticalLine />
      <HorizontalLine />
    </AddBlockButtonView>
  );
};

export default AddBlockButton;
