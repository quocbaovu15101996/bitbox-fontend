import moment from 'moment';
import { FC } from 'react';
import { Image } from 'antd';
import './index.less';

type Props = {
  avatarUrl: any;
  userName: string;
  creationTs: string;
  directToPostDetail: () => void;
  onPressOption: () => void;
};

const CardHeader: FC<Props> = ({ avatarUrl, userName, creationTs, directToPostDetail, onPressOption }) => {
  return (
    <div className="card-header">
      <Image width={20} height={20} src={avatarUrl} className="card-header-avatar" />
      <p className="card-header-text">
        {userName} · {moment(creationTs).startOf('hour').fromNow()}
      </p>
    </div>
  );
};

export default CardHeader;
