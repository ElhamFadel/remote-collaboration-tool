import * as S from './style';
import WhiteBoard from './WhiteBoard';
import { AddNoteBtn } from '../ui';
import AppBar from '../AppBar';
const SpaceNotes = () => {
  return (
    <S.Container>
      <AppBar />
      <WhiteBoard />
      <AddNoteBtn />
    </S.Container>
  );
};

export default SpaceNotes;
