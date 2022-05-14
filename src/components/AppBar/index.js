import Search from '../Search';
import { useAuthContext } from '../hooks/useAuthProvider';
import * as S from './style';

const AppBar = () => {
  const { name, photo } = useAuthContext();
  return (
    <S.StyledAppBar>
      <Search />
      <S.Greeting>
        <img src={photo || 'https://www.w3schools.com/howto/img_avatar.png'} alt="logo" />
        <span>Hello,</span>
        <span>{name}</span>
      </S.Greeting>
    </S.StyledAppBar>
  );
};

export default AppBar;
