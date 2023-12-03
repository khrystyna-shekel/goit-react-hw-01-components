import {
  StyledCard,
  StyledDesc,
  StyledAva,
  StyledUName,
  StyledUInfo,
  StyledStats,
  StyledStatsItem,
  StyledNum,
} from './Profile.styled';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <StyledCard>
      <StyledDesc>
        <StyledAva src={avatar} alt={username} />
        <StyledUName>{username}</StyledUName>
        <StyledUInfo>@{tag}</StyledUInfo>
        <StyledUInfo>{location}</StyledUInfo>
      </StyledDesc>

      <StyledStats>
        <StyledStatsItem>
          <span>Followers</span>
          <StyledNum>{followers}</StyledNum>
        </StyledStatsItem>
        <StyledStatsItem>
          <span>Views</span>
          <StyledNum>{views}</StyledNum>
        </StyledStatsItem>
        <StyledStatsItem>
          <span>Likes</span>
          <StyledNum>{likes}</StyledNum>
        </StyledStatsItem>
      </StyledStats>
    </StyledCard>
  );
};
