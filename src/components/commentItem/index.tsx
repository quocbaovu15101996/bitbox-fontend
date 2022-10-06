import { FC } from 'react';
import moment from 'moment';
import './index.less';
import AvatarDefault from 'assets/post/user.png';

type Props = {
  item: any;
};

const CommentItem: FC<Props> = ({ item }) => {
  return (
    <div className="flex-direction-row comment-item-container">
      <img src={AvatarDefault} alt="" className="image" />
      <div className="comment-item-content">
        <div className="flex-direction-row">
          <p className="comment-text-user-name text-user-name">{item?.user?.username}</p>
          <p className="comment-text-user-name text-time">{moment(item?.createdAt).fromNow()}</p>
        </div>
        <p className="text-content">{item?.text}</p>
      </div>
    </div>
  );
};

export default CommentItem;
