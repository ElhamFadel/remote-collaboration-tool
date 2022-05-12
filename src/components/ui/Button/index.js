import * as S from './style';
const Button = ({ label, color, width, onClick }) => {
  return (
    <S.ButtonContainer color={color} width={width} onClick={onClick}>
      {label}
    </S.ButtonContainer>
  );
};

export default Button;
