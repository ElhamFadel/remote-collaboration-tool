import * as S from './style';
import { FcDataRecovery, FcDeleteDatabase } from 'react-icons/fc';
import { AiFillCheckCircle } from 'react-icons/ai';
const CardNote = () => {
  return (
    <S.CardWrapper>
      <S.CardNoteIcon>
        <AiFillCheckCircle className="check-icon" />
      </S.CardNoteIcon>
      <S.CardNoteContainer>
        <S.CardNoteContent>TExt jnkncjkfnvjfjn</S.CardNoteContent>
        <S.GroupIcons>
          <S.WrapperIcon>
            <FcDataRecovery />
          </S.WrapperIcon>
          <S.WrapperIcon>
            <FcDeleteDatabase />
          </S.WrapperIcon>
        </S.GroupIcons>
      </S.CardNoteContainer>
    </S.CardWrapper>
  );
};

export default CardNote;
