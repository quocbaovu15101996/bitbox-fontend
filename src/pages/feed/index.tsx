import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import './index.less';

type Props = {
  label: string;
  to: string;
  activeIndex: number;
  id: number;
  onClick: (id: number) => void;
};

const CustomLink: FC<Props> = ({ label, to, activeIndex, id, onClick }) => {
  const onPressLink = () => {
    onClick(id);
  };
  const isActive = activeIndex === id;

  return (
    <Link to={to} onClick={onPressLink}>
      <div className={isActive ? 'topic-tab active-tab' : 'topic-tab'}>
        <p className={isActive ? 'topic-tab-text active-text' : 'topic-tab-text'}>{label}</p>
      </div>
    </Link>
  );
};

const Feed: FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(1);

  const selectLink = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="feed">
      <CustomLink label={'Hot'} to={'/feed/1'} activeIndex={activeIndex} id={1} onClick={selectLink} />
      <CustomLink label={'Trending'} to={'/feed/2'} activeIndex={activeIndex} id={2} onClick={selectLink} />
      <CustomLink label={'Fresh'} to={'/feed/3'} activeIndex={activeIndex} id={3} onClick={selectLink} />
    </div>
  );
};

export default Feed;
