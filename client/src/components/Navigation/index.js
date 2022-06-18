import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useLayoutEffect } from 'react';
import * as R from '../../routes';
import { Auth, Space } from '../../pages';
import Protected from '../Protected';
const Navigation = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useLayoutEffect(() => {
    if (window.localStorage.getItem('accessToken')) {
      setIsLoggedIn(true);
    }
  });
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={R.SPACE}
          element={
            <Protected isLoggedIn={isLoggedIn}>
              <Space />
            </Protected>
          }
          exact
        />
        <Route path={R.SIGN} element={<Auth />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Navigation;
