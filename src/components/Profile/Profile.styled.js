import styled from '@emotion/styled';

export const ProfileContainer = styled.div`
  min-width: 300px;
  display: flex;
  border: 1px solid #c2c2c2;
  border-radius: 5px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px;

  img {
    display: block;
    height: 150px;
    width: 150px;
    border-radius: 50%;
    border: 1px solid #c2c2c2;
  }
`;

export const Name = styled.p`
  font-weight: bold;
  font-size: 20px;
  margin: 25px 0px;
`;

export const Tag = styled.p`
  font-size: 16px;
  color: grey;
  margin: 0px 0px 15px 0px;
`;

export const Location = styled.p`
  margin: 0;
  font-size: 16px;
`;

export const Stats = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: lightgrey;
  width: 100%;
  font-size: 14px;
  list-style: none;
  padding: 0;
  margin: 0;
  li {
      padding: 25px 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    :not(:first-of-type) {
    border-left: 2px solid #c2c2c2;
    }
`;

export const Label = styled.span`
  margin-bottom: 10px;
`;

export const Quantity = styled.span`
  font-weight: bold;
`;
