import { useReducer } from 'react';
import { initialState, stateController } from '../store';
import { requestOTP } from '../firebase/utils';
const useForm = () => {
  const [state, dispatch] = useReducer(stateController, initialState);
  // const { email, password, name, phone } = state;
  const handleSubmit = (event) => {
    event.preventDefault();
    requestOTP(state.phone);
    dispatch({ type: 'SUBMIT' });
  };
  return { handleSubmit, state, dispatch };
};
export default useForm;
