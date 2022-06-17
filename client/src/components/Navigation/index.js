import { BrowserRouter as Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import * as R from '../../routes';
import { Auth, Space } from '../../pages';
import Protected from '../Protected';
const Navigation = () => {
  const [isLoggedIn] = useState(false);
  return (
    <Routes>
      <Route
        path={R.SPACE}
        element={
          <Protected isLoggedIn={isLoggedIn}>
            <Space />
          </Protected>
        }
      />
      <Route path={R.SIGN_UP} element={Auth} />
    </Routes>
  );
};
export default Navigation;
