import { BrowserRouter as Routes, Route } from 'react-router-dom';
import * as R from '../../routes';
import { Auth, Space } from '../../pages';
const Navigation = () => {
  return (
    <Routes>
      <Route path={R.SPACE} element={Space} />
      <Route path={R.SIGN_UP} element={Auth} />
    </Routes>
  );
};
export default Navigation;
