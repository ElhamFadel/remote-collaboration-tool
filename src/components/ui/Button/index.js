import * as S from './style';
const Button = ({ label, color, width }) => {
  return (
    <S.ButtonContainer color={color} width={width}>
      {label}
    </S.ButtonContainer>
  );
};

export default Button;
