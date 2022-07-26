import styled from '@emotion/styled';

export const FriendContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
  padding: 0;
`;

export const FriendItem = styled.li`
  display: flex;
  align-items: center;
  min-width: 250px;
  margin-top: 20px;
  padding: 10px;
  border: 1px solid #c2c2c2;
  border-radius: 5px;
  background-color: #ffffff;
`;

export const Status = styled.span`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: ${props => (props.online ? 'green' : 'red')};
`;

export const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-left: 15px;
`;

export const Name = styled.p`
  font-weight: bold;
  font-size: 18px;
  margin-left: 25px;
`;
