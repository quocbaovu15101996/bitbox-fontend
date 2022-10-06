import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Role } from 'interface/user/login';
import { Locale, UserState } from 'interface/user/user';
import { WIDTH_MOBILE, WIDTH_TAB } from 'utils/getGloabal';

const initialState: UserState = {
  // ...getGlobalState(),
  device: /(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent) ? 'MOBILE' : 'DESKTOP',
  collapsed: window.innerWidth <= WIDTH_TAB,
  showSocial: window.innerWidth <= WIDTH_MOBILE,
  isPageHome: window.location.href === window.location.origin + '/' ? true : false,
  noticeCount: 0,
  locale: (localStorage.getItem('locale')! || 'en_US') as Locale,
  menuList: [],
  dataAnchor: '',
  userName: localStorage.getItem('username') || '',
  webview: JSON.parse(localStorage.getItem('webview')!) || {},
  role: (localStorage.getItem('username') || '') as Role,
  visitor: {},
  dataInfoBit: [],
  verifyToken: '',
  authSendCode: false
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserItem(state, action: PayloadAction<Partial<UserState>>) {
      Object.assign(state, action.payload);
    }
  }
});

export const { setUserItem } = userSlice.actions;

export default userSlice.reducer;
