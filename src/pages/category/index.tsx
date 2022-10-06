import PostList from 'components/postList';
import { FC } from 'react';
import { useParams } from 'react-router';

const Category: FC = () => {
  let { topicId } = useParams();
  return <PostList topicId={topicId} />;
};

export default Category;
