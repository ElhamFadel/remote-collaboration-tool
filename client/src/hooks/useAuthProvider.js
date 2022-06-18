import { createContext, useContext, useEffect } from 'react';
import { initialState } from '../store';
import { getUserInfo } from '../firebase/utils';
export const creatAuthContext = createContext();
export const useAuthContext = () => useContext(creatAuthContext);
const UserProvider = ({ children }) => {
  useEffect(() => {
    console.log(getUserInfo(), 'getUserInfo');
  }, []);
  return <creatAuthContext.Provider value={initialState}>{children}</creatAuthContext.Provider>;
};
export default UserProvider;
