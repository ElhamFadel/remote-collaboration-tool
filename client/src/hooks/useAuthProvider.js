import { createContext, useContext, useEffect } from 'react';
import { initialState } from '../store';
import { getUserInfo } from '../firebase/utils';
import useForm from '../hooks/useForm';

export const creatAuthContext = createContext();
export const useAuthContext = () => useContext(creatAuthContext);
const UserProvider = ({ children }) => {
  const { dispatch } = useForm();
  useEffect(() => {
    getUserInfo()
      .then(({ name, email, photo, accessToken }) => {
        dispatch({ type: 'name', payload: name });
        dispatch({ type: 'email', payload: email });
        dispatch({ type: 'photo', payload: photo });
        dispatch({ type: 'accessToken', payload: accessToken });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return <creatAuthContext.Provider value={initialState}>{children}</creatAuthContext.Provider>;
};
export default UserProvider;
