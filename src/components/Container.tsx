import { ElementType, FC } from "react";

type ContainerProps = {
  as: ElementType;
};

const Container: FC<ContainerProps> = ({ as }) => {
  const Component = as;
  return <Component></Component>;
};

export default Container;
