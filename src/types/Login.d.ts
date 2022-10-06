interface ResponseLogin {
  jwt: string;
  user: User;
}
interface User {
  username: string;
  email: string;
  avatar: string;
  provider: string;
  confirmed: boolean;
  blocked: boolean;
  id: number;
}

interface UserInfo {
  attributes: {
    username: string;
    email: string;
    avatar: string;
    provider: string;
    confirmed: boolean;
    blocked: boolean;
  };
  id: number;
}
