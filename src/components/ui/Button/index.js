import * as S from './style';
import useForm from '../../../hooks/useForm';
const Button = ({ label, color, width, onClick }) => {
  const { dispatch } = useForm();
  return (
    <S.ButtonContainer
      color={color}
      width={width}
      onClick={() =>
        onClick().then(({ name, email, photo }) => {
          dispatch({ type: 'name', payload: name });
          dispatch({ type: 'email', payload: email });
          dispatch({ type: 'photo', payload: photo });
        })
      }>
      {label}
    </S.ButtonContainer>
  );
};

export default Button;
