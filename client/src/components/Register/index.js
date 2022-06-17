import * as S from './styles';
import { RowSign } from '../ui';
import { useAuthContext } from '../../hooks/useAuthProvider';
import Form from '../Form';
import { useEffect } from 'react';
const Register = () => {
  const { isSubmitting, accessToken } = useAuthContext();
  console.log(isSubmitting, 'isSubmitting', accessToken, 'accessToken');
  useEffect(() => {
    if (accessToken) {
      window.localStorage.setItem('accessToken', 'true');
      console.log('Hiallllllllllll');
    }
  }, [accessToken]);
  return (
    <S.RegisterContainer>
      {/* <S.RegisterLogo /> */}
      {isSubmitting ? (
        <h1>Hellooooooo</h1>
      ) : (
        <>
          {accessToken}
          <RowSign />
          <Form />
        </>
      )}
    </S.RegisterContainer>
  );
};

export default Register;
