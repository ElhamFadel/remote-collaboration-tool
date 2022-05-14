import { createContext, useContext } from 'react';
import { initialState } from '../store';
export const userContext = createContext();
export const useUserContext = () => useContext(userContext);
const UserProvider = ({ children }) => (
  <UserProvider.Provider value={initialState}>{children}</UserProvider.Provider>
);
export default UserProvider;
