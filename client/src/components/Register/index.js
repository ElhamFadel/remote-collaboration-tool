import * as S from './styles';
import { RowSign } from '../ui';
import Form from '../Form';
const Register = () => {
  return (
    <S.RegisterContainer>
      {/* <S.RegisterLogo /> */}
      <>
        <RowSign />
        <Form />
      </>
    </S.RegisterContainer>
  );
};

export default Register;
