import { useState } from "react";
import {
  Editor,
  EditorState,
  convertFromRaw,
  RawDraftContentState,
} from "draft-js";
import "draft-js/dist/Draft.css";
import { TextContentContainer } from "../view/TextContentContainer";

export interface TextContentComponentProps {
  content?: RawDraftContentState;
}

const TextContentComponent: React.FC<TextContentComponentProps> = ({
  content,
}) => {
  const [editorState, setEditorState] = useState(
    content ? convertFromRaw(content) : () => EditorState.createEmpty()
  );
  return (
    <TextContentContainer>
      <Editor editorState={editorState} onChange={setEditorState} />
    </TextContentContainer>
  );
};

export default TextContentComponent;
