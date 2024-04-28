import { ComponentType } from "react";

interface IProps {
  Comp: ComponentType;
}

const CounterHoc = ({ Comp }: IProps) => {
  return <Comp />;
};

export default CounterHoc;
