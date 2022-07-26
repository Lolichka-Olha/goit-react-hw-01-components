import styled from '@emotion/styled';

export const StatisticsSection = styled.section`
  border: 1px solid #c2c2c2;
  border-radius: 5px;
  background-color: #ffffff;
  margin-top: 40px;
  min-width: 350px;
`;

export const Title = styled.h2`
  font-size: 24px;
  text-align: center;
  text-transform: uppercase;
  padding: 35px;
  margin: 0;
`;

export const StatList = styled.ul`
  display: flex;
  justify-content: space-around;
  width: 100%;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const Item = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  border: 1px solid #c2c2c2;
  border-radius: 2px;
  background-color: ${props => props.backgroundColor};
`;

export const Label = styled.span`
  margin-bottom: 6px;
  font-size: 16px;
  color: lightgrey;
`;

export const Percentage = styled.span`
  font-size: 24px;
  color: #ffffff;
`;
