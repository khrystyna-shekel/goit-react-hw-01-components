import styled from 'styled-components';

export const Table = styled.table`
  text-transform: capitalize;
  text-align: center;
  width: 600px;
  margin: 0 auto;
  padding: 10px 20px;
  background-color: rgb(179, 179, 241);
  color: white;
`;

export const StyledTr = styled.tr`
  text-transform: uppercase;
  width: 200px;
`;

export const StyledTh = styled.th`
  padding: 10px 0px;
  background-color: white;
  color: black;
  width: 200px;
`;

export const BodyTr = styled.tr`
  border: 1px solid pink;
  font-weight: 600;
`;

export const BodyTd = styled.td`
  text-align: center;
  padding: 5px 0;
  border: 1px solid pink;

  &:first-child {
    text-align: start;
    padding-left: 10%;
  }
`;
