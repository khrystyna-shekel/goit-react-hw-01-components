import styled from 'styled-components';

export const StatsWrapper = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  margin-bottom: 50px;
  width: 600px;
`;

export const StatsTitle = styled.h2`
  text-transform: uppercase;
  text-align: center;
  padding: 30px 100px;
  font-size: 26px;
  background-color: rgb(241, 241, 252);
`;

export const StatsList = styled.ul`
  display: flex;

  & > li:nth-child(even) {
    background-color: pink;
  }
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px 22px;
  row-gap: 6px;
  width: 25%;
  background-color: rgb(179, 179, 241);
  color: white;
  font-weight: 500;
  transition: all 300ms ease;

  &:hover {
    cursor: pointer;
    scale: 1.2;
  }
`;
