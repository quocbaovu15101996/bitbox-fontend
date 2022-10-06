import { Button, Form, Input } from 'antd';
import { FC } from 'react';
import './index.less';

type Props = {
  onSubmitLogin: (data: any) => void;
};

const Login: FC<Props> = ({ onSubmitLogin }) => {
  const [form] = Form.useForm();

  const onFinished = async (dataForm: any) => {
    if (dataForm.username && dataForm.password) {
      onSubmitLogin(dataForm);
      form.setFieldsValue({
        password: ''
      });
    }
    // onSubmitLogin(dataForm);
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 6 }}
      // wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinished}
      //   onFinishFailed={onFinishFailed}
      // onChange={() => console.log('onchange')}
      autoComplete="off"
    >
      <Form.Item label="Username" name="username" rules={[{ required: true, message: 'Please input your username!' }]}>
        <Input />
      </Form.Item>

      <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
        <Input.Password />
      </Form.Item>

      <Form.Item className="form-login">
        <Button type="primary" htmlType="submit" className="btn-login">
          Login
        </Button>
      </Form.Item>
    </Form>
  );
};
export default Login;
