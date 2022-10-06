import { CommentOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { FC, useState } from 'react';
import { formatNumberInSingleLetterNotation } from 'utils/Number';
import ButtonInteract from './buttonInteract';
import './index.less';

type Props = {
  numLike: number;
  numDislike: number;
  numCom: number;
  isLike: string | null;
  directToPostDetail?: () => void;
  onLikePost: (isLike: string | null) => void;
};

type State = {
  isLiked: boolean;
  isDisliked: boolean;
  numLike: number;
  numDislike: number;
  numCom: number;
};

const PostStatistic: FC<Props> = ({ numLike, numDislike, numCom, isLike, onLikePost, directToPostDetail }) => {
  const [state, setState] = useState<State>({
    numLike,
    numDislike,
    numCom,
    isLiked: isLike === '1',
    isDisliked: isLike === '0'
  });

  const onPressLike = () => {
    setState(prevState => {
      onLikePost(!prevState.isLiked ? '1' : null);
      return {
        ...prevState,
        isLiked: !prevState.isLiked,
        isDisliked: false,
        numLike: prevState.isLiked ? prevState.numLike - 1 : prevState.numLike + 1,
        numDislike
      };
    });
  };

  const onPressDisLike = () => {
    setState(prevState => {
      onLikePost(!prevState.isDisliked ? '0' : null);
      return {
        ...prevState,
        isDisliked: !prevState.isDisliked,
        isLiked: false,
        numDislike: prevState.isDisliked ? prevState.numDislike - 1 : prevState.numDislike + 1,
        numLike
      };
    });
  };

  return (
    <div className="post-statistic">
      <ButtonInteract
        numberInteract={state.numLike}
        onPress={onPressLike}
        isBtnLike={true}
        isSelected={state.isLiked}
      />
      <ButtonInteract
        numberInteract={state.numDislike}
        onPress={onPressDisLike}
        isBtnLike={false}
        isSelected={state.isDisliked}
        style={{ marginLeft: '12px' }}
      />
      <Button
        onClick={directToPostDetail}
        icon={<CommentOutlined />}
        style={{
          width: '100px',
          borderRadius: '8px',
          marginLeft: '12px'
        }}
      >
        {formatNumberInSingleLetterNotation(numCom)}
      </Button>
      <div className="post-statistic-actions"></div>
    </div>
  );
};

export default PostStatistic;
