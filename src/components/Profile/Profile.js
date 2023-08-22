import PropTypes from 'prop-types';
import { CiUser, CiRead, CiHeart } from 'react-icons/ci';
import {
  ProfileBlock,
  ProfileDescription,
  ProfileImg,
  ProfileInfo,
  ProfileName,
  StatsBlock,
  StatsItem,
  StatsQuantity,
} from './Profile.styled';

export const Profile = ({
  user: { username, tag, location, avatar, stats },
}) => {
  return (
    <ProfileBlock>
      <ProfileDescription>
        <ProfileImg src={avatar} alt={username} width="150" />
        <ProfileName>{username}</ProfileName>
        <ProfileInfo>@{tag}</ProfileInfo>
        <ProfileInfo>{location}</ProfileInfo>
      </ProfileDescription>
      <StatsBlock>
        <StatsItem>
          <CiUser size="22" title="followers" />
          <StatsQuantity title="followers">{stats.followers}</StatsQuantity>
        </StatsItem>
        <StatsItem>
          <CiRead size="24" title="views" />
          <StatsQuantity title="views">{stats.views}</StatsQuantity>
        </StatsItem>
        <StatsItem>
          <CiHeart size="24" title="likes" />
          <StatsQuantity title="likes">{stats.likes}</StatsQuantity>
        </StatsItem>
      </StatsBlock>
    </ProfileBlock>
  );
};

Profile.propTypes = {
  user: PropTypes.exact({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.exact({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }),
  }).isRequired,
};
