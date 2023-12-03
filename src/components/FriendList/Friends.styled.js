import styled from 'styled-components';

export const FriendsList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 50px;
  gap: 20px;
`;

export const FriendsItem = styled.li`
  display: flex;
  align-items: center;
  margin: 0 auto;
  column-gap: 8px;
  width: 200px;
  border: 2px solid rgb(179, 179, 241);
  border-radius: 10px;
  padding: 5px 15px;
  transition: all 300ms ease;

  &:hover {
    cursor: pointer;
    scale: 1.2;
  }
`;

export const FriendStatus = styled(({ isOnline, ...rest }) => (
  <span {...rest} />
))`
  display: block;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: ${friend => (friend.isOnline ? 'green' : 'red')};
`;

export const FriendName = styled.p`
  font-size: 24px;
`;
