import React from "react";

type Props = {
  children: React.ReactNode;
  isTrue: boolean;
};

const RenderIf = ({ children, isTrue }: Props) => {
  return isTrue ? children : null;
};

export default RenderIf;
