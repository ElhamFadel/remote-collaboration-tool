import Search from '../Search';
import styled from 'styled-components';
const AppBar = () => {
  return (
    <StyledAppBar>
      <Search />
      <Greeting>
        <img src="https://www.w3schools.com/howto/img_avatar.png" alt="logo" />
        <span>Hello,</span>
        <span>John</span>
      </Greeting>
    </StyledAppBar>
  );
};

export default AppBar;
const StyledAppBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  padding: 0 10px;
  height: 60px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;
const Greeting = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
  }
  span {
    font-size: 0.9rem;
    color: #000;
  }
`;
