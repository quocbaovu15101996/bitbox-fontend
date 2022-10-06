import { FC } from 'react';
import { Route } from 'react-router-dom';
import { RouteProps } from 'react-router';
import PrivateRoute from './pravateRoute';
import { useIntl } from 'react-intl';
import { Helmet } from 'react-helmet';

export interface WrapperRouteProps extends RouteProps {
  /** document title locale id */
  titleId: string;
  description: string;
  /** authorization？ */
  auth?: boolean;
}

const WrapperRouteComponent: FC<WrapperRouteProps> = ({ titleId, description, auth, ...props }) => {
  const { formatMessage } = useIntl();
  const WitchRoute = auth ? PrivateRoute : Route;
  // if (titleId) {
  //   document.title = formatMessage({
  //     id: titleId
  //   });
  // }
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{!!titleId ? formatMessage({ id: titleId }) : ''}</title>
        <meta name="title" content={!!titleId ? formatMessage({ id: titleId }) : ''} />
        <meta name="description" content={!!description ? formatMessage({ id: description }) : ''} />
      </Helmet>
      <WitchRoute {...props} />
    </>
  );
};

export default WrapperRouteComponent;
