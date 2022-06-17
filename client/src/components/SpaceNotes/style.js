import styled from 'styled-components';
export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: #e7e7e7;
  width: 85%;
  margin-inline-start: auto;
  position: relative;
`;
export const ContainerWhiteBoard = styled.div`
  width: 100%;
  height: 80vh;
  background: #e7e7e7;
  width: 85%;
  position: relative;
  padding: 1rem;
`;
export const UserAvater = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: absolute;
  top: ${(props) => props.coordinates.y}px;
  left: ${(props) => props.coordinates.x}px;
  border: 1px solid #e7e7e7;
  background: #fff;
`;
