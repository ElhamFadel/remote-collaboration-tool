import * as S from './styles';
import { RowSign } from '../ui';
import { invisibleRecaptcha } from '../../firebase/utils';
const Register = () => {
  return (
    <S.RegisterContainer>
      {/* <S.RegisterLogo /> */}
      <RowSign />
      <button onClick={invisibleRecaptcha}>invisibleRecaptcha</button>
    </S.RegisterContainer>
  );
};

export default Register;
