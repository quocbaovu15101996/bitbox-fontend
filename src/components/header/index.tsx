import { Button, Dropdown, Menu, Modal } from 'antd';
import { submitLogin } from 'api/login.api';
import Login from 'components/login';
import useModal from 'hooks/useModal';
import { FC, useState } from 'react';
import './index.less';
import menu from 'assets/header/menu.png';
import CreatePost from 'components/createPost';
import { useDispatch, useSelector } from 'react-redux';
import { loginSuccess, logOut } from 'stores/login/login.actions';
import AvatarDefault from 'assets/post/user.png';

const Header: FC = () => {
  const { isShowing, showModal, closeModal } = useModal();
  const [showPostModal, updateShowPostModal] = useState(false);
  const login = useSelector((state: any) => state.login);

  const dispatch = useDispatch();

  const onSubmitLogin = async (data: any) => {
    try {
      const response = await submitLogin(data.username, data.password);
      console.log('data login response', response);
      if (response.status === 200) {
        dispatch(loginSuccess(response.data));
        closeModal();
      }
    } catch (err) {
      console.log('login error', err);
    }
  };

  const createPost = () => {
    updateShowPostModal(true);
  };

  const closeModalCreatePost = () => {
    updateShowPostModal(false);
  };

  const eventLogOut = () => {
    dispatch(logOut());
  };

  const listOptions = (
    <Menu>
      <Menu.Item disabled key={'my-profile'}>
        <p>My Profile</p>
      </Menu.Item>
      <Menu.Item disabled key={'settings'}>
        <p>Settings</p>
      </Menu.Item>
      <Menu.Item key={'logout'}>
        <button onClick={eventLogOut}>
          <p>Logout</p>
        </button>
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="header">
      <img src={menu} alt="menu" className="header-image-menu" />
      <p className="header-title">BitBox</p>
      <p className="header-title-tab">Shuffle</p>
      <p className="header-title-tab">Get App</p>
      <p className="header-title-tab">Donate</p>
      <p className="header-title-tab">Crypto</p>
      <p className="header-title-tab">Ask Brazil</p>
      <p className="header-title-tab">Ask Brazil</p>
      <p className="header-title-tab">80s</p>
      <p className="header-title-tab">Ask Girls</p>
      {login?.user?.id ? (
        <Dropdown overlay={listOptions} className="btn-dropdown-link">
          <button onClick={e => e.preventDefault()}>
            <img src={AvatarDefault} alt="" className="box-avatar" />
          </button>
        </Dropdown>
      ) : (
        <Button onClick={showModal} className="header-btn-create-post btn-login" type="primary">
          <p className="btn-upload-title">Login</p>
        </Button>
      )}
      {login?.user?.id && (
        <Button onClick={createPost} className="header-btn-create-post" type="primary">
          <p className="btn-upload-title">+ Upload</p>
        </Button>
      )}
      <Modal title="Login" visible={isShowing} footer={null} centered onOk={closeModal} onCancel={closeModal}>
        <Login onSubmitLogin={onSubmitLogin} />
      </Modal>
      <Modal
        title="Upload a Post"
        visible={showPostModal}
        footer={null}
        centered
        onOk={closeModalCreatePost}
        onCancel={closeModalCreatePost}
      >
        <CreatePost />
      </Modal>
    </div>
  );
};

export default Header;
