import * as S from './styles';
const Input = ({ id, label, type, placeholder }) => {
  return (
    <S.InputContainer id={`form-input-${id}`}>
      <S.Label>{label}*</S.Label>
      <S.InputStyled placeholder={placeholder} forhtml={label} type={type} />
    </S.InputContainer>
  );
};

export default Input;
