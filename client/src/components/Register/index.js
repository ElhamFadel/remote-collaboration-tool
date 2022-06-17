import * as S from './styles';
import { RowSign } from '../ui';
import { useAuthContext } from '../../hooks/useAuthProvider';
import Form from '../Form';
const Register = () => {
  const { isSubmitting } = useAuthContext();
  console.log(isSubmitting, 'isSubmitting');
  return (
    <S.RegisterContainer>
      {/* <S.RegisterLogo /> */}
      {isSubmitting ? (
        <h1>Hellooooooo</h1>
      ) : (
        <>
          <RowSign />
          <Form />
        </>
      )}
    </S.RegisterContainer>
  );
};

export default Register;
