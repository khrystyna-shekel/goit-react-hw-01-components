import {
  StatsWrapper,
  StatsTitle,
  StatsList,
  StatsItem,
} from '../Statistics/Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <StatsWrapper>
      {title && <StatsTitle>{title}</StatsTitle>}

      <StatsList>
        {stats.map(({ id, label, percentage }) => {
          return (
            <StatsItem key={id}>
              <span>{label}</span>
              <span>{percentage}</span>
            </StatsItem>
          );
        })}
      </StatsList>
    </StatsWrapper>
  );
};
