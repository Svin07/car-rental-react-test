import Header from 'components/Header/Header';
import { Suspense } from 'react';
const { Outlet } = require('react-router-dom');

const Layout = () => {
  return (
    <>
      <div>
        <Header />
      </div>
      <Suspense fallback={'Loading...'}>
        <Outlet />
      </Suspense>
    </>
  );
};
export default Layout;
