import * as S from './style';
import useForm from '../../../hooks/useForm';
const Button = ({ label, color, width, onClick }) => {
  const { dispatch } = useForm();
  return (
    <S.ButtonContainer
      color={color}
      width={width}
      onClick={() =>
        onClick().then((user) => dispatch({ type: 'name', payload: user.displayName }))
      }>
      {label}
    </S.ButtonContainer>
  );
};

export default Button;
