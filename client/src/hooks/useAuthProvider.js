import { createContext, useContext } from 'react';
import { initialState } from '../store';
export const creatAuthContext = createContext();
export const useAuthContext = () => useContext(creatAuthContext);
const UserProvider = ({ children }) => (
  <creatAuthContext.Provider value={initialState}>{children}</creatAuthContext.Provider>
);
export default UserProvider;
