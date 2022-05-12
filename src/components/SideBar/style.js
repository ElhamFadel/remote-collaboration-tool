import styled from 'styled-components';
export const SideBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 15%;
  flex: 1;
  height: 100vh;
  background: linear-gradient(to bottom, #837bce 0%, #837bce 100%);
  z-index: 20;
  /* &::after {
    content: '';
    position: absolute;
    right: -10px;
    top: 20%;
    width: 60px;
    height: 75px;
    background-color: #4e6e29;
    border-radius: 80px;
    z-index: 0;
  } */
`;
