import { Content } from "../models/block";

export interface TextContentComponentProps {
  content: Content;
}

const TextContentComponent: React.FC<TextContentComponentProps> = ({
  content,
}) => {
  return <div>{content}</div>;
};

export default TextContentComponent;
