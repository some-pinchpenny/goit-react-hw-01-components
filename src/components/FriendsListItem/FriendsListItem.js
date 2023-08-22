import PropTypes from 'prop-types';
import { FriendStatus, FriendsAvatar } from './FriendsListItem.styled';

export const FriendsListItem = ({ friends: { avatar, name, isOnline } }) => {
  return (
    <>
      <FriendStatus active={isOnline}></FriendStatus>
      <FriendsAvatar src={avatar} alt={name} width="48" height="48" />
      <p>{name}</p>
    </>
  );
};

FriendsListItem.propTypes = {
  friends: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }).isRequired,
};
