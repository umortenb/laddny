import { Content } from "../models/block";
import { useState } from "react";
import { Editor, EditorState } from "draft-js";
import "draft-js/dist/Draft.css";
import { TextContentContainer } from "../view/TextContentContainer";

export interface TextContentComponentProps {
  content: Content;
}

const TextContentComponent: React.FC<TextContentComponentProps> = ({
  content,
}) => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  return (
    <TextContentContainer>
      <Editor editorState={editorState} onChange={setEditorState} />
    </TextContentContainer>
  );
};

export default TextContentComponent;
