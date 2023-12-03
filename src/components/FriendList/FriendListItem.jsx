import { FriendsItem, FriendStatus, FriendName } from './Friends.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <FriendsItem>
      <FriendStatus isOnline={isOnline} />
      <img src={avatar} alt="User avatar" width="48" />
      <FriendName>{name}</FriendName>
    </FriendsItem>
  );
};
