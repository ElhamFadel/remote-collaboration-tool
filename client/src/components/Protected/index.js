import { Navigate } from 'react-router-dom';
import * as R from '../../routes';
const Protected = ({ isLoggedIn, children }) => {
  console.log(isLoggedIn, 'خوييييي');
  if (!isLoggedIn) {
    console.log('Helllllllllo');
    return <Navigate to={R.SIGN} replace />;
  }
  console.log(children, 'Hiiii');
  return <>{children}</>;
};
export default Protected;
