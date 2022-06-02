import styled from 'styled-components';
export const CardWrapper = styled.div`
  padding: 1rem;
  position: relative;
  width: 18rem;
  height: 10rem;
  & .check-icon {
    font-size: 1.5rem;
  }
`;
export const CardNoteContainer = styled.div`
  border: 1px solid transparent;
  box-sizing: border-box;
  overflow: hidden;
  position: relative;
  border-radius: 8px;
  transition-duration: 0.218s;
  transition-timing-function: ease-in;
  width: 18rem;
  background: #000;
  height: 10rem;
  padding: 1rem;
  &:hover {
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  }
`;
export const CardNoteContent = styled.div``;
export const GroupIcons = styled.div`
  width: 4.8rem;
  display: flex;
  justify-content: space-between;
  font-size: 1.3rem;
  position: absolute;
  bottom: 13px;
  right: 13px;
`;
export const CardNoteIcon = styled.div`
  transform: translate(7px, -7px);
  position: absolute;
  right: 18px;
  font-size: 1.3rem;
  top: 15px;
  z-index: 20;
  cursor: pointer;
  & > svg {
    cursor: pointer;
  }
`;
export const WrapperIcon = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: transparent;
  margin-right: 0.5rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    background: #9e9e9e69;
  }
`;
