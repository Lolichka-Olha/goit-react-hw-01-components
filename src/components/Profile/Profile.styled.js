import styled from '@emotion/styled';

export const ProfileContainer = styled.div`
  width: 200px;
  display: flex;
  border: 1px solid #c2c2c2;
  border-radius: 5px;
  padding-top: 30px;
  padding-left: 30px;
  padding-right: 30px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #010101;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    margin-bottom: 20px;
    display: block;
    height: 100px;
    width: 100px;
    border-radius: 50%;
  }
`;

export const Name = styled.p`
  font-weight: bold;
  font-size: 18px;
`;

export const Tag = styled.p`
  font-size: 16px;
  color: grey;
  margin-top: 5px;
  margin-bottom: 5px;
`;

export const Location = styled.p`
  margin: 0;
  font-size: 16px;
  color: grey;
`;

export const Stats = styled.ul`
  display: flex;
  flex-direction: row;

  list-style: none;
  padding: 30px 0;
  margin: 0;
`;

export const Label = styled.span`
  padding-bottom: 6px;
`;

export const Quantity = styled.span`
  display: block;
  font-weight: bold;
`;
