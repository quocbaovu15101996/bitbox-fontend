import { fetchPostsInTopic } from 'api/feed.api';
import { FC, useCallback, useEffect, useRef, useState } from 'react';
import PostCard from 'components/postCard';
import useWindowDimensions from 'hooks/useWindowDimensions';
import LoadingData from 'components/loading-spinner/loading-data';
import './index.less';

type Props = {
  topicId?: string;
};

type State = {
  posts: AttributesPostItem[];
  loading: boolean;
  loadMore: boolean;
};

const PostList: FC<Props> = ({ topicId }) => {
  const [state, updateState] = useState<State>({
    posts: [],
    loading: true,
    loadMore: false
  });
  const noMoreData = useRef<boolean>(false);
  const isLoadData = useRef<boolean>(false);
  const page = useRef<number>(1);

  const windowDimensions = useWindowDimensions();

  useEffect(() => {
    if (!state.loading) {
      const scroller = document.getElementById('scroller');
      scroller?.addEventListener('scroll', event => {
        if (scroller.scrollTop > scroller.scrollHeight - windowDimensions.height - 100 && !noMoreData.current) {
          updateState(prevState => ({
            ...prevState,
            loadMore: true
          }));
        }
      });
    }
    return () => {
      const scroller = document.getElementById('scroller');
      scroller?.removeEventListener('scroll', event => undefined);
    };
  }, [state.loading, windowDimensions.height]);

  const onSuccess = (data: any[]) => {
    console.log('check postlist', data);
    if (data?.length < 10) {
      noMoreData.current = true;
    }
    isLoadData.current = false;
    updateState(prevState => ({
      ...prevState,
      posts: [...prevState.posts, ...data],
      loading: false,
      loadMore: false
    }));
  };

  const onError = () => {
    updateState(prevState => ({
      ...prevState,
      loading: false,
      loadMore: false
    }));
  };

  const getData = useCallback(async () => {
    const response = await fetchPostsInTopic(Number(topicId ?? 1), page.current);
    if (response.status === 200) {
      onSuccess(response.data?.data);
    } else {
      onError();
    }
  }, [topicId]);

  useEffect(() => {
    if (state.loadMore && !isLoadData.current) {
      console.log('loadmore ====');
      page.current += 1;
      getData();
      isLoadData.current = true;
    }
  }, [getData, state.loadMore]);

  useEffect(() => {
    updateState(prevState => ({
      ...prevState,
      posts: [],
      loading: true,
      loadMore: false
    }));
  }, [topicId]);

  useEffect(() => {
    if (state.loading) {
      noMoreData.current = false;
      getData();
    }
  }, [getData, state.loading]);

  if (state.loading) {
    return (
      <div className="loading">
        <LoadingData />
      </div>
    );
  }
  return (
    <div className="post-list" id="scroller">
      {state.posts.map((item: AttributesPostItem, index: number) => (
        <PostCard item={item.attributes} postId={item.id} key={'post' + index} />
      ))}
      {state.loadMore && <LoadingData />}
    </div>
  );
};

export default PostList;
