import { Input } from '../ui';
import * as S from './styles';
import useForm from '../../hooks/useForm';
const dataForm = [
  {
    id: 'name',
    label: 'Name',
    type: 'text',
    placeholder: 'Enter Name'
  },
  {
    id: 'phone',
    label: 'Phone',
    type: 'text',
    placeholder: 'Enter Phone'
  },
  {
    id: 'password',
    label: 'Password',
    type: 'password',
    placeholder: 'Enter Password'
  }
];
const Form = () => {
  const { handleSubmit, state, dispatch } = useForm();
  return (
    <S.Form>
      {dataForm.map(({ id, label, type, placeholder }) => (
        <Input
          key={id}
          label={label}
          type={type}
          placeholder={placeholder}
          value={state[id]}
          onChange={(e) => dispatch({ type: id, payload: e.target.value })}
        />
      ))}
      <S.Submit type="submit" value="Submit" onClick={handleSubmit} id="recaptcha-container" />
    </S.Form>
  );
};

export default Form;
