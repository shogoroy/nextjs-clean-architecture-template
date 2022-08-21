import { createElement } from "react";

interface Props {
  component?: "span" | "p";
  children: React.ReactNode;
  className?: string;
}

const Typography: React.FC<Props> = ({
  component = "span",
  children,
  ...props
}) => {
  return createElement(component, props, children);
};

export default Typography;
