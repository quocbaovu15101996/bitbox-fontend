import { createComment, fetchDataPostDetail } from 'api/postDetail.api';
import CommentBox from 'components/commentBox';
import CommentItem from 'components/commentItem';
import LoadingData from 'components/loading-spinner/loading-data';
import PostCard from 'components/postCard';
import { collection, getFirestore, onSnapshot, orderBy, query } from 'firebase/firestore';
import { FC, useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router';

type State = {
  loading: boolean;
  post: AttributesPostItem | null;
  comments: CommentItem[];
};

const PostDetail: FC = () => {
  let { postId } = useParams();
  const [state, updateState] = useState<State>({
    loading: true,
    post: null,
    comments: []
  });
  const unsubscribeGetComments = useRef<() => void>();
  const db = getFirestore();

  const getData = async () => {
    const res = await fetchDataPostDetail(postId);
    if (res.status === 200) {
      updateState(prevState => ({
        ...prevState,
        post: res.data?.data,
        loading: false
      }));
    } else {
      updateState(prevState => ({
        ...prevState,
        loading: false
      }));
    }
  };

  const getListComment = () => {
    const q = query(collection(db, `Posts/${postId}/comments`), orderBy('createdAt', 'desc'));
    unsubscribeGetComments.current = onSnapshot(q, querySnapshot => {
      const data: CommentItem[] = [];
      querySnapshot.forEach(doc => {
        data.push(doc.data() as CommentItem);
      });
      updateState(prevState => ({
        ...prevState,
        comments: data
      }));
      console.log('comments: ', data);
    });
  };

  useEffect(() => {
    getData();
    getListComment();
    return () => {
      unsubscribeGetComments.current?.();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onCreateComment = (comment: string) => {
    createComment(comment, postId);
  };

  if (state.loading) {
    return (
      <div className="post-detail">
        <LoadingData />
      </div>
    );
  }
  if (!state.post?.id) return null;
  return (
    <div className="post-detail">
      <PostCard item={state.post.attributes} postId={state.post.id} />
      <CommentBox onCreateComment={onCreateComment} />
      {state.comments.map((item, index) => (
        <CommentItem item={item} key={'comment' + index} />
      ))}
    </div>
  );
};

export default PostDetail;
