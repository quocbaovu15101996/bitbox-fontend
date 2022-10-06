import { Button, Modal } from 'antd';
import { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './index.less';
import { Input } from 'antd';
import AvatarDefault from 'assets/post/user.png';
import Login from 'components/login';
import useModal from 'hooks/useModal';
import { submitLogin } from 'api/login.api';
import { loginSuccess } from 'stores/login/login.actions';

type Props = {
  onCreateComment: (comment: string) => void;
};

const CommentBox: FC<Props> = ({ onCreateComment }) => {
  const { isShowing, closeModal, showModal } = useModal();
  const { TextArea } = Input;
  const [text, setText] = useState<string>('');
  const login = useSelector((state: any) => state.login);
  const dispatch = useDispatch();

  const onChangeText = (e: { target: { value: string } }) => {
    setText(e.target.value);
  };

  const onClickPost = () => {
    if (text.length > 0) {
      onCreateComment(text);
      setText('');
    }
  };

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

  if (login?.user?.id) {
    return (
      <div className="comment-box">
        <img src={AvatarDefault} alt="" className="comment-box-avatar" />
        <div className="comment-box-input">
          <TextArea value={text} rows={4} placeholder="Write a comment..." onChange={onChangeText} />
          <Button className="btn-comment" onClick={onClickPost}>
            Post
          </Button>
        </div>
      </div>
    );
  }
  return (
    <div className="comment-box-require-login">
      <p className="comment-box-require-login-text">Login or SignUp to leave a comment</p>
      <div>
        <Button className="btn-login" onClick={showModal}>
          Login
        </Button>
        <Modal title="Login" visible={isShowing} footer={null} centered onOk={closeModal} onCancel={closeModal}>
          <Login onSubmitLogin={onSubmitLogin} />
        </Modal>
      </div>
    </div>
  );
};

export default CommentBox;
