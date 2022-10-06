import { FC } from 'react';
// eslint-disable-next-line
import { Route } from 'react-router-dom';
import { RouteProps } from 'react-router';

const PrivateRoute: FC<RouteProps> = props => {
  // const { logged } = useAppState(state => state.auth);
  // const navigate = useNavigate();
  // const { formatMessage } = useLocale();
  // const location = useLocation();

  // return logged ? <Route {...props} /> : <Navigate to={`/login${'?from=' + encodeURIComponent(location.pathname)}`} />;
  return <Route {...props} />;
};

export default PrivateRoute;
