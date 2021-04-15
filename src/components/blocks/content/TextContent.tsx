import { useState } from "react";
import {
  Editor,
  EditorState,
  convertFromRaw,
  RawDraftContentState,
} from "draft-js";
import "draft-js/dist/Draft.css";
import styled from "styled-components";

export interface TextContentProps {
  content?: RawDraftContentState;
}

const Style = styled.div`
  position: relative;
  z-index: auto;

  .public-DraftEditor-content {
    padding: 8px;
  }
`;

const TextContent: React.FC<TextContentProps> = ({ content }) => {
  const [editorState, setEditorState] = useState(
    content ? convertFromRaw(content) : () => EditorState.createEmpty()
  );
  return (
    <Style>
      <Editor editorState={editorState} onChange={setEditorState} />
    </Style>
  );
};

export default TextContent;
