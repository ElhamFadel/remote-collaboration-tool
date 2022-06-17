import * as S from './styles';
const Input = ({ id, label, type, placeholder, onChange, value }) => {
  return (
    <S.InputContainer id={`form-input-${id}`}>
      <S.Label>{label}*</S.Label>
      <S.InputStyled
        placeholder={placeholder}
        forhtml={label}
        type={type}
        value={value}
        onChange={onChange}
      />
    </S.InputContainer>
  );
};

export default Input;
