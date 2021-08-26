import { useMemo, useState } from "react";
import { createEditor } from "slate";
import { Editable, Slate, withReact } from "slate-react";
import styled from "styled-components";

export interface TextContentProps {
  content?: string;
}

const Style = styled.div`
  position: relative;
  z-index: auto;

  .public-DraftEditor-content {
    padding: 8px;
  }
`;

const TextContent: React.FC<TextContentProps> = ({ content }) => {
  return <Editable />;
};

export default TextContent;
