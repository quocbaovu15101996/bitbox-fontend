import React, { FC } from 'react';
import './index.less';
import house from 'assets/sideBar/house.png';
import trend from 'assets/sideBar/trend.png';
import fresh from 'assets/sideBar/fresh.png';

const SideBar: FC = () => {
  return (
    <div className="side-bar">
      <p className="side-bar-title">BitBox</p>
      {TAB_PRIMARY.map((item, index) => (
        <div key={'tab-primary' + index} className="side-bar-tab">
          <img src={item.icon} alt="house" className="side-bar-image" />
          <p className="side-bar-tab-title">{item.name}</p>
        </div>
      ))}
      <p className="side-bar-title side-bar-popular">Popular</p>
      {POPULAR.map((item, index) => (
        <div key={'topic-popular' + index} className="side-bar-tab">
          <img
            src={'https://miscmedia-9gag-fun.9cache.com/images/thumbnail-facebook/1557376304.186_U5U7u5_100x100wp.webp'}
            alt=""
            className="side-bar-image"
          />
          <p className="tab-title">{item.name}</p>
        </div>
      ))}
    </div>
  );
};

export default SideBar;

const TAB_PRIMARY = [
  {
    id: 1,
    name: 'Hot',
    icon: house
  },
  {
    id: 2,
    name: 'Trending',
    icon: trend
  },
  {
    id: 3,
    name: 'Fresh',
    icon: fresh
  },
  {
    id: 4,
    name: 'Top',
    icon: fresh
  },
  {
    id: 5,
    name: 'Vietname',
    icon: fresh
  }
];

const POPULAR = [
  {
    id: 1,
    name: 'Funny'
  },
  {
    id: 2,
    name: 'NSFW'
  },
  {
    id: 3,
    name: 'Girl'
  },
  {
    id: 4,
    name: 'WFT'
  },
  {
    id: 5,
    name: 'Cryptocurrency'
  },
  {
    id: 6,
    name: 'Anime & Manga'
  }
];
