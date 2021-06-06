import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  position: relative;
  flex-direction: row;
  height: 1000px;
  margin: auto;
  background-color: #5fc2ff;
  justify-content: space-between;
  @media screen and (max-width: 1200px) {
  }
`;
export const TaskContainer = styled.div`
  max-width: 350px;
  width: 100%;
  background-color: #ebecf0;
  margin-top: 50px;
  border-radius: 15px;
  display: flex;
  position: relative;
  height: 600px;
  flex-direction: column;
  justify-content: flex-start;
  @media screen and (max-width: 1200px) {
  }
`;
export const TaskTitle = styled.div`
  max-width: 350px;
  width: 100%;
  align-items: flex-start;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  position: relative;
  height: 40px;
  justify-content: center;
  @media screen and (max-width: 1200px) {
  }
`;
export const TaskTitleText = styled.h2`
  font-size: 16px;
  color: gray;
  font-weight: 700;
`;

export const Card = styled.div`
  width: 100%;
  margin-top: 5px;
  position: relative;
  display: flex;
  height: 80px;
  max-width: 300px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 10px;

  background-color: ${(props) => props.color};
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 700;
`;
export const CardTask = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 20px;
  max-width: 330px;
`;
export const CardTitleText = styled.p`
  font-size: 13px;
  color: black;
  font-weight: 500;
`;
