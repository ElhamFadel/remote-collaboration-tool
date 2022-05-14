import { Input } from '../ui';
import * as S from './styles';
const dataForm = [
  {
    id: 1,
    label: 'Name',
    type: 'text',
    placeholder: 'Enter Name'
  },
  {
    id: 2,
    label: 'Phone',
    type: 'text',
    placeholder: 'Enter Phone'
  },
  {
    id: 3,
    label: 'Password',
    type: 'password',
    placeholder: 'Enter Password'
  }
];
const Form = () => {
  return (
    <S.Form>
      {dataForm.map(({ id, label, type, placeholder }) => (
        <Input key={id} label={label} type={type} placeholder={placeholder} />
      ))}
      <S.Submit type="submit" value="Submit" />
    </S.Form>
  );
};

export default Form;
