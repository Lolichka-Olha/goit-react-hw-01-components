import styled from '@emotion/styled';

export const Table = styled.table`
  width: 60%;
  text-align: center;
  border-radius: 6px;
  margin-top: 40px;
`;

export const TableHead = styled.thead`
  text-transform: uppercase;
  border: 1px solid #c2c2c2;
  background-color: #ffffff;
   th {
    min-width: 200px;
    font-size: 16px;
    padding: 10px;
    color: #ffffff;
    background-color: rgb(151, 235, 285);
`;

export const TableBody = styled.tbody`
  width: 100%;
  background-color: #ffffff;

  tr {
    border: 1px solid #c2c2c2;
    height: 30px;
    :nth-of-type(2n) {
      background-color: lightgrey;
    }
  }

  td {
    :first-of-type {
      text-transform: capitalize;
    }
  }
`;
