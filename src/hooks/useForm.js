import { useReducer } from 'react';
import { initialState, stateController } from '../store';

const useForm = () => {
  const [state, dispatch] = useReducer(stateController, initialState);
  const { email, password, name, phone } = state;
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(state, 'Hiiiiiiiiiiiii');
  };

  return { handleSubmit, state, dispatch };
};
export default useForm;
