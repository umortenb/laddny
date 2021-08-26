import { useCallback, useEffect, useMemo, useState } from "react";
import { createEditor, Descendant, Editor, Node, Operation, Path } from "slate";
import { DefaultElement, Editable, Slate, withReact } from "slate-react";
import styled from "styled-components";
import { upsertEditorElements } from "../../lib/supabase/db/editor";
import { CustomElement, ElementType } from "../../models/slate";
import { Flex } from "../generic/containers/Flex";
import AddBlockButton, { Style as AddBlockButtonStyle } from "./AddBlockButton";
import Block from "./Block";
import HeadingElement from "./HeadingElement";

export interface BlockContainerProps {}

export const Style = styled.div`
  min-height: 80vh;
  width: 80%;
  margin: auto;

  background-color: ${(props: any) => props.theme.neutralColor[100]};
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.3);
`;

const ButtonContainer = styled(Flex).attrs((props: any) => ({
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

const BlockContainer: React.FC<BlockContainerProps> = (props) => {
  const [value, setValue] = useState<Descendant[]>([
    {
      type: ElementType.Paragraph,
      children: [{ text: "A line of text in a paragraph." }],
    },
    {
      type: ElementType.Heading,
      level: 1,
      children: [{ text: "Heading" }],
    },
  ]);

  // https://github.com/ianstormtaylor/slate/issues/4081
  const [editor] = useState(withReact(createEditor()));

  const renderElement = useCallback((props) => {
    switch (props.element.type) {
      case ElementType.Heading:
        return <HeadingElement {...props} />;
      default:
        return <DefaultElement {...props} />;
    }
  }, []);

  const onEditorChange = (newValue: Descendant[]): void => {
    setValue(newValue);
  };

  return (
    <Style>
      <Slate editor={editor} value={value} onChange={onEditorChange}>
        <Editable renderElement={renderElement} spellCheck={false} />
      </Slate>
    </Style>
  );
};

export default BlockContainer;
