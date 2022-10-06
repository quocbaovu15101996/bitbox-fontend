import { likePost } from 'api/feed.api';
import { FC } from 'react';
import CardHeader from './cardHeader';
import './index.less';
import PostMedia from './postMedia';
import PostStatistic from './postStatistic';
import PostTitle from './postTitle';
import { useNavigate } from 'react-router-dom';

type Props = {
  item: PostItem;
  postId: number;
};
const PostCard: FC<Props> = ({ item, postId }) => {
  const navigate = useNavigate();

  const directToPostDetail = () => {
    navigate('/post/' + postId);
  };

  const openOptionsMenu = () => {};

  const onLikePost = async (isLike: string | null) => {
    const response = await likePost(isLike, item?.vote?.data?.id ?? 0, postId);
    console.log('like post', response);
    // if(response.status === 200) {
    //   callbackSuccess()
    // }
    // callbackSuccess, callbackError
  };

  return (
    <div className="post-card">
      <CardHeader
        avatarUrl={item?.user?.data?.attributes?.avatar ?? item.userInfo?.avatar}
        userName={item?.userInfo?.userName ?? item?.user?.data?.attributes?.username}
        creationTs={item?.createdAt}
        directToPostDetail={directToPostDetail}
        onPressOption={openOptionsMenu}
      />
      <PostTitle title={item?.title} directToPostDetail={directToPostDetail} />
      <PostMedia data={item} />
      <PostStatistic
        numLike={item?.upVoteCount * 1}
        numDislike={item?.downVoteCount * 1}
        numCom={item?.commentsCount}
        isLike={item?.vote?.data?.attributes?.type}
        directToPostDetail={directToPostDetail}
        onLikePost={onLikePost}
      />
    </div>
  );
};

export default PostCard;
