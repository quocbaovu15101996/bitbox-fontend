import { MenuList } from 'interface/layout/menu.interface';

export const mockMenuLandingList: MenuList = [
  {
    name: 'GATEWAR',
    icon: '',
    key: 1,
    show: true,
    opentab: false,
    action: true,
    openPopup: false,
    path: '#',
    dataAnchor: 'GATEWAR',
    children: [
      {
        name: 'Mining',
        icon: '',
        key: 0,
        show: true,
        action: true,
        dataAnchor: 'Nft',
        opentab: false,
        path: '/#Nft'
      },
      {
        name: 'NFT Market',
        icon: '',
        key: 1,
        show: true,
        action: true,
        opentab: false,
        dataAnchor: 'Nft-market',
        path: '/#Nft-market'
      },
      {
        name: 'NFT Item',
        icon: '',
        key: 2,
        show: true,
        action: true,
        opentab: false,
        dataAnchor: 'Nft-item',
        path: '/#Nft-item'
      },
      {
        name: 'GamePlay',
        icon: '',
        key: 3,
        show: true,
        action: true,
        opentab: false,
        dataAnchor: 'Gameplay',
        path: '/#Gameplay'
      }
    ]
  },
  {
    name: 'Ecosystem',
    icon: '',
    key: 0,
    show: true,
    opentab: false,
    action: true,
    openPopup: false,
    dataAnchor: 'Ecosystem',
    path: '/#Ecosystem'
  },
  {
    name: 'Roadmap',
    icon: '',
    key: 5,
    show: true,
    opentab: false,
    action: true,
    openPopup: false,
    dataAnchor: 'Roadmap',
    path: '/#Roadmap'
  },
  {
    name: 'Whitepaper',
    icon: '',
    key: 6,
    show: true,
    opentab: true,
    action: true,
    openPopup: false,
    dataAnchor: 'lightpaper',
    path: 'https://whitepaper.radiantgalaxy.io/'
  }
];
