import { lazy, FC } from 'react';
import { PartialRouteObject } from 'react-router';
import { useRoutes } from 'react-router-dom';
import WrapperRouteComponent from './config';
import LayoutLandingPage from 'pages/layout';
const NotFound = lazy(() => import(/* webpackChunkName: "404"*/ 'pages/404'));
const Category = lazy(() => import(/* webpackChunkName: "category"*/ 'pages/category'));
const PostDetail = lazy(() => import(/* webpackChunkName: "post-detail"*/ 'pages/post-detail'));
const PostList = lazy(() => import(/* webpackChunkName: "postList"*/ 'components/postList'));

const routeList: PartialRouteObject[] = [
  {
    path: '/',
    element: <WrapperRouteComponent element={<LayoutLandingPage />} titleId="" description="" />,
    children: [
      {
        path: '/',
        element: <WrapperRouteComponent element={<PostList />} titleId="" description="" />
      },
      {
        path: 'feed/:topicId',
        element: <WrapperRouteComponent element={<Category />} titleId="" description="" />
      },
      {
        path: 'post/:postId',
        element: <WrapperRouteComponent element={<PostDetail />} titleId="" description="" />
      },
      {
        path: '*',
        element: <WrapperRouteComponent element={<NotFound />} titleId="" description="" />
      }
    ]
  }
];

const RenderRouter: FC = () => {
  const element = useRoutes(routeList);
  return element;
};

export default RenderRouter;
