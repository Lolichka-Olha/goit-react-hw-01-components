import PropTypes from 'prop-types';
import {
  FriendContainer,
  FriendItem,
  Status,
  Avatar,
  Name,
} from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <FriendContainer>
      {friends.map(({ id, name, avatar, isOnline }) => (
        <FriendItem key={id}>
          <Status online={isOnline} />
          <Avatar src={avatar} alt={name} width="60px" />
          <Name>{name}</Name>
        </FriendItem>
      ))}
    </FriendContainer>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
