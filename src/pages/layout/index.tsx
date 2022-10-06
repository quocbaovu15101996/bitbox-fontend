import { FC, Suspense } from 'react';
import { Outlet } from 'react-router';
import Header from '../../components/header';
import SideBar from '../sideBar';
import Feed from '../feed';
import './index.less';

const Layout: FC = () => {
  return (
    <div>
      <div className="container">
        <Header />
      </div>
      <div className="content">
        <SideBar />
        <div className="flex flex-col">
          <Feed />
          <Suspense fallback={<h1>Loading profile...</h1>}>
            <Outlet />
          </Suspense>
        </div>
        <div style={{ width: 240 }} />
      </div>
    </div>
  );
};

export default Layout;
