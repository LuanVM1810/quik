type Props = {
  children: any;
  isTrue: boolean;
};

const RenderIf = ({ children, isTrue }: Props) => {
  return isTrue ? children : null;
};

export default RenderIf;
