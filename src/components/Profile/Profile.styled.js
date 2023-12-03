import styled from 'styled-components';

export const StyledCard = styled.div`
  display: flex;
  margin: 50px auto;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 300px;
  max-height: 450px;
  border-radius: 10px;
  box-shadow: 1px 2px 3px 4px lightgray;
`;

export const StyledDesc = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
`;

export const StyledAva = styled.img`
  border-radius: 50%;
  display: block;
  margin: 40px 0;
  max-width: 150px;
  outline: 2px solid lightgray;
`;

export const StyledUName = styled.p`
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 10px;
`;

export const StyledUInfo = styled.p`
  margin-bottom: 8px;
  color: rgb(151, 149, 149);
`;

export const StyledStats = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 100%;
  border-top: 2px solid lightgray;

  & > li:not(:last-child) {
    border-right: 2px solid lightgray;
  }
`;

export const StyledStatsItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
  padding: 10px 15px;
  width: 34%;
  background-color: rgb(241, 241, 252);
  font-weight: 500;
  color: rgb(151, 149, 149);
`;

export const StyledNum = styled.span`
  font-weight: 700;
  color: rgb(34, 34, 36);
`;
