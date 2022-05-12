import * as S from './style';
const Button = ({label,color}) => {
  return (
    <S.ButtonContainer color={color}>
      {label}
    </S.ButtonContainer>
  )
}

export default Button