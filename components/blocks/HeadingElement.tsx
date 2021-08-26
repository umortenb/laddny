export interface HeadingElementProps {}

const HeadingElement: React.FC<HeadingElementProps> = (props) => {
  return <h3>{props.children}</h3>;
};

export default HeadingElement;
