import * as S from './style';
import useForm from '../../../hooks/useForm';
const Button = ({ label, color, width, onClick }) => {
  const { dispatch } = useForm();
  return (
    <S.ButtonContainer
      color={color}
      width={width}
      onClick={() =>
        onClick().then(({ name, email, photo, accessToken }) => {
          dispatch({ type: 'name', payload: name });
          dispatch({ type: 'email', payload: email });
          dispatch({ type: 'photo', payload: photo });
          dispatch({ type: 'accessToken', payload: accessToken });
          if (accessToken) {
            window.localStorage.setItem('accessToken', 'true');
            console.log('Hiallllllllllll');
          }
        })
      }>
      {label}
    </S.ButtonContainer>
  );
};

export default Button;
