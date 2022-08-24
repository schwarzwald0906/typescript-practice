import { VFC } from "react";
import { HobbyList } from "./types/HobbyList";

type Props = {
  user: HobbyList;
};

export const UserProfile: VFC<Props> = (props) => {
  const { user } = props;
  return (
    <div>
      <p>名前</p>
      <p>{user.name}</p>
      <p>趣味</p>
      <p>{user.hobby?.join("/")}</p>
    </div>
  );
};
