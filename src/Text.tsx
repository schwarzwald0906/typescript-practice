import { FC } from "react";

type Props = {
  color: String;
  fontSize: String;
};

export const Text: FC<Props> = (props) => {
  const { color, fontSize } = props;
  return <p style={{ color, fontSize }}>テキストです</p>;
};
