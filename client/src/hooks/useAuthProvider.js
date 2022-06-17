import { createContext, useContext, useEffect } from 'react';
import { initialState } from '../store';
export const creatAuthContext = createContext();
export const useAuthContext = () => useContext(creatAuthContext);
const UserProvider = ({ children }) => {
  useEffect(() => {
    // if (user) {
    //   window.localStorage.setItem('auth', 'true');
    //   user.getIdToken(true).then((tokenId) => setToken(tokenId));
    //   setError(null);
    // }
  }, []);
  return <creatAuthContext.Provider value={initialState}>{children}</creatAuthContext.Provider>;
};
export default UserProvider;
