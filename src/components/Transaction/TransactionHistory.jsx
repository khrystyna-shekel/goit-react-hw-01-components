import {
  Table,
  StyledTr,
  StyledTh,
  BodyTr,
  BodyTd,
} from './Transaction.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <thead>
        <StyledTr>
          <StyledTh>Type</StyledTh>
          <StyledTh>Amount</StyledTh>
          <StyledTh>Currency</StyledTh>
        </StyledTr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <BodyTr key={id}>
            <BodyTd>{type}</BodyTd>
            <BodyTd>{amount}</BodyTd>
            <BodyTd>{currency}</BodyTd>
          </BodyTr>
        ))}
      </tbody>
    </Table>
  );
};
