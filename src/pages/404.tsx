import { Link } from 'react-router-dom';

const NotFoundPage: React.FC<{}> = () => {
  return (
    <div className="_comming flex flex-col h-screen items-center justify-center">
      <div className="_comming-title">404</div>
      <div className="_comming-content">Page not found.</div>
      <Link to={'/'} className="_comming-backtohome outline-none text-white">
        Homepage
      </Link>
    </div>
  );
};

export default NotFoundPage;
