import styled from '@emotion/styled';

export const FriendStatus = styled.span`
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({ active }) => (!active ? '#ff4c4c' : '#4ec844')};
`;

export const FriendsAvatar = styled.img`
  width: 48px;
  height: 48px;
  object-fit: cover;
  border-radius: 50%;
`;
