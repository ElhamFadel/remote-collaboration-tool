import { useReducer } from 'react';
import { initialState, stateController } from '../store/noteState';
const useStateNote = () => {
  const [state, dispatch] = useReducer(stateController, initialState);
  return { state, dispatch };
};
export default useStateNote;
