import { FC } from 'react';
import './index.less';

type Props = {
  title: string;
  directToPostDetail: () => void;
};

const PostTitle: FC<Props> = ({ title, directToPostDetail }) => {
  return (
    <p className="post-title" onClick={directToPostDetail}>
      {title}
    </p>
  );
};

export default PostTitle;
